import Image from "next/image";



export default function Header () {
    return(
      <>
      {/* ##### Header Area Start ##### */}
        <header className="header_area">
          <div className="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">
            {/* Classy Menu */}
            <nav className="classy-navbar" id="essenceNav">
              {/* Logo */}
              <a className="nav-brand" href="index.html">
              </a>
              {/* Navbar Toggler */}
              <div className="classy-navbar-toggler">
                <span className="navbarToggler">
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              {/* Menu */}
              <div className="classy-menu">
                {/* close btn */}
                <div className="classycloseIcon">
                  <div className="cross-wrap">
                    <span className="top" />
                    <span className="bottom" />
                  </div>
                </div>
                {/* Nav Start */}
                <div className="classynav">
                  <ul>
                    <li>
                      <a href="#">Productos</a>
                      <div className="megamenu">
                        <ul className="single-mega cn-col-4">
                          <li className="title">Imanes</li>
                          <li>
                            <a href="shop.html">Dresses</a>
                          </li>
                          <li>
                            <a href="shop.html">Blouses &amp; Shirts</a>
                          </li>
                          <li>
                            <a href="shop.html">T-shirts</a>
                          </li>
                          <li>
                            <a href="shop.html">Rompers</a>
                          </li>
                          <li>
                            <a href="shop.html">Bras &amp; Panties</a>
                          </li>
                        </ul>
                        <ul className="single-mega cn-col-4">
                          <li className="title">Destapadores</li>
                          <li>
                            <a href="index.html">Home</a>
                          </li>
                          <li>
                            <a href="shop.html">Shop</a>
                          </li>
                          <li>
                            <a href="single-product-details.html">Product Details</a>
                          </li>
                          <li>
                            <a href="checkout.html">Checkout</a>
                          </li>
                          <li>
                            <a href="blog.html">Blog</a>
                          </li>
                          <li>
                            <a href="single-blog.html">Single Blog</a>
                          </li>
                          <li>
                            <a href="regular-page.html">Regular Page</a>
                          </li>
                          <li>
                            <a href="contact.html">Contact</a>
                          </li>
                        </ul>
                        <ul className="single-mega cn-col-4">
                          <li className="title">Otros</li>
                          <li>
                            <a href="shop.html">Dresses</a>
                          </li>
                          <li>
                            <a href="shop.html">Shirts</a>
                          </li>
                          <li>
                            <a href="shop.html">T-shirts</a>
                          </li>
                          <li>
                            <a href="shop.html">Jackets</a>
                          </li>
                          <li>
                            <a href="shop.html">Trench</a>
                          </li>
                        </ul>
                        <div className="single-mega cn-col-4">
                          {/*<img src="img/bg-img/bg-6.jpg" alt="" />*/}
                          <Image src="/img/bg-img/bg-6.jpg" alt="alt" width={1000} height={900}/>                        </div>
                      </div>
                    </li>
                    <li>
                      <a href="#">Estados</a>
                      <ul className="dropdown">
                        <li>
                          <a href="">Estado de mexico</a>
                        </li>
                        <li>
                          <a href="">Yucatan</a>
                        </li>
                        <li>
                          <a href="">Jalisco</a>
                        </li>
                        <li>
                          <a href="">Michoacan</a>
                        </li>
                        <li>
                          <a href="">Baja california</a>
                        </li>
                        <li>
                          <a href="">Guerrero</a>
                        </li>
                        <li>
                          <a href="">Chiapas</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Donde encontrarnos</a>
                    </li>
                  </ul>
                </div>
                {/* Nav End */}
              </div>
            </nav>
            {/* Header Meta Data */}
            <div className="header-meta d-flex clearfix justify-content-end">
              {/* Search Area */}
              <div className="search-area">
                <form action="#" method="post">
                  <input
                    type="search"
                    name="search"
                    id="headerSearch"
                    placeholder="Type for search"
                  />
                  <button type="submit">
                    <i className="fa fa-search" aria-hidden="true" />
                  </button>
                </form>
              </div>
              {/* Favourite Area */}
              {/* User Login Info */}
              <div className="user-login-info">
                <a href="#">
                <Image src="/img/core-img/user.svg" alt="alt" width={68} height={68} />
                </a>
              </div>
              {/* Cart Area */}
              <div className="cart-area">
                <a href="#" id="essenceCartBtn">
                <Image src="/img/core-img/bag.svg" alt="alt" width={68} height={68} /> <span>4</span>
                </a>
              </div>
            </div>
          </div>
        </header>
        {/* ##### Header Area End ##### */}
        {/* ##### Right Side Cart Area ##### */}
        <div className="cart-bg-overlay" />
        <div className="right-side-cart-area">
          {/* Cart Button */}
          <div className="cart-button">
            <a href="#" id="rightSideCart">
              <Image src="/img/core-img/bag.svg" alt="alt"  width={208} height={208}/> <span>4</span>
            </a>
          </div>
          <div className="cart-content d-flex">
            {/* Cart List Area */}
            <div className="cart-list">
              {/* Single Cart Item */}
              <div className="single-cart-item">
                <a href="#" className="product-image">
                  <Image className="cart-thumb" src="/img/product-img/product-1.jpg" alt="alt" width={208} height={208} />
                  {/* Cart Item Desc */}
                  <div className="cart-item-desc">
                    <span className="product-remove">
                      <i className="fa fa-close" aria-hidden="true" />
                    </span>
                    <span className="badge">Mango</span>
                    <h6>Button Through Strap Mini Dress</h6>
                    <p className="size">Size: S</p>
                    <p className="color">Color: Red</p>
                    <p className="price">$75.00</p>
                  </div>
                </a>
              </div>
              {/* Single Cart Item */}
              <div className="single-cart-item">
                <a href="#" className="product-image">
                 {/* <img
                    src="img/product-img/product-2.jpg"
                    className="cart-thumb"
                    alt=""
                  />*/}
                  <Image className="cart-thumb" src="/img/product-img/product-2.jpg" alt="alt" width={208} height={208} />
                  {/* Cart Item Desc */}
                  <div className="cart-item-desc">
                    <span className="product-remove">
                      <i className="fa fa-close" aria-hidden="true" />
                    </span>
                    <span className="badge">Mango</span>
                    <h6>Button Through Strap Mini Dress</h6>
                    <p className="size">Size: S</p>
                    <p className="color">Color: Red</p>
                    <p className="price">$45.00</p>
                  </div>
                </a>
              </div>
              {/* Single Cart Item */}
              <div className="single-cart-item">
                <a href="#" className="product-image">
                  {/*<img
                    src="img/product-img/product-3.jpg"
                    className="cart-thumb"
                    alt=""
                  />*/}
                  <Image className="cart-thumb" src="/img/product-img/product-3.jpg" alt="alt" width={208} height={208} />
                  {/* Cart Item Desc */}
                  <div className="cart-item-desc">
                    <span className="product-remove">
                      <i className="fa fa-close" aria-hidden="true" />
                    </span>
                    <span className="badge">Mango</span>
                    <h6>Button Through Strap Mini Dress</h6>
                    <p className="size">Size: S</p>
                    <p className="color">Color: Red</p>
                    <p className="price">$45.00</p>
                  </div>
                </a>
              </div>
            </div>
            {/* Cart Summary */}
            <div className="cart-amount-summary">
              <h2>Summary</h2>
              <ul className="summary-table">
                <li>
                  <span>subtotal:</span> <span>$274.00</span>
                </li>
                <li>
                  <span>delivery:</span> <span>Free</span>
                </li>
                <li>
                  <span>discount:</span> <span>-15%</span>
                </li>
                <li>
                  <span>total:</span> <span>$232.00</span>
                </li>
              </ul>
              <div className="checkout-btn mt-100">
                <a href="checkout.html" className="btn essence-btn">
                  check out
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* ##### Right Side Cart End ##### */}
        </>);
  };