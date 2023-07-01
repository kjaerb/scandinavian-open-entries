"use client";

import { AuthForm } from "@/components/Auth/AuthForm";
import { SignOut } from "@/components/Auth/SignOut";
import { authentication } from "@/lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
  const [auth, isLoading] = useAuthState(authentication);

  console.log(auth);

  return (
    <main className="flex justify-center items-center">
      {auth ? (
        <SignOut />
      ) : (
        <div className="flex justify-center items-center">
          <AuthForm isLoading={isLoading} />
        </div>
      )}
    </main>
  );
}
