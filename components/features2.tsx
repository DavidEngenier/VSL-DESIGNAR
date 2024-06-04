export default function Features2() {
    return (
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-12">
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 ">
              <h2 className="text-6xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-center text-gray-200 mx-auto text-center relative uppercase  sm:pt-8 lg:pt-12">
                nuestro servicio
                <span
                  className="before:block before:absolute before:-inset-1.5 before:-skew-x-3 before:bg-red-500 relative inline-block uppercase ml-4 mr-4"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <span className="relative text-black">no</span>
                </span>
                es para ti si
              </h2>
            </div>
  
            {/* Items */}
            <div
              className="max-w-sm mx-auto md:max-w-2xl text-gray-200 flex flex-col md:flex-row md:flex-wrap"
              data-aos-id-blocks
            >
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
    <path fill-rule="evenodd" d="m6.72 5.66 11.62 11.62A8.25 8.25 0 0 0 6.72 5.66Zm10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62ZM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788Z" clip-rule="evenodd" />
  </svg>
  */}
              <div
                className="relative flex items-center mb-8"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-blocks]"
              >
                <svg
                  className="w-16 h-16 mr-4 animate-spin"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    className="fill-current text-red-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
  
                  <g
                    strokeLinecap="square"
                    strokeWidth="2"
                    fill="none"
                    transform="translate(20, 20)"
                  >
                    <path
                      className="stroke-current text-purple-100"
                      d="m6.72 5.66 11.62 11.62A8.25 8.25 0 0 0 6.72 5.66Zm10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62ZM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788Z"
                      strokeLinecap="square"
                      strokeWidth="2"
                      fill="none"
                      fillRule="evenodd"
                    />
                  </g>
                </svg>
  
                <p className="text-2xl  text-center">
                  EstÃ¡s cÃ³modo con lo que vendes (menos de $1000 dÃ³lares
                  mensuales)
                </p>
              </div>
  
              {/* 2nd item */}
              <div
                className="relative flex items-center mb-8"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-blocks]"
              >
                <svg
                  className="w-16 h-16 mr-4 animate-spin"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    className="fill-current text-red-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
  
                  <g
                    strokeLinecap="square"
                    strokeWidth="2"
                    fill="none"
                    transform="translate(20, 20)"
                  >
                    <path
                      className="stroke-current text-purple-100"
                      d="m6.72 5.66 11.62 11.62A8.25 8.25 0 0 0 6.72 5.66Zm10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62ZM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788Z"
                      strokeLinecap="square"
                      strokeWidth="2"
                      fill="none"
                      fillRule="evenodd"
                    />
                  </g>
                </svg>
  
                <p className="text-2xl  text-center">
                  EstÃ¡s cÃ³modo con lo que vendes (menos de $1000 dÃ³lares
                  mensuales)
                </p>
              </div>
  
              {/* 4th item */}
              <div
                className="relative flex items-center mb-8"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-blocks]"
              >
                <svg
                  className="w-16 h-16 mr-4 animate-spin"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    className="fill-current text-red-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
  
                  <g
                    strokeLinecap="square"
                    strokeWidth="2"
                    fill="none"
                    transform="translate(20, 20)"
                  >
                    <path
                      className="stroke-current text-purple-100"
                      d="m6.72 5.66 11.62 11.62A8.25 8.25 0 0 0 6.72 5.66Zm10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62ZM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788Z"
                      strokeLinecap="square"
                      strokeWidth="2"
                      fill="none"
                      fillRule="evenodd"
                    />
                  </g>
                </svg>
  
                <p className="text-2xl  text-center">
                  EstÃ¡s cÃ³modo con lo que vendes (menos de $1000 dÃ³lares
                  mensuales)
                </p>
              </div>
  
              {/* 3rd item */}
              <div
                className="relative flex items-center mb-8"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-blocks]"
              >
                <svg
                  className="w-16 h-16 mr-4 animate-spin"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    className="fill-current text-red-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
  
                  <g
                    strokeLinecap="square"
                    strokeWidth="2"
                    fill="none"
                    transform="translate(20, 20)"
                  >
                    <path
                      className="stroke-current text-purple-100"
                      d="m6.72 5.66 11.62 11.62A8.25 8.25 0 0 0 6.72 5.66Zm10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62ZM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788Z"
                      strokeLinecap="square"
                      strokeWidth="2"
                      fill="none"
                      fillRule="evenodd"
                    />
                  </g>
                </svg>
  
                <p className="text-2xl  text-center">
                  EstÃ¡s cÃ³modo con lo que vendes (menos de $1000 dÃ³lares
                  mensuales)
                </p>
              </div>
  
              {/* 5th item */}
            </div>
          </div>
        </div>
      </section>
    );
  }
  