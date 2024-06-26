"use client"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "@/app/css/libs.bundle.css";
import "@/app/css/theme.bundle.css";
// Importing theme.js should be done carefully to avoid server-side rendering issues
// Make sure it's imported conditionally or handled properly.


import Footer from "@/components/ui/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Initialize AOS only on the client-side
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
    import("@/public/OLDS/js/theme.js");
    // Clean up AOS on component unmount (optional)
    return () => {
      AOS.refresh(); // Refresh AOS on unmount
    };
  }, []); // Empty dependency array ensures useEffect runs only once after initial render

  return (
    <>
      <main className="grow">{children}</main>
      <Footer />
    </>
  );
}
