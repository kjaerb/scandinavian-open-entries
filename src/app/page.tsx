"use client";

import { Athletes } from "@/components/Athletes/Athletes";
import { AuthForm } from "@/components/Auth/AuthForm";
import AddUserInfo from "@/components/Forms/AddUserInfo/AddUserInfo";
import { authentication, db } from "@/lib/firebase";
import { getDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
  const [auth, isLoading] = useAuthState(authentication);
  const [openDialog, setOpenDialog] = useState<boolean>(true);

  useEffect(() => {
    const hasInfo = async () => {
      const userDoc = doc(db, `users/${auth?.uid}`);
      const d = await getDoc(userDoc);
      console.log(d.data());
    };

    if (auth) {
      hasInfo();
    }
  }, [auth]);

  return (
    <main className="">
      {auth ? (
        <>
          <div className="pt-2">
            <h1 className="text-2xl pb-4">
              Welcome {auth.displayName ? auth.displayName : auth.email}
            </h1>
            <Athletes />
          </div>
          <AddUserInfo isOpen={openDialog} setIsOpen={setOpenDialog} />
        </>
      ) : (
        <div className="flex justify-center items-center">
          <AuthForm className="mt-12" isLoading={isLoading} />
        </div>
      )}
    </main>
  );
}
