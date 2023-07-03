import { z } from "zod";

export const userInfoSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be minimum 2 characters" })
    .max(50, { message: "Name can maximum be 50 characters" }),
  contactEmail: z.string().email({ message: "Invalid email" }),
  email: z.string().email().optional(),
  phone: z
    .string()
    .min(2, { message: "Phone must be minimum 2 digits" })
    .max(20, { message: "Phone can maximum be 20 digits" }),
  country: z.string().min(2).max(50),
  organization: z
    .object({
      club: z.string().optional(),
      federation: z.string().optional(),
    })
    .partial()
    .refine(
      (data) => !!data.club || !!data.federation,
      "Either club or federation must be provided"
    ),
});

export type UserInfoSchema = z.infer<typeof userInfoSchema>;
