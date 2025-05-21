import { geistMono, geistSans } from "@/config/fonts";
import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: {
    template: "%s | Orejitas",
    default: "Orejitas",
  },
  description: "Orejitas, ayudemos a encontrar un hogar a los peluditos. Tu nuevo amigo te espera ahi afuera.",
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
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
