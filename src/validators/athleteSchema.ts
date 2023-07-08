import { Competition, competition } from "@/types/Competition";
import { Gender, gender } from "@/types/Gender";
import { ZodLiteral, z } from "zod";

export const athleteSchema = z.object({
  name: z.string().min(2).max(255),
  dob: z.string().pipe(z.coerce.date()),
  competition: z
    .custom<Competition & ZodLiteral<string>>()
    .refine((val) => val in competition, {
      message: "Please input a competition",
    }),
  gender: z
    .custom<Gender & ZodLiteral<string>>()
    .refine((val) => val in gender, {
      message: "Please input a gender",
    }),
});

export const athletesSchema = z.array(athleteSchema);

export type Athlete = z.infer<typeof athleteSchema>;
