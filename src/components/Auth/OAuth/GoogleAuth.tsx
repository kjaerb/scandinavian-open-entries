import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/Button";
import { authentication } from "@/lib/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export function GoogleAuth() {
  async function signInWithGoogle() {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(authentication, googleProvider);
  }

  return (
    <Button className="w-full h-12 py-3 shadow-md" onClick={signInWithGoogle}>
      <Icons.Google className="h-full" />
      <p className="ml-2">Continue with Google</p>
    </Button>
  );
}
