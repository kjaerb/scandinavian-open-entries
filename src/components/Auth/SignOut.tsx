import { signOut } from "firebase/auth";
import { Button } from "../ui/Button";
import { authentication } from "@/lib/firebase";

interface SignOutProps {}

export function SignOut({}: SignOutProps) {
  return (
    <Button onClick={async () => await signOut(authentication)}>
      Sign out
    </Button>
  );
}
