import express from "express";
import { userRouter } from "./user.routes";
import { router as tagRouter } from './tag.routes';
import { router as testCaseRouter } from './testcases.routes';
import questionRouter from './questions.routes';
const router = express.Router();

router.route("/").get((req, res) => {
  res.json({ message: "Hello from the server!" });
});

router.use("/user", userRouter);
router.use("/question", questionRouter);
router.use("/tag", tagRouter);
router.use("/testcase", testCaseRouter);
export { router };
