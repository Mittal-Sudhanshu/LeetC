import express from "express";
import { createTag } from "../controllers/Tag.conroller";
const router = express.Router();

router.route("/create").post(createTag);

export { router };