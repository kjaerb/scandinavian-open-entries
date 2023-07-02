import { Competition } from "@/types/Competition";
import { Gender } from "@/types/Gender";
import { z } from "zod";

export const athleteSchema = z.object({
  name: z.string().min(2).max(255),
  dob: z.date().min(new Date(1900, 1, 1)).max(new Date()),
  competition: z.custom<Competition>(),
  gender: z.custom<Gender>(),
});

export const athletesSchema = z.array(athleteSchema);

export type Athlete = z.infer<typeof athleteSchema>;
