import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forteye — Security Awareness Training",
  description: "Practical, interactive cybersecurity training. No tech background needed.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
