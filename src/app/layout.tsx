import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Orejitas",
    default: "Orejitas",
  },
  description: "Orejitas, ayudemos a encontrar un hogar a los peluditos",
  icons: {
    icon: "/favicon.png", // Ruta del favicon
    shortcut: "/favicon.png", // Para navegadores que usan el tipo "shortcut icon"
    apple: "/favicon.png", // Icono para dispositivos Apple si es necesario
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
