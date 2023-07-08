import { authentication } from "@/lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";

interface InitialsAvatarProps {}

export function InitialsAvatar({}: InitialsAvatarProps) {
  const [user, loading] = useAuthState(authentication);

  return (
    <Avatar>
      {user?.displayName ? <AvatarImage src={user.displayName} /> : null}
    </Avatar>
  );
}
