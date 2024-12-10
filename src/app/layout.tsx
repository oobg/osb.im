import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HomeButton } from "@/features/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "welcome to osb.im",
  description: "playground for osb.im",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body className={inter.className}>
        <HomeButton />
        {children}
      </body>
    </html>
  );
}
