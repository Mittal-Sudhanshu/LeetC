import { hashSync, genSalt, compare } from "bcryptjs";

const generateEncryptedPassword = async (password: string): Promise<string> => {
  const salt = await genSalt(10);
  return hashSync(password, salt);
};

const comparePassword = async (
  password: string,
  hash: string
): Promise<boolean> => {
  return await compare(password, hash);
};

export { generateEncryptedPassword,comparePassword };
