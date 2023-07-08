import { cn } from "@/lib/utils";

interface FooterProps extends React.ComponentProps<"footer"> {}

export function Footer({ className, ...props }: FooterProps) {
  return (
    <footer
      className={cn(
        "flex justify-center items-center border-t-2 py-4",
        className
      )}
      {...props}
    >
      <h3 className="">
        Haslev TT - Scandinavian Open 2024 &copy;{new Date().getFullYear()}
      </h3>
    </footer>
  );
}
