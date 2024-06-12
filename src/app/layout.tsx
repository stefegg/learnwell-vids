import type { Metadata } from "next";
import { openSans } from "./fonts";
import "./globals.css";
import { Header } from "./_components";

export const metadata: Metadata = {
  title: "Learnwell Video Suite",
  description: "Take your learning to the next level with our videos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <div className="h-24">
          <Header />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </body>
    </html>
  );
}
