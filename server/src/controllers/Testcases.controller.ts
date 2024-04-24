import { prisma } from "../db/config";
import { TestCaseInterface, UpdateTestCaseInterface } from "../zodTypes/testcases";
import { Request, Response } from "express";
const createTestcase = async (req: Request, res: Response) => {
    try {
        if (!TestCaseInterface.safeParse(req.body).success) {
            return res.status(400).json({ error: TestCaseInterface.safeParse(req.body).error })
        }
        const testcase = TestCaseInterface.parse(req.body);
        const newTestcase = await prisma.testCase.create({
            data: testcase
        });
        return res.status(201).json(newTestcase);
    }
    catch (err) {
        return res.status(500).json({ error: err })
    }
};

const updateTestcase = async (req: Request, res: Response) => {
    try {
        const testcaseId = req.params.id;
        if (!UpdateTestCaseInterface.safeParse(req.body).success) {
            return res.status(400).json({ error: UpdateTestCaseInterface.safeParse(req.body).error })
        }
        const testcase = UpdateTestCaseInterface.parse(req.body);
        const updatedTestcase = await prisma.testCase.update({
            where: {
                id: testcaseId
            },
            data: testcase
        });
        return res.status(200).json(updatedTestcase);
    }
    catch (err) {
        return res.status(500).json({ error: err })
    }
};

export { createTestcase, updateTestcase };