"use client";

import { signOut } from "firebase/auth";
import { Button } from "@/components/ui/Button";
import { authentication } from "@/lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { cn } from "@/lib/utils";

interface SignOutProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function SignOut({ className, ...props }: SignOutProps) {
  const [user] = useAuthState(authentication);

  if (!user) return null;

  return (
    <Button
      className={cn(className)}
      {...props}
      disabled={!user}
      onClick={async () => await signOut(authentication)}
    >
      Sign Out
    </Button>
  );
}
