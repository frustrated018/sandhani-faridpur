import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { cabinateGrotesk, satoshi } from "@/Fonts/Fonts";

export const metadata: Metadata = {
  title: "Sandhani | Faridpur Branch",
  description:
    "Faridpur branch of the largest sudent led Blood bank in bangladesh, Sandhani",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${satoshi.variable} ${cabinateGrotesk.variable}`}>
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
