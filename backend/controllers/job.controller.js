import { Job } from "../models/job.model.js";

// CREATE JOB
const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      experience,
      position,
      companyId,
    } = req.body;

    const userId = req.id;

    if (
      !title ||
      !description ||
      !requirements ||
      !salary ||
      !location ||
      !jobType ||
      !experience ||
      !position ||
      !companyId
    ) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    const job = await Job.create({
      title,
      description,
      requirements: requirements.split(","),
      salary: Number(salary),
      location,
      jobType,
      experience,
      position,
      company: companyId,
      createdBy: userId,
    });

    return res.status(201).json({
      message: "New Job created successfully",
      success: true,
      job,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};

// GET ALL JOBS
const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";

    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    };

    const jobs = await Job.find(query).populate({
        path :"company"
    }).sort({createdAt : -1});

    return res.status(200).json({
      jobs,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};

// GET JOB BY ID
const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;

    const job = await Job.findById(jobId).populate({
      path: "applications",
      populate: {
        path: "applicant"
      }
    });

    if (!job) {
      return res.status(404).json({
        message: "No job found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Job found successfully",
      success: true,
      job,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};

// GET ADMIN JOBS
const getAdminJobs = async (req, res) => {
  try {
    const recruiterId = req.id;

    const jobs = await Job.find({ createdBy: recruiterId }).populate({
      path: "company"
    });

    if (jobs.length === 0) {
      return res.status(200).json({
        message: "No jobs found",
        success: true,
        jobs: []
      });
    }

    return res.status(200).json({
      message: "Jobs found",
      success: true,
      jobs,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};

export default {
  postJob,
  getAllJobs,
  getJobById,
  getAdminJobs,
};