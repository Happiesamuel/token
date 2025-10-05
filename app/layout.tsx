import type { Metadata } from "next";
import { Sora } from "next/font/google";

import ClientShell from "./ClientShell";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  fallback: ["system-ui", "arial"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "CAPITA",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sora.className} antialiased min-h-screen`}>

        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
