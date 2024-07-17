export default function Cosas() {
  return (
    <section className="text-gray-200">
      {" "}
      <div className="mw-full text-center pb-12 md:pb-16">
      <span
                  className=" text-xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-center text-gray-200 mx-auto text-center relative uppercase  sm:pt-8 lg:pt-12"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <span className="relative text-white">¿Quienes somos?</span>
                </span>
        <p
          className="text-3xl text-gray-200 mb-8 "
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Somos una fábrica de souvenirs que busca distribuidores de
          <span className="ml-2 mr-2 inline-block animate-custom-more text-blue-400 ">
            confianza que deseen pertenecer a nuestra red
          </span>
          posicionada de souvenirs en México.
Los productos son personalizados para cada uno de nuestros clientes por lo que no se encontrará otro diseño en todo el país.
        </p>
      </div>
      {/** */}
      <div className="mw-full text-center pb-12 md:pb-16">
      <span
                  className=" text-xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-center text-gray-200 mx-auto text-center relative uppercase  sm:pt-8 lg:pt-12"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <span className="relative text-white">¿Como Podemos Ayudarte?</span>
                </span>
        <p
          className="text-3xl text-gray-200 mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Queremos ofrecerte nuestro servicio exclusivo B2B de fabricación de souvenirs 
          <span className="inline-block animate-custom-more text-blue-400 lg:ml-3 2xl:ml-3">
            {" "}
            exclusivos por tienda y paradero turísticos.
          </span>{" "}
          Manteniendo tus diseños únicos en todo México y exclusivos para tu negocio.
        </p>
      </div>
    </section>
  );
}
