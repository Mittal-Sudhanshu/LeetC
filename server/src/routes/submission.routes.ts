import express from "express";
import { CreateSubmission } from "../controllers/Submission.controller";
import { CheckLogin } from "../middlewares/authMiddleware";
const router = express.Router();


router.route('/create').post(CheckLogin,CreateSubmission);
export {router as submissionRouter};