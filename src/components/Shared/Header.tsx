import { Navigation } from "../Navigation/Navigation";
import { MobileNav } from "../Navigation/MobileNav";
import Link from "next/link";

interface HeaderProps {}

export function Header({}: HeaderProps) {
  return (
    <div className="border-b border-b-grey-600 mb-2 py-4 flex justify-between items-center">
      <div>
        <Link href={"/"}>
          <h3 className="font-bold text-lg">Haslev TT</h3>
        </Link>
      </div>
      <Navigation />
    </div>
  );
}
