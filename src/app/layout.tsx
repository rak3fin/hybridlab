import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const pilat = localFont({
  src: [
    {
      path: "../assets/PilatExtended-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/PilatExtended-DemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-pilat",
});

export const metadata: Metadata = {
  title: "Hybrid Lab",
  description: "Designed and Developed by Appifinity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${open_sans.variable} ${pilat.variable} antialiased font-open-sans bg-[#181818] scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
