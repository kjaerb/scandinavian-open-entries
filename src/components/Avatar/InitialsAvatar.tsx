import { authentication } from "@/lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Avatar, AvatarImage } from "@/components/ui/Avatar";

interface InitialsAvatarProps {}

export function InitialsAvatar({}: InitialsAvatarProps) {
  const [user] = useAuthState(authentication);

  return (
    <Avatar>
      {user?.displayName ? <AvatarImage src={user.displayName} /> : null}
    </Avatar>
  );
}
