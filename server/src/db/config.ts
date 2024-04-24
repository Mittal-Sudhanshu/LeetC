import { PrismaClient } from "@prisma/client";
const prisma:PrismaClient = new PrismaClient();
const connectDB = async () => {
  try {
    prisma.$connect();
    console.log("Database connected")
  } catch (err) {
    console.log(err);
  }
};

export { connectDB, prisma };
