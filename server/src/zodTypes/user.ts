import { z } from "zod";

const User = z.object({
  email: z.string().email(),
  username: z.string(),
  password: z.string(),
  name: z.string(),
  image: z.string().optional(),
  role: z.enum(["ADMIN", "USER"]).optional(),
});

const LoginInterface = z.object({
  email: z.string(),
  password: z.string(),

});

const UsernameInterface = z.object({
  username: z.string(),
});

export { User, UsernameInterface,LoginInterface };
