import Image from "next/image";

import Dropdownslinks from "./navbar/dropdown";





export default function Menus2 () {
    return(
      <>
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
          <div className="col col-lg-8 py-lg-5"> <Dropdownslinks/>  </div>
          {/* /Menswear Dropdown Menu Links Section*/}
          {/* Menswear Dropdown Menu Images Section*/}
          <div className="col-lg-4 d-none d-lg-block">
            <div className="vw-50 border-start h-100 position-absolute" />
            <div className="py-lg-5 position-relative z-index-10 px-lg-4">
              <div className="row g-4">
                <div className="col-12 col-md-6">{/*image*/}</div>
                <div className="col-12 col-md-6">{/*image*/}</div>
                <div className="col-12 col-md-6">{/*image*/}</div>
                <div className="col-12 col-md-6">{/*image*/}</div>
              </div>
              <a
                href=""
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

        </>);
  };