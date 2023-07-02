import { z } from "zod";

export const userInfoSchema = z.object({
  name: z.string().min(2).max(50),
  contactEmail: z.string().email(),
  email: z.string().email().optional(),
  phone: z.string().min(2).max(50),
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
