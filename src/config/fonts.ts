import { Geist, Geist_Mono, Poppins } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const titleFont = Poppins({subsets:['latin'], weight:['400', '500','700']})