"use client";

import { signOut } from "firebase/auth";
import { Button } from "@/components/ui/Button";
import { authentication } from "@/lib/firebase";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";

interface SignOutProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function SignOut({ className, ...props }: SignOutProps) {
  const [user] = useAuthState(authentication);

  if (!user) return null;

  return (
    <Button
      className={className}
      {...props}
      disabled={!user}
      onClick={async () => await signOut(authentication)}
      asChild={true}
    >
      <p>Sign Out</p>
    </Button>
  );
}
