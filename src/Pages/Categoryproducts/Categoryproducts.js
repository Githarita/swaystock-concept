import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./Categoryproducts.css";

function Categoryproducts() {
  let { categoryId } = useParams();

  return (
    <>
      <Header />
      <div className="">Categoryproducts {categoryId}</div>
    </>
  );
}

export default Categoryproducts;
