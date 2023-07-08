import { Toaster } from "@/components/ui/Toaster";
import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/components/Shared/Header";
import { Footer } from "@/components/Shared/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Scandinavian Open Entries",
  description:
    "A form to add entries to the 2024 Scandinavian Open Competition",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </head>
      <body className={cn(inter.className, "min-h-screen flex flex-col")}>
        <Header className="flex-initial" />
        <main className="max-w-6xl w-full px-2 sm:px-4 mx-auto flex-auto">
          {children}
        </main>
        <Footer className="flex-initial" />
        <Toaster />
      </body>
    </html>
  );
}
