import Link from "next/link";

const Newsletter: React.FC = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Caja de llamada a la acciÃ³n (CTA) */}
        <div>
          {/* IlustraciÃ³n de fondo */}
          <div className="relative flex flex-col lg:flex-row justify-between items-center">
            <div className="flex flex-col sm:flex-row justify-center w-full">
              <div className="w-full">
                <span className="box-decoration-slice bg-green-500 mb-2 text-center uppercase block rounded-full text-2xl">
                  (No Hacer click si no has visto el video)
                </span>
                <Link
                  href="/NuevaPa"
                  className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50 overflow-hidden h-14 w-full rounded-md bg-sky-500 p-2 flex justify-center items-center font-extrabold"
                >
                  <div className="absolute z-10 w-80 h-48 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-200 delay-150 group-hover:delay-75"></div>
                  <div className="absolute z-10 w-60 h-40 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-300 delay-150 group-hover:delay-100"></div>
                  <div className="absolute z-10 w-50 h-32 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-400 delay-150 group-hover:delay-150"></div>
                  <div className="absolute z-10 w-40 h-24 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-200"></div>
                  <div className="absolute z-10 w-30 h-16 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-300"></div>
                  <p className="z-10 text-2xl">Â¡Â¡Agenda Ahora!!</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
