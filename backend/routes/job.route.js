import express from 'express';
import  jobController  from '../controllers/job.controller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';
const router = express.Router();

router.post("/post",isAuthenticated, jobController.postJob);
router.get("/get",isAuthenticated, jobController.getAllJobs);
router.get("/get/adminJobs", isAuthenticated,jobController.getAdminJobs);
router.get("/get/:id",isAuthenticated, jobController.getJobById);

export default router; 