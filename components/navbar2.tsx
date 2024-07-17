
import Menus2 from "@/components/ui/navbar/Menus2";
import Dropdowncart from "@/components/cart/cart-remove/cartdropdown";
import React from "react";
import data from "@/public/data/category-products.json";
import Cart from '@/components/ui/navbar/dropdowncart';

const Navbar2 : React.FC = () => {
  return (
    <>
  {/* Navbar */}
  
  <nav className=" navbar-expand-lg navbar-light bg-white flex-column ">
  
    <div className="container-fluid">
    
      <div className="w-100">
        <div className="d-flex justify-content-between align-items-center flex-wrap">
         {/* Logo*/}
          <a
            className="navbar-brand fw-bold fs-3 m-0 p-0 flex-shrink-0 order-0"
            href=""
          >  
            {/* {{> logo/logo-icon }}*/}
          </a>
          {/* / Logo*/}
          {/* Navbar Icons*/}
          <ul className="list-unstyled mb-0 d-flex align-items-center order-1 order-lg-2 nav-sidelinks">
           
            {/* Mobile Nav Toggler*/}
            <li className="d-lg-none">
              
              <span
                className="nav-link text-body d-flex align-items-center cursor-pointer"
                
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
              <a className="nav-link text-body" href="{{webRoot}}/login.html">
                Account
              </a>
            </li>
            {/* /Navbar Login*/}
            {/* Navbar Cart Icon*/}
            <li className="
           dropdown-cart ms-1 d-inline-block position-relative ">
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
            className="flex-shrink-0 navbar-collapse  w-auto flex-grow-1 order-2 order-lg-1"
            
          >
            {/* Menu*/}
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
  <li className="nav-item dropdown dropdown position-static">
    <a
     className="nav-link dropdown-toggle"
     href="#"
     role="button"
     data-bs-toggle="dropdown"
     aria-expanded="false"
    >
      Men
    </a>
    {/* Menswear dropdown menu*/}
    <div className="dropdown-menu dropdown-megamenu">
      <div className="container-fluid">
        <div className="row g-0 g-lg-3">
          {/* Menswear Dropdown Menu Links Section*/}
          <div className="col col-lg-8 py-lg-5"> <div className="row py-3 py-lg-0 flex-wrap gx-4 gy-6">
    {/* menu row*/}
    <div className="col">
      <h6 className="dropdown-heading">Coats &amp; Jackets</h6>
      <ul className="list-unstyled">
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Waterproof Jackets
          </a>
        </li>
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Insulated Jackets
          </a>
        </li>
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Down Jackets
          </a>
        </li>
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Softshell Jackets
          </a>
        </li>
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Casual Jackets
          </a>
        </li>
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Windproof Jackets
          </a>
        </li>
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Breathable Jackets
          </a>
        </li>
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Cleaning &amp; Proofing
          </a>
        </li>
        <li className="dropdown-list-item">
          <a
            className="dropdown-item dropdown-link-all"
            href="{{webRoot}}/category.html"
          >
            View All
          </a>
        </li>
      </ul>
    </div>
    {/* / menu row*/}
    {/* menu row*/}
    <div className="col">
      <h6 className="dropdown-heading">Insulated</h6>
      <ul className="list-unstyled">
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Insulated Jackets
          </a>
        </li>
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Bodywarmers
          </a>
        </li>
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Parkas
          </a>
        </li>
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Baselayers &amp; Thermals
          </a>
        </li>
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Winter Hats
          </a>
        </li>
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Scarves &amp; Neck
          </a>
        </li>
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Gloves &amp; Mitts
          </a>
        </li>
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Accessories
          </a>
        </li>
        <li className="dropdown-list-item">
          <a
            className="dropdown-item dropdown-link-all"
            href="{{webRoot}}/category.html"
          >
            View All
          </a>
        </li>
      </ul>
    </div>
    {/* / menu row*/}
    {/* menu row*/}
    <div className="d-none d-xxl-block col">
      <h6 className="dropdown-heading">Footwear</h6>
      <ul className="list-unstyled">
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Lifestyle &amp; Casual
          </a>
        </li>
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Walking Shoes
          </a>
        </li>
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Running Shoes
          </a>
        </li>
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Military Boots
          </a>
        </li>
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Fabric Walking Boots
          </a>
        </li>
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Leather Walking Boots
          </a>
        </li>
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Wellies
          </a>
        </li>
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Winter Footwear
          </a>
        </li>
        <li className="dropdown-list-item">
          <a
            className="dropdown-item dropdown-link-all"
            href="{{webRoot}}/category.html"
          >
            View All
          </a>
        </li>
      </ul>
    </div>
    {/* / menu row*/}
    {/* menu row*/}
    <div className="col">
      <h6 className="dropdown-heading text-danger">Special Offers</h6>
      <ul className="list-unstyled">
        <li className="dropdown-list-item">
          <a
            className="dropdown-item text-danger"
            href="{{webRoot}}/category.html"
          >
            Insulated Jackets
          </a>
        </li>
        <li className="dropdown-list-item">
          <a
            className="dropdown-item text-danger"
            href="{{webRoot}}/category.html"
          >
            Bodywarmers
          </a>
        </li>
        <li className="dropdown-list-item">
          <a
            className="dropdown-item text-danger"
            href="{{webRoot}}/category.html"
          >
            Parkas
          </a>
        </li>
        <li className="dropdown-list-item">
          <a
            className="dropdown-item text-danger"
            href="{{webRoot}}/category.html"
          >
            Baselayers &amp; Thermals
          </a>
        </li>
        <li className="dropdown-list-item">
          <a
            className="dropdown-item text-danger"
            href="{{webRoot}}/category.html"
          >
            Winter Hats
          </a>
        </li>
        <li className="dropdown-list-item">
          <a
            className="dropdown-item text-danger"
            href="{{webRoot}}/category.html"
          >
            Scarves &amp; Neck
          </a>
        </li>
        <li className="dropdown-list-item">
          <a
            className="dropdown-item text-danger"
            href="{{webRoot}}/category.html"
          >
            Gloves &amp; Mitts
          </a>
        </li>
        <li className="dropdown-list-item">
          <a
            className="dropdown-item text-danger"
            href="{{webRoot}}/category.html"
          >
            Accessories
          </a>
        </li>
        <li className="dropdown-list-item">
          <a
            className="dropdown-item text-danger dropdown-link-all"
            href="{{webRoot}}/category.html"
          >
            View All
          </a>
        </li>
      </ul>
    </div>
    {/* / menu row*/}
  </div>
  <div className="align-items-center justify-content-between mt-5 d-none d-lg-flex">
    
    <div className="me-5 f-w-20">
    {data.entries.map((brand, index) =>(
      <a key={index} className="d-block" href="{{webRoot}}/category.html">
        <picture>
          <img
            className="img-fluid d-table mx-auto"
            src={brand.img}
            alt={`Logo ${index + 1}`}
          />
        </picture>
      </a>  ))}
    </div>
    
  </div>  </div>
          {/* /Menswear Dropdown Menu Links Section*/}
          {/* Menswear Dropdown Menu Images Section*/}
          <div className="col-lg-4 d-none d-lg-block">
            <div className="vw-50 border-start h-100 position-absolute" />
            <div className="py-lg-5 position-relative z-index-10 px-lg-4">
              <div className="row g-4">
                <div className="col-12 col-md-6"><Cart 
                img={`/OLDS/images/banners/banner-12.jpg`} // Ajusta la ruta de la imagen según tu configuración
                title="Latest Arrivals"/></div>
                <div className="col-12 col-md-6"><Cart
                img={`/OLDS/images/banners/banner-12.jpg`} // Ajusta la ruta de la imagen según tu configuración
                title="Latest Arrivals"/></div>
                <div className="col-12 col-md-6"><Cart
                img={`/OLDS/images/banners/banner-12.jpg`} // Ajusta la ruta de la imagen según tu configuración
                title="Latest Arrivals"/></div>
                <div className="col-12 col-md-6"><Cart
                img={`/OLDS/images/banners/banner-12.jpg`} // Ajusta la ruta de la imagen según tu configuración
                title="Latest Arrivals"/></div>
              </div>
              <a
                href="#"
                className="btn btn-link p-0 fw-bolder text-link-border mt-5 text-dark mx-auto d-table"
              >
                Visit Mens Section
              </a>
            </div>
          </div>
          {/* Menswear Dropdown Menu Images Section*/}
        </div>
      </div>
    </div>
    {/* / Menswear dropdown menu*/}
  </li>
  <li className="nav-item dropdown">
    <a
      className="nav-link dropdown-toggle"
      href="#"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Women
    </a>
    <ul className="dropdown-menu">
      <li>
        <a className="dropdown-item" href="">
          Tops
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="">
          Bottoms
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="">
          Jeans
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="">
          T-Shirts
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="">
          Shoes
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="">
          Accessories
        </a>
      </li>
    </ul>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="" role="button">
      Kids
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="" role="button">
      Sale
    </a>
  </li>
  <li className="nav-item dropdown">
    <a
      className="nav-link dropdown-toggle"
      href="#"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Pages
    </a>
    <ul className="dropdown-menu">
      <li>
        <a className="dropdown-item" href="">
          Homepage
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="">
          Category
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="">
          Product
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="">
          Cart
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="l">
          Checkout
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="">
          Login
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="">
          Register
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="">
          Forgotten Password
        </a>
      </li>
    </ul>
  </li>
</ul>
            {/* / Menu*/}
          </div>
          {/* / Main Navigation*/}
        </div>
      </div>
    </div>
  </nav>
      {/* / Navbar */}
    </>
  );
};

export default Navbar2;
