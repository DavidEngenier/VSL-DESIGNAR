export default function Heroswiper() { 
    return(
        <>
  {/* Swiper Info */}
  <div
    className="swiper-container overflow-hidden rounded h-100 bg-light"
    data-swiper=""
    data-options='{
  "spaceBetween": 0,
  "slidesPerView": 1,
  "effect": "fade",
  "speed": 1000,
  "loop": true,
  "parallax": true,
  "observer": true,
  "observeParents": true,
  "lazy": {
    "loadPrevNext": true
    },
    "autoplay": {
"delay": 5000,
"disableOnInteraction": false
  },
  "pagination": {
    "el": ".swiper-pagination",
    "clickable": true
    }
  }'
  >
    <div className="swiper-wrapper">
      {/* Slide*/}
      <div className="swiper-slide position-relative h-100 w-100">
        <div className="w-100 h-100 overflow-hidden position-absolute z-index-1 top-0 start-0 end-0 bottom-0">
          <div
            className="w-100 h-100 bg-img-cover bg-pos-center-center overflow-hidden"
            data-swiper-parallax={-100}
            style={{
              willChange: "transform",
              backgroundImage:
                "url(/OLDS//images/banners/banner-1.jpg)"
            }}
          ></div>
        </div>
        <div className="container position-relative z-index-10 d-flex h-100 align-items-start flex-column justify-content-center">
          <p
            className="title-small text-white opacity-75 mb-0"
            data-swiper-parallax={-100}
          >
            Everything You Need
          </p>
          <h2
            className="display-3 tracking-wide fw-bold text-uppercase tracking-wide text-white"
            data-swiper-parallax={100}
          >
            <span className="text-outline-light">Summer</span> Essentials
          </h2>
          <div data-swiper-parallax-y={-25}>
            <a
              href="{{webRoot}}/category.html"
              className="btn btn-psuedo text-white"
              role="button"
            >
              Shop New Arrivals
            </a>
          </div>
        </div>
      </div>
      {/* /Slide*/}
      {/* Slide*/}
      <div className="swiper-slide position-relative h-100 w-100">
        <div className="w-100 h-100 overflow-hidden position-absolute z-index-1 top-0 start-0 end-0 bottom-0">
          <div
            className="w-100 h-100 bg-img-cover bg-pos-center-center overflow-hidden"
            data-swiper-parallax={-100}
            style={{
              willChange: "transform",
              backgroundImage:
                "url(/OLDS//images/banners/banner-2.jpg)"
            }}
          ></div>
        </div>
        <div className="container position-relative z-index-10 d-flex h-100 align-items-start flex-column justify-content-center">
          <p
            className="title-small text-white opacity-75 mb-0"
            data-swiper-parallax={-100}
          >
            Spring Collection
          </p>
          <h2
            className="display-3 tracking-wide fw-bold text-uppercase tracking-wide text-white"
            data-swiper-parallax={100}
          >
            Adidas <span className="text-outline-light">SS21</span>
          </h2>
          <div data-swiper-parallax-y={-25}>
            <a
              href="{{webRoot}}/category.html"
              className="btn btn-psuedo text-white"
              role="button"
            >
              Shop Latest Adidas
            </a>
          </div>
        </div>
      </div>
      {/*/Slide*/}
      {/* Slide*/}
      <div className="swiper-slide position-relative h-100 w-100">
        <div className="w-100 h-100 overflow-hidden position-absolute z-index-1 top-0 start-0 end-0 bottom-0">
          <div
            className="w-100 h-100 bg-img-cover bg-pos-center-center overflow-hidden"
            data-swiper-parallax={-100}
            style={{
              willChange: "transform",
              backgroundImage:
                "url(/OLDS//images/banners/banner-4.jpg)"
            }}
          ></div>
        </div>
        <div className="container position-relative z-index-10 d-flex h-100 align-items-start flex-column justify-content-center">
          <p
            className="title-small text-white opacity-75 mb-0"
            data-swiper-parallax={-100}
          >
            Just Do it
          </p>
          <h2
            className="display-3 tracking-wide fw-bold text-uppercase tracking-wide text-white"
            data-swiper-parallax={100}
          >
            Nike <span className="text-outline-light">SS21</span>
          </h2>
          <div data-swiper-parallax-y={-25}>
            <a
              href="{{webRoot}}/category.html"
              className="btn btn-psuedo text-white"
              role="button"
            >
              Shop Latest Nike
            </a>
          </div>
        </div>
      </div>
      {/* /Slide*/}
      {/*Slide*/}
      <div className="swiper-slide position-relative h-100 w-100">
        <div className="w-100 h-100 overflow-hidden position-absolute z-index-1 top-0 start-0 end-0 bottom-0">
          <div
            className="w-100 h-100 bg-img-cover bg-pos-center-center overflow-hidden"
            data-swiper-parallax={-100}
            style={{
              willChange: "transform",
              backgroundImage:
                "url(/OLDS//images/banners/banner-3.jpg)"
            }}
          ></div>
        </div>
        <div className="container position-relative z-index-10 d-flex h-100 align-items-start flex-column justify-content-center">
          <p
            className="title-small text-white opacity-75 mb-0"
            data-swiper-parallax={-100}
          >
            Look Good Feel Good
          </p>
          <h2
            className="display-3 tracking-wide fw-bold text-uppercase tracking-wide text-white"
            data-swiper-parallax={100}
          >
            <span className="text-outline-light">Sustainable</span> Fashion
          </h2>
          <div data-swiper-parallax-y={-25}>
            <a
              href="{{webRoot}}/category.html"
              className="btn btn-psuedo text-white"
              role="button"
            >
              Why We Are Different
            </a>
          </div>
        </div>
      </div>
      {/*/Slide*/}
    </div>
    <div className="swiper-pagination swiper-pagination-bullet-light" />
  </div>
  {/* / Swiper Info*/}
</>

    );
 };