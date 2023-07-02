import { Toaster } from "@/components/ui/Toaster";
import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/components/Shared/Header";

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
      <body className={inter.className}>
        <>
          <main className="max-w-6xl w-full px-2 sm:px-4 h-screen min-h-screen mx-auto">
            <>
              <Header />
              {children}
            </>
          </main>

          <Toaster />
        </>
      </body>
    </html>
  );
}
