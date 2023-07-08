import { UserInfoSchema } from "@/validators/userInfoSchema";
import { User } from "firebase/auth";

export type FirebaseUserDoc = User & {
  contactInfo?: UserInfoSchema;
};
