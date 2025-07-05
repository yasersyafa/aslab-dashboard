import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/partials/navbar";

const archivo = Archivo({
  variable: '--font-archivo',
  display: "swap",
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "GameTech Lab",
  description: 'Welcome to Assistant Laboratorium Website'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivo.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
