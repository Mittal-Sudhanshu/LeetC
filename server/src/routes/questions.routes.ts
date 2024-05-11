import express from "express";
import { createQuestion, getAllQuestions, getDiffCount, getQuestionById, getQuestionsByDifficulty, getRandomQuestions } from "../controllers/Questions.Controller";
import { CheckAdmin, CheckLogin } from "../middlewares/authMiddleware";
const router = express.Router();


router.post('/create', CheckAdmin, createQuestion);
router.route('/random').get(getRandomQuestions)
router.get('/all', getAllQuestions);
router.get('/:id', getQuestionById);
router.route('/difficulty/:difficulty').get(getQuestionsByDifficulty)
router.route('/').get(getDiffCount)
export default router;
