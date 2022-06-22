import React from "react";
import { useParams } from "react-router-dom";
import "./Categoryproducts.css";

function Categoryproducts() {
    let {categoryId} = useParams();
  return <div>Categoryproducts {categoryId}</div>;
}

export default Categoryproducts;
