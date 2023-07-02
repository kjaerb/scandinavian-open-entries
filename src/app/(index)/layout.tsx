"use client";

import AddUserInfo from "@/components/Forms/AddUserInfo/AddUserInfo";
import { authentication, db } from "@/lib/firebase";
import { userInfoSchema } from "@/validators/userInfoSchema";
import { doc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocument } from "react-firebase-hooks/firestore";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [auth, authIsLoading] = useAuthState(authentication);
  const userDocRef = doc(db, `users/${auth?.uid}`);
  const [userDoc, userDocIsLoading] = useDocument(userDocRef);
  const data = userDoc?.data();

  return (
    <div>
      {children}
      <AddUserInfo userDoc={userDoc} userDocData={data} />
    </div>
  );
}
