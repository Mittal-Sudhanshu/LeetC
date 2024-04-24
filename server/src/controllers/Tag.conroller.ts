import { Request, Response } from "express";
import { tag } from "../zodTypes/tag";
import { prisma } from "../db/config";

const createTag = async (req: Request, res: Response) => {
    try {
        if (!tag.safeParse(req.body).success) {
            return res.status(400).json({ error: tag.safeParse(req.body).error })
        }
        const tagg = tag.parse(req.body);
        const newTag = await prisma.tag.create({
            data: tagg
        });
        return res.status(201).json(newTag);
    }
    catch (err) {
        return res.status(500).json({ error: err })
    }
};
export { createTag };