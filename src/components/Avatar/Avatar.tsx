"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { authentication } from "@/lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Loading } from "@/components/ui/Loading";
import { InitialsAvatar } from "./InitialsAvatar";

interface InitialsAvatarProps {}

export function AvatarImg({}: InitialsAvatarProps) {
  const [user, loading] = useAuthState(authentication);

  if (!user) return null;

  return (
    <Avatar>
      <div className="flex justify-center items-center">
        {loading ? (
          <Loading className="w-full h-full p-0.5" />
        ) : user?.photoURL ? (
          <AvatarImage src={user?.photoURL} />
        ) : (
          <InitialsAvatar />
        )}
      </div>
      <AvatarFallback>{user?.displayName?.charAt(0)}</AvatarFallback>
    </Avatar>
  );
}
