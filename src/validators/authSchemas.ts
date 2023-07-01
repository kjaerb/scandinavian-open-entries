import { z } from "zod";

const minPasswordConfig = {
  length: 8,
  message: "Password must be at least 8 characters long",
};

const maxPasswordConfig = {
  length: 100,
  message: "Password must be less than 100 characters long",
};

const signUpSchema = z
  .object({
    email: z.string().email({ message: "Please enter a valid email address" }),
    password: z
      .string()
      .min(minPasswordConfig.length, minPasswordConfig.message)
      .max(maxPasswordConfig.length, maxPasswordConfig.message),
    confirmPassword: z
      .string()
      .min(minPasswordConfig.length, minPasswordConfig.message)
      .max(100),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type SignUpSchema = z.infer<typeof signUpSchema>;

const signInSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(minPasswordConfig.length, minPasswordConfig.message)
    .max(maxPasswordConfig.length, maxPasswordConfig.message),
});

type SignInSchema = z.infer<typeof signInSchema>;

export { signUpSchema, signInSchema };

export type { SignUpSchema, SignInSchema };
