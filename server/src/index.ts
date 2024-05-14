import express from "express";
import * as dotenv from "dotenv";
import { connectDB } from "./db/config";
import { router } from "./routes";
import cors from "cors";
const app = express();
dotenv.config();
const PORT = process.env.PORT;
app.use(cors({
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
// // console.log(PORT);
app.use(express.json());
app.use("/api/v1", router);
connectDB();
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
