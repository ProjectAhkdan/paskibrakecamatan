import type { Metadata } from "next";
import "./globals.css";

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
      <body className=" costum-body ">
        <Floatingnav />
        {children}</body>
    </html>
  );
}
