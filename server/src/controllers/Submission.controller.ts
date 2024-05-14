import { Request, Response } from "express";
import { SubmissionInterface } from "../zodTypes/submission";
import { prisma } from "../db/config";


const CreateSubmission = async (req: Request, res: Response) => {
    try {
        if (!SubmissionInterface.safeParse(req.body).success) {
            return res.status(400).json({ error: SubmissionInterface.safeParse(req.body).error })
        }
        const submission = SubmissionInterface.parse(req.body);
        submission.userId = req.body.currUserId;
        //save submission to database
        const newSubmission = await prisma.submission.create({
            data: submission
        });
        return res.status(201).json(newSubmission);
    }
    catch (err) {
        return res.status(500).json({ error: err })
    }
}
export { CreateSubmission };