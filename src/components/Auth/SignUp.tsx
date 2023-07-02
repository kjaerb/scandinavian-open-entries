"use client";

import { Input } from "@/components/ui/Input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Button } from "../ui/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { useForm } from "react-hook-form";
import { SignUpSchema, signUpSchema } from "@/validators/authSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/useToast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { authentication } from "@/lib/firebase";
import { useState } from "react";
import { Loading } from "../ui/Loading";

interface SignUpProps {}

export function SignUp({}: SignUpProps) {
  const [isLoading, setisLoading] = useState<boolean>(false);

  const { toast } = useToast();

  const signUpForm = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { control, handleSubmit } = signUpForm;

  async function onSubmit(data: SignUpSchema) {
    try {
      setisLoading(true);
      signUpSchema.parse(data);

      await createUserWithEmailAndPassword(
        authentication,
        data.email,
        data.password
      );
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again later.",
      });
    } finally {
      setisLoading(false);
    }
  }

  return (
    <Card>
      <Form {...signUpForm}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardHeader>
            <CardTitle className="mx-auto">Sign Up</CardTitle>
            <CardDescription className="mx-auto pt-2 text-center">
              If you do not have an account, please sign up.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      type="new-password"
                      placeholder="Repeat password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? <Loading /> : "Sign In"}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
