import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { Separator } from "@radix-ui/react-separator";
import { OAuths } from "./OAuths";
import { Loading } from "../ui/Loading";
import { cn } from "@/lib/utils";

interface AuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  isLoading: boolean;
}

export function AuthForm({
  isLoading = false,
  className,
  ...props
}: AuthFormProps) {
  return (
    <div
      className={cn(
        "xs:min-w-[375px] sm:min-w-[400px] w-max relative",
        className
      )}
      {...props}
    >
      {isLoading && (
        <div className="w-full h-full bg-gray-200 opacity-50 absolute flex justify-center items-center">
          <Loading className="w-10 h-10" />
        </div>
      )}

      <h3 className="font-bold text-lg text-center pb-4">
        Sign in using one of our providers
      </h3>

      <OAuths />
      <div className="flex my-4 items-center">
        <Separator className="my-2 rounded-md bg-gray-200 h-0.5 w-full" />
        <p className="px-4 text-gray-500">Or</p>
        <Separator className="my-2 rounded-md bg-gray-200 h-0.5 w-full" />
      </div>
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
