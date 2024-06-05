import React from "react";
import TestimonialImage01 from "@/public/images/testimonial-01.jpg";
import Image from "next/image";

export default function PageIllustration() {
  return (
    <Image
      className="transform translate-x-[-6px]  translate-y-[-50px] 
      "
      src={TestimonialImage01}
      width={80}
      height={50}
      alt="Testimonial 01"
    />
  );
}
