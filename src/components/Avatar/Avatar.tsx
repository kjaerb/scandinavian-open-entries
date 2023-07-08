"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { authentication } from "@/lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Loading } from "@/components/ui/Loading";

interface InitialsAvatarProps {}

export function InitialsAvatar({}: InitialsAvatarProps) {
  const [user, loading] = useAuthState(authentication);

  return (
    <Avatar>
      {loading ? (
        <Loading />
      ) : user?.photoURL ? (
        <AvatarImage src={user?.photoURL} />
      ) : (
        <InitialsAvatar />
      )}
      <AvatarFallback>{user?.displayName?.charAt(0)}</AvatarFallback>
    </Avatar>
  );
}
