import { sign, verify } from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

export const generateToken = (id: string): string => {

  return sign(id, process.env.JWT_SECRET as string, {});
};

export const verifyToken = (token: string): string => {
  return verify(token, process.env.JWT_SECRET as string) as string;
};
