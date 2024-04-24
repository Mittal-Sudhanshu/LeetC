import { Request, Response } from "express";
import { Question } from "../zodTypes/question";
import { prisma } from "../db/config";
import { Difficulty } from "@prisma/client";


const createQuestion = async (req: Request, res: Response) => {
    try {
        req.body.user=req.body.currUserId;
        if (!Question.safeParse(req.body).success) {
            return res.status(400).json({ error: Question.safeParse(req.body).error })
        }
        
        // save question to database
        const question = Question.parse(req.body);
        question.user = req.body.currUserId;
        const newQuestion = await prisma.question.create({
            data: {
                title: question.title,
                tags: {
                    connect: question.tags.map((tag) => ({ id: tag }))
                },
                description: question.description,
                difficulty: question.difficulty,
                userId: question.user
            }
        });
        return res.status(201).json(newQuestion);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
};

const getAllQuestions = async (req: Request, res: Response) => {
    try {
        const questions = await prisma.question.findMany({
            select: {
                tags: true,
                user: true,
                description: false,
                difficulty: true,
                title: true,
            }
        });
        return res.status(200).json(questions);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
};

const getQuestionById = async (req: Request, res: Response) => {
    try {
        const questionId = req.params.id;
        const question = await prisma.question.findUnique({
            where: {
                id: parseInt(questionId)
            },
            include:{
                tags:true,
                testCase:true
            }
        });
        if (!question) {
            return res.status(404).json({ message: "Question not found" });
        }
        return res.status(200).json(question);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
};


export { createQuestion, getAllQuestions, getQuestionById };