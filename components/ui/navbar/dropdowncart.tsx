import React from "react";
import data from "@/public/data/category-products.json";

const Cart: React.FC = () =>{
    return(
    <div className="card justify-content-center d-flex align-items-center bg-transparent">
        {data.entries.map((brand, index) =>(
        <picture key={index} className="w-100 d-block mb-2 mx-auto">
          <img
            className="w-100 rounded"
            title=""
            src={brand.img}
            alt={`Logo ${index + 1}`}
          />
        </picture>
        ))}
        <a className="fw-bolder link-cover" href="{{webRoot}}/category.html">
          {/*titulo*/}
        </a>
      </div>
      );
  };
  export default Cart;