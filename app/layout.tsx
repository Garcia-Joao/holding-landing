import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Na Rotina",
  description: "Música autoral em movimento.",
  icons: {
    icon: "/faviconNr.png",
    shortcut: "/faviconNr.png",
    apple: "/faviconNr.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}