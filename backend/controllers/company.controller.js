import { Company } from '../models/company.model.js';

// REGISTER COMPANY
const registerCompany = async (req, res) => {
    try {
        const { companyName } = req.body;

        if (!companyName) {
            return res.status(400).json({
                message: "Company name is required",
                success: false
            });
        }

        let company = await Company.findOne({ name: companyName });

        if (company) {
            return res.status(400).json({
                message: "Company already exists with this name",
                success: false
            });
        }

        company = await Company.create({
            name: companyName,
            createdBy: req.id,
        });

        return res.status(201).json({
            message: "Company registered successfully",
            success: true,
            company
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Company registration failed",
            success: false
        });
    }
};


// GET ALL COMPANIES OF USER
const getCompanies = async (req, res) => {
    try {
        const userId = req.id;

        const companies = await Company.find({ createdBy: userId });

        if (companies.length === 0) {
            return res.status(404).json({
                message: "No companies found",
                success: false
            });
        }

        return res.status(200).json({
            message: "Companies fetched successfully",
            success: true,
            companies
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Failed to fetch companies",
            success: false
        });
    }
};


// GET COMPANY BY ID
const getCompanyById = async (req, res) => {
    try {
        const companyId = req.params.id;

        const company = await Company.findById(companyId);

        if (!company) {
            return res.status(404).json({
                message: "Company not found",
                success: false
            });
        }

        return res.status(200).json({
            message: "Company found",
            success: true,
            company
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Failed to fetch company",
            success: false
        });
    }
};

const updateCompany = async (req, res) => {
    try {
        const { name, description, website, location } = req.body;

        const updateData = {};

        if (name) updateData.name = name;
        if (description) updateData.description = description;
        if (website) updateData.website = website;
        if (location) updateData.location = location;

        if (Object.keys(updateData).length === 0) {
            return res.status(400).json({
                message: "No data provided to update",
                success: false
            });
        }

        const company = await Company.findById(req.params.id);

        if (!company) {
            return res.status(404).json({
                message: "Company not found",
                success: false
            });
        }

        // 🔐 ownership check
        // if (company.createdBy.toString() !== req.id) {
        //     return res.status(403).json({
        //         message: "Unauthorized",
        //         success: false
        //     });
        // }

        const updatedCompany = await Company.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true }
        );

        return res.status(200).json({
            message: "Company updated successfully",
            success: true,
            company: updatedCompany
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Failed to update company",
            success: false
        });
    }
};

export default {
    registerCompany,
    getCompanies,
    getCompanyById,
    updateCompany
};