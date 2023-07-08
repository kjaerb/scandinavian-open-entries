import { cn } from "@/lib/utils";
import { Navigation } from "../Navigation/Navigation";
import Link from "next/link";

interface HeaderProps extends React.ComponentProps<"header"> {}

export function Header({ className, ...props }: HeaderProps) {
  return (
    <header
      className={cn(
        "border-b border-b-grey-600 mb-2 w-full py-4 mx-auto",
        className
      )}
      {...props}
    >
      <div className="flex justify-between max-w-6xl items-center w-full mx-auto px-2 sm:px-4">
        <div>
          <Link href={"/"}>
            <h3 className="font-bold text-lg">Haslev TT</h3>
          </Link>
        </div>
        <Navigation />
      </div>
    </header>
  );
}
