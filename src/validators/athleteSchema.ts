import { Competition, competition } from "@/types/Competition";
import { Gender, gender } from "@/types/Gender";
import { ZodLiteral, z } from "zod";

export const athleteSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name can minimum be 2 characters" })
    .max(50, { message: "Name can maximum be 50 characters" }),
  dob: z.preprocess((arg) => {
    if (typeof arg == "string" || arg instanceof Date) return new Date(arg);
  }, z.date()),
  competition: z
    .custom<Competition | "">()
    .refine((val) => val !== "", {
      message: "Competition is required",
    })
    .refine((val) => competition.includes(val as Competition), {
      message: "Competition must be one of: " + competition.join(", "),
    }),
  gender: z
    .custom<Gender | "">()
    .refine((val) => val !== "", {
      message: "Gender is required",
    })
    .refine((val) => gender.includes(val as Gender), {
      message: "Gender must be one of: " + gender.join(", "),
    }),
  docId: z.string().optional(),
});

export const athletesSchema = z.array(athleteSchema);

export type Athlete = z.infer<typeof athleteSchema>;
