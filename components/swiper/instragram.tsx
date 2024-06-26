export default function Instagramsw() {
    return(<>
        {/* Swiper Instagram */}
        {/*Slidershow instagram*/}
        <div data-aos="fade-in">
          <h3 className="title-small text-muted text-center mb-3 mt-5">
            <i className="ri-instagram-line align-bottom" />
            #OLDSKOOL
          </h3>
          <div className="overflow-hidden">
            <div
              className="swiper-container swiper-overflow-visible"
              data-swiper=""
              data-options='{
        "spaceBetween": 20,
        "loop": true,
        "autoplay": {
          "delay": 5000,
          "disableOnInteraction": false
        },
        "breakpoints": {
          "400": {
            "slidesPerView": 2
          },
          "600": {
            "slidesPerView": 3
          },       
          "999": {
            "slidesPerView": 5
          },
          "1024": {
            "slidesPerView": 6
          }
        }
      }'
            >
              <div className="swiper-wrapper mb-5">
                {/* Start of instagram slideshow loop for items*/}
                {/*Slidershow instagram.entries*/}
                <div className="swiper-slide flex-column">
                  <picture>
                    <img
                      className="rounded shadow-sm img-fluid"
                      data-zoomable=""
                      src="{{ img }}"
                      title=""
                      alt=""
                    />
                  </picture>
                </div>
                {/*Each*/}
                {/* / end of items loop*/}
              </div>
            </div>
          </div>
        </div>
        {/* /Swiper Instagram*/}
        {/*/if*/}
      </>
      );
  };