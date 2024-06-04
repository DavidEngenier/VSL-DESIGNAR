export default function Cosas() {
  return (
    <section className="text-gray-200">
      {" "}
      <div className="mw-full text-center pb-12 md:pb-16">
        <h1 className="h1 mb-4" data-aos="fade-up">
          Â¿Quienes somos?
        </h1>
        <p
          className="text-3xl text-gray-200 mb-8 "
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Somos una fÃ¡brica de souvenirs que busca distribuidores de
          <span className="ml-2 mr-2 inline-block animate-custom-more text-blue-400 ">
            confianza que deseen pertenecer a nuestra red
          </span>
          posicionada de souvenirs en MÃ©xico
        </p>
      </div>
      {/** */}
      <div className="mw-full text-center pb-12 md:pb-16">
        <h1 className="h1 mb-4" data-aos="fade-up">
          Â¿Como vamos a ayudarte?
        </h1>
        <p
          className="text-3xl text-gray-200 mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Queremos ofrecerte nuestro servicio exclusivo B2B de fabricaciÃ³n de
          souvenirs{" "}
          <span className="inline-block animate-custom-more text-blue-400">
            {" "}
            exclusivos por tienda y paradero turÃ­stico
          </span>{" "}
          en el cual encontrarÃ¡s
        </p>
      </div>
    </section>
  );
}
