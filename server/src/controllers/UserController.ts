import { Request, Response } from "express";
import { prisma } from "../db/config";
import { User, UsernameInterface, LoginInterface } from "../zodTypes/user";
import { generateEncryptedPassword, comparePassword } from "../utils/bcrypt";
import { generateToken } from "../utils/token";
const createUser = async (req: Request, res: Response) => {
  try {
    if (!User.safeParse(req.body).success) {
      return res.status(400).json({ error: User.safeParse(req.body).error });
    }
    const user = User.parse(req.body);
    const findUser = await prisma.user.findUnique({
      where: {
        email: user.email,
      },
    });
    if (findUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const pass = await generateEncryptedPassword(user.password);
    user.password = pass;
    const newUser = await prisma.user.create({
      data: user,
    });
    const token = generateToken(newUser.id);
    return res.status(201).json({ newUser, token });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

const login = async (req: Request, res: Response) => {
  try {
    if (!LoginInterface.safeParse(req.body).success) {
      return res.status(400).json({ error: User.safeParse(req.body).error });
    }
    const user = LoginInterface.parse(req.body);
    if (!user.email && !user.username) {
      return res.status(400).json({ error: "Email or username is required" });
    }
    const findUser = await prisma.user.findUnique({
      where: {
        email: user.email!,
        username: user.username!,
      },
    });
    if (!findUser) {
      return res.status(400).json({ message: "User does not exist" });
    }
    const pass = await comparePassword(user.password, findUser.password);
    if (!pass) {
      return res.status(400).json({ message: "Invalid password" });
    }
    const token = generateToken(findUser.id);
    return res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    return res.status(500).json({ error: "Some error occured!" });
  }
};

const checkUsername = async (req: Request, res: Response) => {
  const check = UsernameInterface.safeParse(req.body);
  if (!check.success) {
    return res.status(400).json({ error: check.error });
  }
  const { username } = UsernameInterface.parse(req.body);
  const user = await prisma.user.findUnique({
    where: {
      username: username,
    },
  });
  if (user) {
    return res.status(400).json({ message: "Username already exists" });
  }
  return res.status(200).json({ message: "Username is available" });
};

export { createUser, login, checkUsername };
