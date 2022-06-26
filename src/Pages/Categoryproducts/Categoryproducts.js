import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./Categoryproducts.css";
import sneakercatpageimg from "../../assets/sneakercatimg.png";

function Categoryproducts() {
  let { categoryId } = useParams();

  return (
    <>
      <Header />
      <header className="categoryproducts_header">
        <div className="categoryproducts_header-item">
          <div className="categoryproducts_header-item-text">
            <h1>{categoryId}</h1>
            <div className="">
              <p>Oh. So. Comfy.</p>
              <p>Love the power. Love the price.</p>
              <p>Check back later fo more available products.</p>
              <p>Suggest a product</p>
            </div>
          </div>
          <img src={sneakercatpageimg} alt="" />
        </div>
      </header>
    </>
  );
}

export default Categoryproducts;
