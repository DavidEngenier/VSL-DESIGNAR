
import Navbarser from "@/components/ui/navbar";
import Footer2 from "@/components/ui/footer2";
import Menus2 from "@/components/ui/Menus2";

import Dropdowncart from "@/components/cart/cart-remove/cartdropdown";

import Heroswiper from "@/components/swiper/swiper-homepage-hero";
import Logos from "@/components/marque/logo";
import Categories from "@/components/swiper/swiper-categories";
import Instagramsw from "@/components/swiper/instragram";




export default function Home() {
  return (
    <>
    <div className="bg-white">
  {/* Navbar */}
   {/* Navbar */}<nav className="navbar navbar-expand-lg navbar-light bg-white flex-column border-0 {{ configClassList }} {{ classList }}">
    <div className="container-fluid">
      <div className="w-100">
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          {/* Logo*/}
          <a
            className="navbar-brand fw-bold fs-3 m-0 p-0 flex-shrink-0 order-0"
            href="{{webRoot}}/index.html"
          >
            {/*logo*/}
          </a>
          {/* / Logo*/}
          {/* Navbar Icons*/}
          <ul className="list-unstyled mb-0 d-flex align-items-center order-1 order-lg-2 nav-sidelinks">
            {/* Mobile Nav Toggler*/}
            <li className="d-lg-none">
              <span
                className="nav-link text-body d-flex align-items-center cursor-pointer"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="ri-menu-line ri-lg me-1" /> Menu
              </span>
            </li>
            {/* /Mobile Nav Toggler*/}
            {/* Navbar Search*/}
            <li className="d-none d-sm-block">
              <span className="nav-link text-body search-trigger cursor-pointer">
                Search
              </span>
              {/* Search navbar overlay*/}
              <div className="navbar-search d-none">
                <div className="input-group mb-3 h-100">
                  <span className="input-group-text px-4 bg-transparent border-0">
                    <i className="ri-search-line ri-lg" />
                  </span>
                  <input
                    type="text"
                    className="form-control text-body bg-transparent border-0"
                    placeholder="Enter your search terms..."
                  />
                  <span className="input-group-text px-4 cursor-pointer disable-child-pointer close-search bg-transparent border-0">
                    <i className="ri-close-circle-line ri-lg" />
                  </span>
                </div>
              </div>
              <div className="search-overlay" />
              {/* / Search navbar overlay*/}
            </li>
            {/* /Navbar Search*/}
            {/* Navbar Login*/}
            <li className="ms-1 d-none d-lg-inline-block">
              <a className="nav-link text-body" href="">
                Account
              </a>
            </li>
            {/* /Navbar Login*/}
            {/* Navbar Cart Icon*/}
            <li className="ms-1 d-inline-block position-relative dropdown-cart">
              <button
                className="nav-link me-0 disable-child-pointer border-0 p-0 bg-transparent text-body"
                type="button"
              >
                Bag (2)
              </button>
              <Dropdowncart/>
            </li>
            {/* /Navbar Cart Icon*/}
          </ul>
          {/* Navbar Icons*/}
          {/* Main Navigation*/}
          <div
            className="flex-shrink-0  navbar-collapse-light w-auto flex-grow-1 order-2 order-lg-1"
            id="navbarNavDropdown"
          >
            {/* Menu*/}
            <Menus2/>
            {/* / Menu*/}
          </div>
          {/* / Main Navigation*/}
        </div>
      </div>
    </div>
  </nav>
  {/* / Navbar*/}
  {/* / Navbar*/}
  {/* Main Section*/}
  <section className="mt-0 overflow-hidden {{ config.classes.content }}">
    {/* Page Content Goes Here */}
    {/* / Top banner */}
    <section
      className="vh-75 vh-lg-60 container-fluid rounded overflow-hidden"
      data-aos="fade-in"
    >
      <Heroswiper/>
    </section>
    {/*/ Top Banner*/}
    {/* Featured Brands*/}
    <div className="brand-section container-fluid" data-aos="fade-in">
      <div className="bg-overlay-sides-white-to-transparent bg-white py-5 py-md-7">
        <Logos/>
      </div>
    </div>
    {/*/ Featured Brands*/}
    <div className="container-fluid">
      {/* Featured Categories*/}
      <div className="m-0">
          {/**  {{#if (config homepage-categories) }}
                    {{>
                        swiper/swiper-homepage-categories
                        entries=homepage-categories.entries
                    }}
          {{/if}} */}
        <Categories/>
        {/* SVG Used for Clipath on featured images above*/}
        {/* svg */}
      </div>
      {/* /Featured Categories*/}
      {/* Homepage Intro*/}
      <div className="position-relative row my-lg-7 pt-5 pt-lg-0 g-8">
        <div className="bg-text bottom-0 start-0 end-0" data-aos="fade-up">
          <h2 className="bg-text-title opacity-10">
            <span className="text-outline-dark">Old</span>Skool
          </h2>
        </div>
        <div
          className="col-12 col-md-6 position-relative z-index-20 mb-7 mb-lg-0"
          data-aos="fade-right"
        >
          <p className="text-muted title-small">Welcome</p>
          <h3 className="display-3 fw-bold mb-5">
            <span className="text-outline-dark">OldSkool</span> - streetwear
            &amp; footwear specialists
          </h3>
          <p className="lead">
            We are OldSkool, a leading supplier of global streetwear brands,
            including names such as{" "}
            <a href="{{webRoot}}/category.html">Stussy</a>,{" "}
            <a href="{{webRoot}}/category.html">Carhartt</a>,{" "}
            <a href="{{webRoot}}/category.html">Gramicci</a>,{" "}
            <a href="{{webRoot}}/category.html">Afends</a> and many more.
          </p>
          <p className="lead">
            With worldwide shipping and unbeatable prices - now's a great time
            to pick out something from our range.
          </p>
          <a
            href="{{webRoot}}/category.html"
            className="btn btn-psuedo"
            role="button"
          >
            Shop New Arrivals
          </a>
        </div>
        <div
          className="col-12 col-md-6 position-relative z-index-20 pe-0"
          data-aos="fade-left"
        >
          <picture className="w-50 d-block position-relative z-index-10 border border-white border-4 shadow-lg">
            <img
              className="img-fluid"
              src="/OLDS/images/banners/banner-5.jpg"
              alt=""
            />
          </picture>
          <picture className="w-60 d-block me-8 mt-n10 shadow-lg border border-white border-4 position-relative z-index-20 ms-auto">
            <img
              className="img-fluid"
              src="/OLDS/images/banners/banner-6.jpg"
              alt=""
            />
          </picture>
          <picture className="w-50 d-block me-8 mt-n7 shadow-lg border border-white border-4 position-absolute top-0 end-0 z-index-0 ">
            <img
              className="img-fluid"
              src="/OLDS/images/banners/banner-7.jpg"
              alt=""
            />
          </picture>
        </div>
      </div>
      {/* / Homepage Intro*/}
      {/* Homepage Banners*/}
      <div className="pt-7 mb-5 mb-lg-10">
        <div className="row g-4">
          <div
            className="col-12 col-xl-6 position-relative"
            data-aos="fade-right"
          >
            <picture className="position-relative z-index-10">
              <img
                className="w-100 rounded"
                src="/OLDS/images/banners/banner-sale.jpg"
                alt=""
              />
            </picture>
            <div className="position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center z-index-20">
              <div className="py-6 px-5 px-lg-10 text-center w-100">
                <h2 className="display-1 mb-3 fw-bold text-white">
                  <span className="text-outline-light">Flash</span> Sale
                </h2>
                <p className="fs-5 fw-light text-white d-none d-md-block">
                  Our yearly flash sale is now on! Grab yourself a bargain from
                  the world's leading streetwear brands.
                </p>
                <a
                  href="{{webRoot}}/category.html"
                  className="btn btn-psuedo text-white"
                  role="button"
                >
                  Shop All Sale Items
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6" data-aos="fade-left">
            <div className="row g-4 justify-content-end">
              <div className="col-12 col-md-6 d-flex">
                <div className="card position-relative overflow-hidden">
                  <picture className="position-relative z-index-10 d-block bg-light">
                    <img
                      className="w-100 rounded"
                      src="/OLDS/images/banners/banner-8.jpg"
                      alt=""
                    />
                  </picture>
                  <div className="card-overlay">
                    <p className="lead fw-bolder mb-2">The Jordan Delta 2</p>
                    <a
                      href="{{webRoot}}/category.html"
                      className="btn btn-psuedo text-white py-2"
                      role="button"
                    >
                      Shop Kicks
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 d-flex">
                <div className="card position-relative overflow-hidden">
                  <picture className="position-relative z-index-10 d-block bg-light">
                    <img
                      className="w-100 rounded"
                      src="/OLDS/images/banners/banner-9.jpg"
                      alt=""
                    />
                  </picture>
                  <div className="card-overlay">
                    <p className="lead fw-bolder mb-2">Latest Mens Shirts</p>
                    <a
                      href="{{webRoot}}/category.html"
                      className="btn btn-psuedo text-white py-2"
                      role="button"
                    >
                      Shop New
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 d-flex">
                <div className="card position-relative overflow-hidden">
                  <picture className="position-relative z-index-10 d-block bg-light">
                    <img
                      className="w-100 rounded"
                      src="/OLDS/images/banners/banner-10.jpg"
                      alt=""
                    />
                  </picture>
                  <div className="card-overlay">
                    <p className="lead fw-bolder mb-2">KiiKii Osake Tees</p>
                    <a
                      href="{{webRoot}}/category.html"
                      className="btn btn-psuedo text-white py-2"
                      role="button"
                    >
                      Shop T-Shirts
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 d-flex">
                <div className="card position-relative overflow-hidden">
                  <picture className="position-relative z-index-10 d-block bg-light">
                    <img
                      className="w-100 rounded"
                      src="/OLDS/images/banners/banner-11.jpg"
                      alt=""
                    />
                  </picture>
                  <div className="card-overlay">
                    <p className="lead fw-bolder mb-2">
                      Multibuy Womens Shirts
                    </p>
                    <a
                      href="{{webRoot}}/category.html"
                      className="btn btn-psuedo text-white py-2"
                      role="button"
                    >
                      Shop Sale Items
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* / Homepage Banners*/}
      {/* Instagram*/}
      <Instagramsw/>
      {/* / Instagram*/}
    </div>
    {/* /Page Content */}
  </section>
  {/* / Main Section*/}
  <Footer2/>
  {/* / Footer*/}\
  {/* ##### Welcome Area Start ##### */}
  </div>
</>
  );
}
