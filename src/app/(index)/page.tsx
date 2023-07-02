"use client";

import { Athletes } from "@/components/Athletes/Athletes";
import { AuthForm } from "@/components/Auth/AuthForm";
import { authentication } from "@/lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
  const [auth, isLoading] = useAuthState(authentication);

  return (
    <main>
      {auth ? (
        <>
          <div className="pt-2">
            <h1 className="text-2xl pb-4">
              Welcome {auth.displayName ? auth.displayName : auth.email}
            </h1>
            <Athletes />
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center">
          <AuthForm className="mt-12" isLoading={isLoading} />
        </div>
      )}
    </main>
  );
}
