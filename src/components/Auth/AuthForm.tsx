import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { Separator } from "@radix-ui/react-separator";
import { OAuths } from "./OAuths";
import { Loading } from "../ui/Loading";

interface AuthFormProps {
  isLoading: boolean;
}

export function AuthForm({ isLoading = false }: AuthFormProps) {
  return (
    <div className="xs:min-w-[375px] sm:min-w-[400px] w-max relative">
      {isLoading && (
        <div className="w-full h-full bg-gray-200 opacity-50 absolute flex justify-center items-center">
          <Loading className="w-10 h-10" />
        </div>
      )}
      <OAuths />
      <Separator className="my-2 rounded-md bg-gray-200 h-0.5" />
      <Tabs defaultValue="sign-in">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="sign-in">Sign In</TabsTrigger>
          <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="sign-in">
          <SignIn />
        </TabsContent>
        <TabsContent value="sign-up">
          <SignUp />
        </TabsContent>
      </Tabs>
    </div>
  );
}
