import { authentication } from "@/lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { SignOut } from "../Auth/SignOut";
import { router } from "./links";
import Link from "next/link";

import { MobileNav } from "./MobileNav";
import { AvatarDropDown } from "./AvatarDropDown";

interface NavigationProps {}

export function Navigation({}: NavigationProps) {
  return (
    <>
      <AvatarDropDown />
      {/* <div className="hidden md:flex">
        <ul className="flex items-center">
          {router.map((route) => (
            <li
              className="mx-2 transition-all duration-200 border-b hover:border-b-black border-b-transparent"
              key={route.name}
            >
              <Link href={route.path}>{route.name}</Link>
            </li>
          ))}
          <li>
            <SignOut className="ml-2" />
          </li>
        </ul>
      </div> */}
      <MobileNav />
    </>
  );
}
