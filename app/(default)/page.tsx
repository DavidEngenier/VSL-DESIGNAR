import Hero from "@/components/hero";
import Features from "@/components/features";
import Newsletter from "@/components/newsletter";
import Features2 from "@/components/features2";

import Extras from "@/components/Extras";
import Cosas from "@/components/Cosas";
import SvgComponent from "@/components/svg";

import FacebookCommentsPage from "@/components/comentarios";


const Home = () => {
  return (
    <>
      <SvgComponent />
      <Hero />
      <Newsletter />
      <div className="flex flex-col sm:flex-row justify-center">
  <div className="">
    {/* Contenido de la primera columna */}
    <Features />
  </div>
  <div className="">
    {/* Contenido de la segunda columna */}
    <Features2 />
  </div>
</div>

      <Cosas />
      <Extras />
      <Newsletter />
      <span className="before:block animate-pulse before:absolute before:-inset-5  flex justify-center relative inline-block uppercase text-7xl mt-5">
        <span className="relative text-white">
          Resultados de nuestros clientes
        </span>
      </span>

      <FacebookCommentsPage/>

     
     
    </>
  );
};

export default Home;
