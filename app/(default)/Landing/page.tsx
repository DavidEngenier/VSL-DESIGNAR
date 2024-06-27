
"use client"
import React, { useEffect } from 'react';
import Navbarser from "@/components/ui/navbar";
import Footer2 from "@/components/ui/footer2";
import Menus2 from "@/components/ui/Menus2";

import Dropdowncart from "@/components/cart/cart-remove/cartdropdown";
import Head from 'next/head';
import Heroswiper from "@/components/swiper/swiper-homepage-hero";
import Logos from "@/components/marque/logo";
import Categories from "@/components/swiper/swiper-categories";
import Instagramsw from "@/components/swiper/instragram";
import Comentarios from '@/components/Reviews/reviews';


const runScripts = () => {
  import('@/public/OLDS/js/theme.js').then(() => {
    console.log('theme.js loaded'); // Puedes agregar más lógica aquí si es necesario
  }).catch((err) => {
    console.error('Error loading theme.js:', err);
  });
};


const Home: React.FC =()=> {

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)'); // Cambia el tamaño según tus necesidades

    const handleResize = () => {
      if (mediaQuery.matches) {
        runScripts();
      }
    };

    // Ejecutar al montar el componente
    handleResize();

    // Escuchar cambios de tamaño de pantalla
    window.addEventListener('resize', handleResize);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);




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
      {/* Categorias */}
      <section className="py-5" data-aos="fade-in">
  <div className="container">
    <div className="row g-5">
      <div className="col-12 col-md-7" data-aos="fade-right">
        <div className="m-0">
          <p className="small fw-bolder text-uppercase tracking-wider mb-2 text-muted">
            Hiking Essentials
          </p>
          <h2 className="display-5 fw-bold mb-6">
            Our Latest Must-Have Products
          </h2>
          <div className="px-8 position-relative">
            {/* Swiper*/}
            {/*{{> swiper/swiper-linked-carousel-small}}*/}
            {/* /Swiper*/}
            {/* Swiper Arrows */}
            <div className="swiper-prev-linked position-absolute top-50 start-0 mt-n8 cursor-pointer transition-all opacity-50-hover">
              <i className="ri-arrow-left-s-line ri-2x" />
            </div>
            <div className="swiper-next-linked position-absolute top-50 end-0 me-3 mt-n8 cursor-pointer transition-all opacity-50-hover">
              <i className="ri-arrow-right-s-line ri-2x" />
            </div>
            {/* / Swiper Arrows*/}
          </div>
        </div>
      </div>
      <div className="col-md-5 d-none d-md-flex" data-aos="fade-left">
        <div className="w-100 h-100">
          {/* Swiper*/}
          {/*{{> swiper/swiper-linked-carousel-large}}*/}
          {/* / Swiper*/}
        </div>
      </div>
    </div>
  </div>
      </section>
      {/* fin categorias */}
      {/* Homepage Intro*/}
      <Comentarios/>
      {/* / Homepage Intro*/}
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
};

export default Home
