import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
//navbar
import Floatingnav from "./components/floatingnav";

export const metadata: Metadata = {
  title: "Paskibra Kecamatan Sepatan",
  description: "Tahun 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="scrollbar scrollbar-thumb-white ">
        <SpeedInsights />
        <Floatingnav />
        {children}
      </body>
    </html>
  );
}
