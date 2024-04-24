import express from "express";
import {
  checkUsername,
  createUser,
  login,
} from "../controllers/UserController";

const router = express.Router();

router.route("/signup").post(createUser);
router.route("/checkUsername").post(checkUsername);
router.route("/login").post(login);
export { router as userRouter };
// Compare this snippet from server/src/index.ts: