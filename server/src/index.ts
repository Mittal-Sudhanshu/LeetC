import express from "express";
import * as dotenv from "dotenv";
const app = express();
dotenv.config();
const PORT = process.env.PORT;

console.log(PORT);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
