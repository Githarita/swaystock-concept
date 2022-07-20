import React from "react";
import { useNavigate } from "react-router-dom";
import { categoryProductList } from "../../Utils/datas";
import "./Buyingpage.css";

function Buyingpage() {
  const navigate = useNavigate();
  return (
    <>
      <header className="settings-top">
        <svg
          className="settings-top-icon"
          viewBox="0 0 15 15"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => navigate(-1)}
        >
          <path
            d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>

        <p className="settings-top-text">Buying</p>
      </header>
      <div className="buying-info-containerr">
        <section className="catproductlist-grid">
          {categoryProductList.catProductType.map((catprolist, key) => {
            return (
              <div className="catproductlist-item">
                <div className="catproductlist-item-name" key={key}>
                  <p className="catproductlisttag">{catprolist.tag}</p>
                  <h2 className="catproductlistname">{catprolist.name}</h2>
                </div>
                <img
                  src={`${catprolist.image}`}
                  alt=""
                  className="catproductlistimage"
                />
                <div className="catproductlistprice-cnt">
                  <p className="catproductlistlwask">Lowest Ask</p>
                  <p className="catproductlisprice">{catprolist.price}</p>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
}

export default Buyingpage;
