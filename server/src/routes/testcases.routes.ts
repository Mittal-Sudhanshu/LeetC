import express from "express";
import { createTestcase, updateTestcase } from "../controllers/Testcases.controller";
const router = express.Router();

router.route('/create').post(createTestcase);
router.route('/update/:id').put(updateTestcase);

export { router };