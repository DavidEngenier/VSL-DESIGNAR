import Brands from "@/components/Brands";
import Startarea from "@/components/StartArea";
import Header from "@/components/ui/header2";
import Image from "next/image";
import '../../css/core-style.css';


export default function Home() {
  return (
    <>
    <div className="bg-white">
<Header/>
  {/* ##### Welcome Area Start ##### */}
  <Startarea/>
  {/* ##### Welcome Area End ##### */}
  {/* ##### Brands Area Start ##### */}
  <Brands/>
  {/* ##### Brands Area End ##### */}
  {/* ##### Top Catagory Area Start ##### */}
  <div className="top_catagory_area section-padding-80 clearfix">
    <div className="container">
      <div className="row justify-content-center">
        {/* Single Catagory */}
        <div className="col-6 col-sm-4 col-md-3">
          <div
            className="single_catagory_area d-flex align-items-center justify-content-center bg-img"
            style={{
              backgroundImage: "url(img/bg-img/bg-2.jpg)",
              borderRadius: "100%"
            }}
          >
            <div className="catagory-content">
              <a href="#">Clothing</a>
            </div>
          </div>
        </div>
        {/* Single Catagory */}
        <div className="col-6 col-sm-4 col-md-3">
          <div
            className="single_catagory_area d-flex align-items-center justify-content-center bg-img"
            style={{
              backgroundImage: "url(img/bg-img/bg-3.jpg)",
              borderRadius: "100%"
            }}
          >
            <div className="catagory-content">
              <a href="#">Shoes</a>
            </div>
          </div>
        </div>
        {/* Single Catagory */}
        <div className="col-6 col-sm-4 col-md-3">
          <div
            className="single_catagory_area d-flex align-items-center justify-content-center bg-img"
            style={{
              backgroundImage: "url(img/bg-img/bg-4.jpg)",
              borderRadius: "100%"
            }}
          >
            <div className="catagory-content">
              <a href="#">Accessories</a>
            </div>
          </div>
        </div>
        {/* Single Catagory */}
        <div className="col-6 col-sm-4 col-md-3">
          <div
            className="single_catagory_area d-flex align-items-center justify-content-center bg-img"
            style={{
              backgroundImage: "url(img/bg-img/bg-4.jpg)",
              borderRadius: "100%"
            }}
          >
            <div className="catagory-content">
              <a href="#">Accessories</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* ##### Top Catagory Area End ##### */}
  {/* ##### CTA Area Start ##### */}
  <div className="cta-area">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div
            className="cta-content bg-img background-overlay"
            style={{ backgroundImage: "url(img/bg-img/bg-5.jpg)" }}
          >
            <div className="h-100 d-flex align-items-center justify-content-end">
              <div className="cta--text">
                <h6>-60%</h6>
                <h2>Global Sale</h2>
                <a href="#" className="btn essence-btn">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* ##### CTA Area End ##### */}
  {/* ##### New Arrivals Area Start ##### */}
  <section className="new_arrivals_area section-padding-80 clearfix">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-heading text-center">
            <h2>Los mas populares</h2>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="popular-products-slides owl-carousel">
            {/* Single Product */}
            <div className="single-product-wrapper">
              {/* Product Image */}
              <div className="product-img">
                <img src="img/product-img/product-1.jpg" alt="" />
                {/* Hover Thumb */}
                <img
                  className="hover-img"
                  src="img/product-img/product-2.jpg"
                  alt=""
                />
                {/* Favourite */}
                <div className="product-favourite">
                  <a href="#" className="favme fa fa-heart" />
                </div>
              </div>
              {/* Product Description */}
              <div className="product-description">
                <span>topshop</span>
                <a href="single-product-details.html">
                  <h6>Knot Front Mini Dress</h6>
                </a>
                <p className="product-price">$80.00</p>
                {/* Hover Content */}
                <div className="hover-content">
                  {/* Add to Cart */}
                  <div className="add-to-cart-btn">
                    <a href="#" className="btn essence-btn">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Product */}
            <div className="single-product-wrapper">
              {/* Product Image */}
              <div className="product-img">
                <img src="img/product-img/product-2.jpg" alt="" />
                {/* Hover Thumb */}
                <img
                  className="hover-img"
                  src="img/product-img/product-3.jpg"
                  alt=""
                />
                {/* Favourite */}
                <div className="product-favourite">
                  <a href="#" className="favme fa fa-heart" />
                </div>
              </div>
              {/* Product Description */}
              <div className="product-description">
                <span>topshop</span>
                <a href="single-product-details.html">
                  <h6>Poplin Displaced Wrap Dress</h6>
                </a>
                <p className="product-price">$80.00</p>
                {/* Hover Content */}
                <div className="hover-content">
                  {/* Add to Cart */}
                  <div className="add-to-cart-btn">
                    <a href="#" className="btn essence-btn">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Product */}
            <div className="single-product-wrapper">
              {/* Product Image */}
              <div className="product-img">
                <img src="img/product-img/product-3.jpg" alt="" />
                {/* Hover Thumb */}
                <img
                  className="hover-img"
                  src="img/product-img/product-4.jpg"
                  alt=""
                />
                {/* Product Badge */}
                <div className="product-badge offer-badge">
                  <span>-30%</span>
                </div>
                {/* Favourite */}
                <div className="product-favourite">
                  <a href="#" className="favme fa fa-heart" />
                </div>
              </div>
              {/* Product Description */}
              <div className="product-description">
                <span>mango</span>
                <a href="single-product-details.html">
                  <h6>PETITE Crepe Wrap Mini Dress</h6>
                </a>
                <p className="product-price">
                  <span className="old-price">$75.00</span> $55.00
                </p>
                {/* Hover Content */}
                <div className="hover-content">
                  {/* Add to Cart */}
                  <div className="add-to-cart-btn">
                    <a href="#" className="btn essence-btn">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Product */}
            <div className="single-product-wrapper">
              {/* Product Image */}
              <div className="product-img">
                <img src="img/product-img/product-4.jpg" alt="" />
                {/* Hover Thumb */}
                <img
                  className="hover-img"
                  src="img/product-img/product-5.jpg"
                  alt=""
                />
                {/* Product Badge */}
                <div className="product-badge new-badge">
                  <span>New</span>
                </div>
                {/* Favourite */}
                <div className="product-favourite">
                  <a href="#" className="favme fa fa-heart" />
                </div>
              </div>
              {/* Product Description */}
              <div className="product-description">
                <span>mango</span>
                <a href="single-product-details.html">
                  <h6>PETITE Belted Jumper Dress</h6>
                </a>
                <p className="product-price">$80.00</p>
                {/* Hover Content */}
                <div className="hover-content">
                  {/* Add to Cart */}
                  <div className="add-to-cart-btn">
                    <a href="#" className="btn essence-btn">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ##### New Arrivals Area End ##### */}
  {/* ##### Footer Area Start ##### */}
  </div>
</>

  );
}
