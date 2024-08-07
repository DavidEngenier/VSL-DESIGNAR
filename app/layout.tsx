import "./css/style.css";


import { Inter, Architects_Daughter } from "next/font/google";

import Header from "@/components/ui/header";
import Script from "next/script";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const architects_daughter = Architects_Daughter({
  subsets: ["latin"],
  variable: "--font-architects-daughter",
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: "Designar",
  description: "Bienvenidos a designar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gradient-to-b from-MYS-400  from 90% to-black`}
      >
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
        </div>

      </body>
  </html>
  );
}

