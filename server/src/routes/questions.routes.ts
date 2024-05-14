import express from "express";
import { createQuestion, getAllQuestions, getDiffCount, getQuestionById, getQuestionsByDifficulty, getRandomQuestions } from "../controllers/Questions.Controller";
import { CheckAdmin, CheckLogin } from "../middlewares/authMiddleware";
const router = express.Router();


router.post('/create', CheckAdmin, createQuestion);
router.route('/random').get(CheckLogin,getRandomQuestions)
router.get('/all', CheckLogin,getAllQuestions);
router.get('/:id', CheckLogin,getQuestionById);
router.route('/difficulty/:difficulty').get(CheckLogin,getQuestionsByDifficulty)
router.route('/').get(CheckLogin,getDiffCount)
export default router;
