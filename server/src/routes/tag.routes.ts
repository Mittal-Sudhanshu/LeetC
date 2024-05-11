import express from "express";
import { createTag, getAllTags } from "../controllers/Tag.conroller";
const router = express.Router();

router.route("/create").post(createTag);
router.route("/").get(getAllTags);
export { router };