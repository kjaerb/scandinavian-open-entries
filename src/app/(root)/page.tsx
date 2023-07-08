"use client";

import { AuthForm } from "@/components/Auth/AuthForm";
import { AddAthleteForm } from "@/components/Forms/AddAthleteForm/AddAthleteForm";
import { AthletesTable } from "@/components/Tables/AthletesTable/AthletesTable";
import { Separator } from "@/components/ui/Separator";
import { authentication } from "@/lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
  const [auth, isLoading] = useAuthState(authentication);

  return (
    <div>
      {auth ? (
        <>
          <div className="pt-2">
            <h1 className="text-2xl pb-4">
              Welcome {auth.displayName ? auth.displayName : auth.email}
            </h1>
            <AddAthleteForm />
            <AthletesTable athletes={undefined} />
          </div>
        </>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-12 justify-center">
          <div
            className="text-center md:text-left pr-0 md:pr-8 mb-12 md:mb-0"
            //@ts-ignore
            style={{ "text-wrap": "balance" }}
          >
            <h1 className="text-2xl pb-4 ">
              Welcome to the 2024 Scandinavian Open competition
            </h1>
            <p>
              This year, we&apos;ve simplified the registration process, by
              creating an online form, where you can register and update your
              athletes continuously.
            </p>
            <p className="mt-2">
              To get started, please sign in, using one of our providers
            </p>
          </div>
          <AuthForm className="mx-auto" isLoading={isLoading} />
        </div>
      )}
    </div>
  );
}
