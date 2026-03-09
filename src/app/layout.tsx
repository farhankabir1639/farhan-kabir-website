import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Farhan Kabir | Founder · AI Product Builder",
  description:
    "Building AI-powered products from 0 to 1. Founder, AI Product Builder, Head of Product.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
