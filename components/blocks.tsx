"use client";
import useMouseMove from "@/app/hooks/useMouseMove";

export default function Blocks() {
  const cardRef = useMouseMove(50, 50);
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {/* 3rd item */}
            <div className="cursor-pointer transition-all duration-500 hover:translate-y-2 w-72 h-40 bg-MYS-200 rounded-lg shadow-xl flex flex-row items-center text-center justify-evenly gap-4 px-4">
              <div>
                <p className="line-clamp-3 text-gray-900 text-2xl">
                  Souvenirs con NFC.
                </p>
              </div>
            </div>

            {/* 5th item */}
            <div className="cursor-pointer transition-all duration-500 hover:translate-y-2 w-72 h-40 bg-MYS-200 rounded-lg shadow-xl flex flex-row items-center text-center justify-evenly gap-4 px-4">
              <div>
                <p className="line-clamp-3 text-gray-900 text-2xl">
                  Souvenirs con realidad aumentada
                </p>
              </div>
            </div>

            <div ref={cardRef} className="w-80 h-52 perspective-1000">
              <div className="relative w-full h-full bg-MYS-200 rounded-lg shadow-lg transform transition-transform duration-500 preserve-3d">
                <div className="absolute w-full h-full backface-hidden">
                  <div className="p-5">
                    <h2 className="text-xl text-center">3D Card</h2>
                    <p className="text-center">
                      Este es un ejemplo de una tarjeta 3D en Next.js con
                      Tailwind CSS.
                    </p>
                  </div>
                </div>
                <div className="absolute w-full h-full backface-hidden bg-MYS-200 transform rotate-y-180">
                  <div className="p-5">
                    <h2 className="text-xl font-bold text-center">
                      Parte Trasera
                    </h2>
                    <p className="text-center">
                      Esta es la parte trasera de la tarjeta 3D.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
