import { z } from "zod";

export const userInfoSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().min(2).max(50),
  country: z.string().min(2).max(50),
  club: z.string().min(2).max(50).optional(),
  federation: z.string().min(2).max(50).optional(),
});

export type UserInfoSchema = z.infer<typeof userInfoSchema>;
