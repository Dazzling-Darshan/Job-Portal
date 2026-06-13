import express from 'express';
import  userController  from '../controllers/user.controller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';
import { singleUpload } from '../middlewares/multer.js';
const router = express.Router();

router.post("/register",singleUpload, userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/logout", userController.logoutUser);
router.post("/profile/update",isAuthenticated, singleUpload ,userController.updateProfile);

export default router;