import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/Sheet";
import { router } from "./links";
import Link from "next/link";
import { Separator } from "../ui/Separator";
import { SignOut } from "../Auth/SignOut";
import { MenuIcon } from "lucide-react";

interface MobileNavProps {}

export function MobileNav({}: MobileNavProps) {
  return (
    <div className="visible md:hidden">
      <Sheet>
        <SheetTrigger>
          <div className="p-2  border shadow-md rounded-md">
            <MenuIcon />
          </div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <div>
              <ul>
                {router.map((route) => (
                  <li key={route.name} className=" my-4 font-bold text-black">
                    <Link href={route.path}>{route.name}</Link>
                    <Separator />
                  </li>
                ))}
                <li className="my-4">
                  <SignOut className="w-full" />
                </li>
              </ul>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
