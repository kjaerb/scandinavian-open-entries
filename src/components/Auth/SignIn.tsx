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
import { Button } from "@/components/ui/Button";
import { useForm } from "react-hook-form";
import { SignInSchema, signInSchema } from "@/validators/authSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { useToast } from "@/hooks/useToast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { authentication } from "@/lib/firebase";
import { useState } from "react";
import { Loading } from "../ui/Loading";

interface SignInProps {}

export function SignIn({}: SignInProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { toast } = useToast();

  const signInForm = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { control, handleSubmit } = signInForm;

  async function onSubmit(data: SignInSchema) {
    try {
      setIsLoading(true);
      signInSchema.parse(data);

      await signInWithEmailAndPassword(
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
      setIsLoading(false);
    }
  }

  return (
    <Card>
      <Form {...signInForm}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardHeader>
            <CardTitle className="mx-auto">Sign In</CardTitle>
            <CardDescription className="mx-auto pt-2 text-center">
              If you already have an account, please sign in
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
