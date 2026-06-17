import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { JOB_API_ENDPOINT } from "@/utils/constant";

const PostJob = () => {
  const navigate = useNavigate();

  const { companies = [] } = useSelector((store) => store.company);

  const [input, setInput] = useState({
    title: "",
    description: "",
    requirements: "",
    salary: "",
    location: "",
    jobType: "",
    experience: "",
    position: "",
    companyId: "",
  });

  const [loading, setLoading] = useState(false);
  const [companyError, setCompanyError] = useState("");

  const changeEventHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const selectCompanyHandler = (value) => {
    setInput({
      ...input,
      companyId: value,
    });

    setCompanyError("");
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!input.companyId) {
      setCompanyError(
        "Please select a company before creating a job."
      );
      return;
    }

    try {
      setLoading(true);

      const payload = {
        ...input,
        position: Number(input.position),
      };

      // Replace with your actual API endpoint
      const res = await axios.post(
        `${JOB_API_ENDPOINT}/post`,
        payload,
        {
          withCredentials: true,
        }
      );

      if (res.data.success) {
        navigate("/admin/jobs");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border p-8">
            <h1 className="text-3xl font-bold text-gray-800">
              Create New Job
            </h1>

            <p className="text-gray-500 mt-2 mb-6">
              Post a new job opening for one of your registered companies.
            </p>

            {/* No Company Warning */}
            {companies.length === 0 && (
              <div className="mb-6 rounded-lg border border-red-300 bg-red-50 p-4">
                <p className="text-sm font-medium text-red-600">
                  Please register a company first before posting a job.
                </p>
              </div>
            )}

            <form
              onSubmit={submitHandler}
              className="grid md:grid-cols-2 gap-6"
            >
              <div>
                <Label>Job Title</Label>
                <Input
                  type="text"
                  name="title"
                  value={input.title}
                  onChange={changeEventHandler}
                  placeholder="Frontend Developer"
                />
              </div>

              <div>
                <Label>Salary</Label>
                <Input
                  type="number"
                  name="salary"
                  value={input.salary}
                  onChange={changeEventHandler}
                  placeholder="50000"
                />
              </div>

              <div>
                <Label>Description</Label>
                <Input
                  type="text"
                  name="description"
                  value={input.description}
                  onChange={changeEventHandler}
                  placeholder="Enter job description"
                />
              </div>

              <div>
                <Label>Requirements</Label>
                <Input
                  type="text"
                  name="requirements"
                  value={input.requirements}
                  onChange={changeEventHandler}
                  placeholder="React, Node.js, MongoDB"
                />
              </div>

              <div>
                <Label>Location</Label>
                <Input
                  type="text"
                  name="location"
                  value={input.location}
                  onChange={changeEventHandler}
                  placeholder="Ahmedabad"
                />
              </div>

              <div>
                <Label>Job Type</Label>
                <Input
                  type="text"
                  name="jobType"
                  value={input.jobType}
                  onChange={changeEventHandler}
                  placeholder="Full Time"
                />
              </div>

              <div>
                <Label>Experience Level</Label>
                <Input
                  type="text"
                  name="experience"
                  value={input.experience}
                  onChange={changeEventHandler}
                  placeholder="2 Years"
                />
              </div>

              <div>
                <Label>Number of Positions</Label>
                <Input
                  type="number"
                  name="position"
                  value={input.position}
                  onChange={changeEventHandler}
                  placeholder="5"
                />
              </div>

              {/* Company Select */}
              <div className="md:col-span-2">
                <Label>Select Company</Label>

                <Select
                  onValueChange={selectCompanyHandler}
                  value={input.companyId}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose a registered company" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectGroup>
                      {companies.map((company) => (
                        <SelectItem
                          key={company._id}
                          value={company._id}
                        >
                          {company.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>

                {companyError && (
                  <p className="mt-2 text-sm font-medium text-red-500">
                    {companyError}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2">
                <Button
                  type="submit"
                  disabled={loading || companies.length === 0}
                  className="w-full h-11"
                >
                  {loading ? "Posting Job..." : "Post New Job"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostJob;