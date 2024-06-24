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
      <Script src="/js/jquery/jquery-2.2.4.min.js"></Script>
        <Script src="/js/popper.min.js"></Script>

<Script src="/js/bootstrap.min.js"></Script>

<Script src="/js/plugins.js"></Script>

<Script src="/js/classy-nav.min.js"></Script>

<Script src="/js/active.js"></Script>

<Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAwuyLRa1uKNtbgx6xAJVmWy-zADgegA2s"></Script>
    </html>
  );
}

