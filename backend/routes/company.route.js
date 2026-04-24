import express from 'express';
import  companyController  from '../controllers/company.controller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';
const router = express.Router();

router.post("/register",isAuthenticated, companyController.registerCompany);
router.get("/get",isAuthenticated, companyController.getCompanies);
router.get("/get/:id", isAuthenticated,companyController.getCompanyById);
router.put("/update/:id",isAuthenticated, companyController.updateCompany);

export default router; 