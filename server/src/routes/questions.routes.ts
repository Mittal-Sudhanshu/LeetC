import express from "express";
import { createQuestion, getAllQuestions, getQuestionById } from "../controllers/Questions.Controller";
import { CheckAdmin, CheckLogin } from "../middlewares/authMiddleware";
const router = express.Router();


router.post('/create', CheckAdmin, createQuestion);
router.get('/all', getAllQuestions);
router.get('/:id', getQuestionById);

export default router;
