import Hero from "@/components/hero";
import Features from "@/components/features";
import Newsletter from "@/components/newsletter";
import Features2 from "@/components/features2";
import PageIllustration from "@/components/page-illustration";
import Extras from "@/components/Extras";
import Cosas from "@/components/Cosas";
import SvgComponent from "@/components/svg";
import Calendario from "@/components/calendario";

const Home = () => {
  return (
    <>
      <SvgComponent />
      <Hero />
      <Newsletter />
      <div className="flex flex-coljustify-center">
        <Features />
        <Features2 />
      </div>

      <Cosas />
      <Extras />
      <Newsletter />
      <span className="before:block animate-custom-pulse before:absolute before:-inset-5  flex justify-center relative inline-block uppercase text-6xl mt-5">
        <span className="relative text-green-400">
          Solo por hoy envios gratis
        </span>
      </span>

      <Calendario />
    </>
  );
};

export default Home;
