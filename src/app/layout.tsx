import type { Metadata } from "next";
import "./globals.css";
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Nebriq Labs",
  description: "A collective of builders crafting digital experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceMono.className} antialiased bg-black text-white min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
