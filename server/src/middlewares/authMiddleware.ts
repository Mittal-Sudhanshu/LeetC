import { Request, Response } from "express";
import { verifyToken } from "../utils/token";
import { prisma } from "../db/config";

const CheckLogin = async (req: Request, res: Response, next: Function) => {
    const header = req.headers.authorization;
    if (!header || !header.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    const token = header.split(" ")[1];
    const decodedUserId = verifyToken(token);
    req.body.currUserId = decodedUserId;
    console.log(req.body.currUserId)
    next();
};

const CheckAdmin = async (req: Request, res: Response, next: Function) => {
    const header = req.headers.authorization;
    if (!header || !header.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    const token = header.split(" ")[1];
    const decodedUserId = verifyToken(token);
    req.body.currUserId = decodedUserId;

    const user = await prisma.user.findUnique({
        where: {
            id: decodedUserId,
        },
    });
    if (!user || user.role !== "ADMIN") {
        return res.status(401).json({ error: "Unauthorized" });
    }

    next();
};

export { CheckLogin,CheckAdmin };