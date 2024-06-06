
import Calendario from "@/components/calendario";
import Features from "@/components/features3";
import Features2 from "@/components/features4";


const Home = () => {
  return (
    <>

<blockquote className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-center text-gray-200 mx-auto text-center relative uppercase  sm:pt-8 lg:pt-12">
            Agenda ya.  SOLO POR
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-800 relative inline-block uppercase mr-5 mt-5 ml-8  sm:r-5 mt-5 lg: mt-5 ml-5">
              <span className="relative text-white">hoy </span>
            </span>
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-400 relative inline-block uppercase mr-5 mt-5 ml-8  sm:r-5 mt-5 lg: mt-5 ml-5">
              <span className="relative text-white"> Envio gratis </span>
            </span>
           
          </blockquote>



      <Features/>
     
      <Calendario/>
     
    </>
  );
};

export default Home;
