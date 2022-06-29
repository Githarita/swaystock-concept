import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./Categoryproducts.css";
import sneakercatpageimg from "../../assets/sneakercatimg.png";
import { Link, useNavigate } from "react-router-dom";

function Categoryproducts() {
  let { categoryId } = useParams();
  const navigate = useNavigate();

  const [searchmodal, setSearchmodal] = useState(false);
  // const [selectedChoice, setSelectedChoice] = useState("");
  // const [homebtn, setHomebtn] = useState(true);
  const [bottomnav, setBottomnav] = useState(true);
  const [isListed, setIslisted] = useState(false);
  const [sortaby, setSortaby] = useState("not-active");
  const [productacat, setProductacat] = useState("not-active");
  const [sortaprice, setSortaprice] = useState("not-active");
  const [sortagender, setSortagender] = useState("not-active");
  const [sortbyValue, setSortbyValue] = useState("");
  const [sortpriceValue, setSortpriceValue] = useState("");
  const [sortgenderValue, setSortgenderValue] = useState("");
  const [productcatValue, setProductcatValue] = useState("");
  const [filteractive, setFilterActive] = useState(false);

  const sorttBy = () => {
    setSortaby("active");
    setProductacat("not-active");
    setSortagender("not-active");
    setSortaprice("not-active");
  };
  const producttCat = () => {
    setProductacat("active");
    setSortaby("not-active");

    setSortagender("not-active");
    setSortaprice("not-active");
  };
  const sorttPrice = () => {
    setSortaprice("active");
    setSortaby("not-active");
    setProductacat("not-active");
    setSortagender("not-active");
  };
  const sorttGender = () => {
    setSortagender("active");
    setSortaby("not-active");
    setProductacat("not-active");
    setSortaprice("not-active");
  };

  const closeModal = () => {
    setFilterActive(false);
    setBottomnav(true);
    setSortaby("not-active");
    setProductacat("not-active");
    setSortaprice("not-active");
    setSortagender("not-active");
    setSortbyValue("");
    setSortpriceValue("");
    setSortgenderValue("");
    setProductcatValue("");
  };

  let viewbtn;
  if (isListed) {
    viewbtn = (
      <svg
        viewBox="0 0 15 15"
        className="filternavbar-top__icon"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => setIslisted(false)}
      >
        <path
          d="M1.5 5.25C1.91421 5.25 2.25 4.91421 2.25 4.5C2.25 4.08579 1.91421 3.75 1.5 3.75C1.08579 3.75 0.75 4.08579 0.75 4.5C0.75 4.91421 1.08579 5.25 1.5 5.25ZM4 4.5C4 4.22386 4.22386 4 4.5 4H13.5C13.7761 4 14 4.22386 14 4.5C14 4.77614 13.7761 5 13.5 5H4.5C4.22386 5 4 4.77614 4 4.5ZM4.5 7C4.22386 7 4 7.22386 4 7.5C4 7.77614 4.22386 8 4.5 8H13.5C13.7761 8 14 7.77614 14 7.5C14 7.22386 13.7761 7 13.5 7H4.5ZM4.5 10C4.22386 10 4 10.2239 4 10.5C4 10.7761 4.22386 11 4.5 11H13.5C13.7761 11 14 10.7761 14 10.5C14 10.2239 13.7761 10 13.5 10H4.5ZM2.25 7.5C2.25 7.91421 1.91421 8.25 1.5 8.25C1.08579 8.25 0.75 7.91421 0.75 7.5C0.75 7.08579 1.08579 6.75 1.5 6.75C1.91421 6.75 2.25 7.08579 2.25 7.5ZM1.5 11.25C1.91421 11.25 2.25 10.9142 2.25 10.5C2.25 10.0858 1.91421 9.75 1.5 9.75C1.08579 9.75 0.75 10.0858 0.75 10.5C0.75 10.9142 1.08579 11.25 1.5 11.25Z"
          fillRule="evenodd"
          clipRule="evenodd"
        ></path>
      </svg>
    );
  } else {
    viewbtn = (
      <svg
        onClick={() => setIslisted(true)}
        viewBox="0 0 15 15"
        className="filternavbar-top__icon"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 2H1.5C1.22386 2 1 2.22386 1 2.5V7H7V2ZM8 2V7H14V2.5C14 2.22386 13.7761 2 13.5 2H8ZM7 8H1V12.5C1 12.7761 1.22386 13 1.5 13H7V8ZM8 13V8H14V12.5C14 12.7761 13.7761 13 13.5 13H8ZM1.5 1C0.671573 1 0 1.67157 0 2.5V12.5C0 13.3284 0.671573 14 1.5 14H13.5C14.3284 14 15 13.3284 15 12.5V2.5C15 1.67157 14.3284 1 13.5 1H1.5Z"
          fillRule="evenodd"
          clipRule="evenodd"
        ></path>
      </svg>
    );
  }

  

  const sortBy = {
    sortType: [
      {
        name: "Featured",
        value: "featured",
      },
      {
        name: "Most Popular",
        value: "most popular",
      },
      {
        name: "New Lowest Asks",
        value: "new lowest asks",
      },
      {
        name: "New Highest Bids",
        value: "new highest bids",
      },
      {
        name: "Average Sale Price",
        value: "average sale price",
      },
      {
        name: "Total Sold",
        value: "total sold",
      },
      {
        name: "Volatility",
        value: "volatility",
      },
      {
        name: "Price Premium",
        value: "price premium",
      },
      {
        name: "Last Sale",
        value: "last sale",
      },
      {
        name: "Lowest Ask",
        value: "lowest ask",
      },
      {
        name: "Highest Bid",
        value: "highest bid",
      },
      {
        name: "Release Date",
        value: "release date",
      },
    ],
  };

  const productCat = {
    productCatType: [
      {
        name: "Sneakers",
        value: "sneakers",
      },
      {
        name: "Collectibles",
        value: "collectibles",
      },
      {
        name: "Apparel",
        value: "apparel",
      },
      {
        name: "Electronics",
        value: "electronics",
      },
      {
        name: "Accessories",
        value: "accessories",
      },
      {
        name: "Beauty",
        value: "beauty",
      },
      {
        name: "Bags",
        value: "bags",
      },
      {
        name: "NFTs",
        value: "nfts",
      },
    ],
  };

  const byPrice = {
    byPriceType: [
      {
        name: "Under ₦50,000",
        value: "under 50,000",
      },
      {
        name: "₦50,000 - ₦100,000",
        value: "50,000 - 100,000",
      },
      {
        name: "₦100,000 - ₦250,000",
        value: "100,000 - 250,000",
      },
      {
        name: "₦250,000 - ₦500,000",
        value: "250,000 - 500,000",
      },
      {
        name: "₦500,000 - ₦1,000,000",
        value: "500,000 - 1,000,000",
      },
      {
        name: "₦1,000,000 +",
        value: "1,000,000 +",
      },
    ],
  };

  const byGenders = {
    byGendersType: [
      {
        name: "Men",
        value: "men",
      },

      {
        name: "Women",
        value: "women",
      },
      {
        name: "Kids",
        value: "kids",
      },
      {
        name: "Unisex",
        value: "unisex",
      },
    ],
  };


  const homebtnIconClick = () => {
    setBottomnav(false);
  };

  return (
    <>
      <Header />
      <div className="categoryproductsnav">
        <svg
          viewBox="0 0 15 15"
          className="categoryproductsnav-icon"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => navigate(-1)}
        >
          <path
            d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>

        <div className="navquantityam">
          {/* <svg
            onClick={() => {
              setSearchmodal(true);
              setBottomnav(false);
              setFilterActive(false);
            }}
            viewBox="0 0 15 15"
            className="categoryproductsnav-icon"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg> */}
          <svg
            viewBox="0 0 15 15"
            className="categoryproductsnav-icon"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              setFilterActive(true);
              setBottomnav(false);
              setSearchmodal(false);
            }}
          >
            <path
              d="M5.5 3C4.67157 3 4 3.67157 4 4.5C4 5.32843 4.67157 6 5.5 6C6.32843 6 7 5.32843 7 4.5C7 3.67157 6.32843 3 5.5 3ZM3 5C3.01671 5 3.03323 4.99918 3.04952 4.99758C3.28022 6.1399 4.28967 7 5.5 7C6.71033 7 7.71978 6.1399 7.95048 4.99758C7.96677 4.99918 7.98329 5 8 5H13.5C13.7761 5 14 4.77614 14 4.5C14 4.22386 13.7761 4 13.5 4H8C7.98329 4 7.96677 4.00082 7.95048 4.00242C7.71978 2.86009 6.71033 2 5.5 2C4.28967 2 3.28022 2.86009 3.04952 4.00242C3.03323 4.00082 3.01671 4 3 4H1.5C1.22386 4 1 4.22386 1 4.5C1 4.77614 1.22386 5 1.5 5H3ZM11.9505 10.9976C11.7198 12.1399 10.7103 13 9.5 13C8.28967 13 7.28022 12.1399 7.04952 10.9976C7.03323 10.9992 7.01671 11 7 11H1.5C1.22386 11 1 10.7761 1 10.5C1 10.2239 1.22386 10 1.5 10H7C7.01671 10 7.03323 10.0008 7.04952 10.0024C7.28022 8.8601 8.28967 8 9.5 8C10.7103 8 11.7198 8.8601 11.9505 10.0024C11.9668 10.0008 11.9833 10 12 10H13.5C13.7761 10 14 10.2239 14 10.5C14 10.7761 13.7761 11 13.5 11H12C11.9833 11 11.9668 10.9992 11.9505 10.9976ZM8 10.5C8 9.67157 8.67157 9 9.5 9C10.3284 9 11 9.67157 11 10.5C11 11.3284 10.3284 12 9.5 12C8.67157 12 8 11.3284 8 10.5Z"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
          {/* {" "}
          <div className="navwhatoview">{viewbtn}</div> */}
        </div>
      </div>
      <header className="categoryproducts_header">
        <div className="categoryproducts_header-item">
          <div className="categoryproducts_header-item-text">
            <h1 className="categoryidname">{categoryId}</h1>
            <div className="categorytextcnt">
              <p className="categpryp">Oh. So. Comfy.</p>
              <p className="categpryp">Love the power. Love the price.</p>
              <p className="categpryp">
                Check back later fo more available products.
              </p>
            </div>
            <Link to="/" className="suggestlink">
              Suggest a product
            </Link>
          </div>
          <img src={sneakercatpageimg} alt="" />
        </div>
      </header>

      <section className="whatyowant">
        
        <h1>Which {categoryId} is right for you?</h1>
      </section>

      <section className="categoryproductsnav-filteram">
        
      </section>

      {searchmodal && (
        <div className="searchproductmodal">
          <div className="searchinput">
            <svg
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
              className="searchinput__icon"
            >
              <path
                d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
            <input
              type="text"
              placeholder="Search for brand, color, etc."
              className="searchdinput"
              autoFocus
            />
            <svg
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
              className="searchinput__icon"
              onClick={() => {
                setSearchmodal(false);
                // setHomebtn(true);
                setBottomnav(true);
              }}
            >
              <path
                d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>

          <div className="searchproductmodal__list">
            <p className="quicklinks">QUICK LINKS</p>
            <div className="searchproductmodal__list__it">
              <div className="searchproductmodal__items">
                <p>Visiting SwayStock FAQ</p>
              </div>
              <div className="searchproductmodal__items">
                <p>Sneakers</p>
              </div>
              <div className="searchproductmodal__items">
                <p>Accessories</p>
              </div>
              <div className="searchproductmodal__items">
                <p>Iphone 13</p>
              </div>
              <div className="searchproductmodal__items">
                <p>NFTs</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {filteractive && (
        <div className="filternavbar">
          <div className="filtersway">
            <div className="filternavbar-top">
              <svg
                className="filternavbar-top__icon"
                viewBox="0 0 15 15"
                xmlns="http://www.w3.org/2000/svg"
                onClick={closeModal}
              >
                <path
                  d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
              <h2>Filter</h2>
            </div>

            <div className="navwhatoview">{viewbtn}</div>
          </div>

          <div className="filternavbar-body">
            {sortaby === "not-active" ? (
              <div className="bottomsheetsort" onClick={() => sorttBy()}>
                <div className="category-worda">
                  <p className="btssort">Sort By</p>
                  <p className="category-worda-value">{sortbyValue}</p>
                </div>

                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            ) : (
              <div
                className="bottomsheetsort"
                onClick={() => setSortaby("not-active")}
              >
                <div className="category-worda">
                  <p className="btssort">Sort By</p>
                  <p className="category-worda-value">{sortbyValue}</p>
                </div>

                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            )}
            {sortaby === "active" && (
              <div className="nagender">
                {sortBy.sortType.map((worklist, key) => {
                  return (
                    <div
                      className="categoryproducts_products"
                      key={key}
                      onClick={() => {
                        setSortbyValue(worklist.name);
                        setSortaby("not-active");
                      }}
                    >
                      {worklist.name}
                    </div>
                  );
                })}
              </div>
            )}
            {productacat === "not-active" ? (
              <div className="bottomsheetsort" onClick={() => producttCat()}>
                <div className="category-worda">
                  <p className="btssort">Product Category</p>
                  <p className="category-worda-value">{productcatValue}</p>
                </div>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            ) : (
              <div
                className="bottomsheetsort"
                onClick={() => setProductacat("not-active")}
              >
                <div className="category-worda">
                  <p className="btssort">Product Category</p>
                  <p className="category-worda-value">{productcatValue}</p>
                </div>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            )}
            {productacat === "active" && (
              <div className="nagender">
                {productCat.productCatType.map((worklist, key) => {
                  return (
                    <div
                      className="categoryproducts_products"
                      key={key}
                      onClick={() => {
                        setProductcatValue(worklist.name);
                        setProductacat("not-active");
                      }}
                    >
                      {worklist.name}
                    </div>
                  );
                })}
              </div>
            )}
            {sortaprice === "not-active" ? (
              <div className="bottomsheetsort" onClick={() => sorttPrice()}>
                <div className="category-worda">
                  <p className="btssort">Price</p>
                  <p className="category-worda-value">{sortpriceValue}</p>
                </div>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            ) : (
              <div
                className="bottomsheetsort"
                onClick={() => setSortaprice("not-active")}
              >
                <div className="category-worda">
                  <p className="btssort">Price</p>
                  <p className="category-worda-value">{sortpriceValue}</p>
                </div>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            )}
            {sortaprice === "active" && (
              <div className="nagender">
                {byPrice.byPriceType.map((worklist, key) => {
                  return (
                    <div
                      className="categoryproducts_products"
                      key={key}
                      onClick={() => {
                        setSortpriceValue(worklist.name);
                        setSortaprice("not-active");
                      }}
                    >
                      {worklist.name}
                    </div>
                  );
                })}
              </div>
            )}
            {sortagender === "not-active" ? (
              <div className="bottomsheetsort" onClick={() => sorttGender()}>
                <div className="category-worda">
                  <p className="btssort">Genders</p>
                  <p className="category-worda-value">{sortgenderValue}</p>
                </div>

                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            ) : (
              <div
                className="bottomsheetsort"
                onClick={() => setSortagender("not-active")}
              >
                <div className="category-worda">
                  <p className="btssort">Genders</p>
                  <p className="category-worda-value">{sortgenderValue}</p>
                </div>

                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            )}
            {sortagender === "active" && (
              <div className="nagender">
                {byGenders.byGendersType.map((worklist, key) => {
                  return (
                    <div
                      className="categoryproducts_products"
                      key={key}
                      onClick={() => {
                        setSortgenderValue(worklist.name);
                        setSortagender("not-active");
                      }}
                    >
                      {worklist.name}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}

      

      {bottomnav && (
        <>
          {/* <div className="bottomnav_modalOverlay" /> */}

          <div className="bottomnav">
            <div className="bottomnav_item">
              {/* <p>Home</p> */}
              <Link to="/" className="bottonav_icon-cnt">
                <svg
                  className="bottomnav__icon"
                  viewBox="0 0 15 15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.07926 0.222253C7.31275 -0.007434 7.6873 -0.007434 7.92079 0.222253L14.6708 6.86227C14.907 7.09465 14.9101 7.47453 14.6778 7.71076C14.4454 7.947 14.0655 7.95012 13.8293 7.71773L13 6.90201V12.5C13 12.7761 12.7762 13 12.5 13H2.50002C2.22388 13 2.00002 12.7761 2.00002 12.5V6.90201L1.17079 7.71773C0.934558 7.95012 0.554672 7.947 0.32229 7.71076C0.0899079 7.47453 0.0930283 7.09465 0.32926 6.86227L7.07926 0.222253ZM7.50002 1.49163L12 5.91831V12H10V8.49999C10 8.22385 9.77617 7.99999 9.50002 7.99999H6.50002C6.22388 7.99999 6.00002 8.22385 6.00002 8.49999V12H3.00002V5.91831L7.50002 1.49163ZM7.00002 12H9.00002V8.99999H7.00002V12Z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
            <div className="bottomnav_item">
              {/* <p>Search</p> */}
              <div
                className="bottonav_icon-cnt"
                onClick={() => {
                  homebtnIconClick();
                  setSearchmodal(true);
                  // setHomebtn(false);
                  setBottomnav(false);
                }}
              >
                <svg
                  className="bottomnav__icon"
                  viewBox="0 0 15 15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="bottomnav_item">
              {/* <p>Categories</p> */}
              <Link to="/categories" className="bottonav_icon-cnt">
                <svg
                  className="bottomnav__icon"
                  viewBox="0 0 15 15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.8 1L2.74967 0.99997C2.52122 0.999752 2.32429 0.999564 2.14983 1.04145C1.60136 1.17312 1.17312 1.60136 1.04145 2.14983C0.999564 2.32429 0.999752 2.52122 0.99997 2.74967L1 2.8V5.2L0.99997 5.25033C0.999752 5.47878 0.999564 5.67572 1.04145 5.85017C1.17312 6.39864 1.60136 6.82688 2.14983 6.95856C2.32429 7.00044 2.52122 7.00025 2.74967 7.00003L2.8 7H5.2L5.25033 7.00003C5.47878 7.00025 5.67572 7.00044 5.85017 6.95856C6.39864 6.82688 6.82688 6.39864 6.95856 5.85017C7.00044 5.67572 7.00025 5.47878 7.00003 5.25033L7 5.2V2.8L7.00003 2.74967C7.00025 2.52122 7.00044 2.32429 6.95856 2.14983C6.82688 1.60136 6.39864 1.17312 5.85017 1.04145C5.67572 0.999564 5.47878 0.999752 5.25033 0.99997L5.2 1H2.8ZM2.38328 2.01382C2.42632 2.00348 2.49222 2 2.8 2H5.2C5.50779 2 5.57369 2.00348 5.61672 2.01382C5.79955 2.05771 5.94229 2.20045 5.98619 2.38328C5.99652 2.42632 6 2.49222 6 2.8V5.2C6 5.50779 5.99652 5.57369 5.98619 5.61672C5.94229 5.79955 5.79955 5.94229 5.61672 5.98619C5.57369 5.99652 5.50779 6 5.2 6H2.8C2.49222 6 2.42632 5.99652 2.38328 5.98619C2.20045 5.94229 2.05771 5.79955 2.01382 5.61672C2.00348 5.57369 2 5.50779 2 5.2V2.8C2 2.49222 2.00348 2.42632 2.01382 2.38328C2.05771 2.20045 2.20045 2.05771 2.38328 2.01382ZM9.8 1L9.74967 0.99997C9.52122 0.999752 9.32429 0.999564 9.14983 1.04145C8.60136 1.17312 8.17312 1.60136 8.04145 2.14983C7.99956 2.32429 7.99975 2.52122 7.99997 2.74967L8 2.8V5.2L7.99997 5.25033C7.99975 5.47878 7.99956 5.67572 8.04145 5.85017C8.17312 6.39864 8.60136 6.82688 9.14983 6.95856C9.32429 7.00044 9.52122 7.00025 9.74967 7.00003L9.8 7H12.2L12.2503 7.00003C12.4788 7.00025 12.6757 7.00044 12.8502 6.95856C13.3986 6.82688 13.8269 6.39864 13.9586 5.85017C14.0004 5.67572 14.0003 5.47878 14 5.25033L14 5.2V2.8L14 2.74967C14.0003 2.52122 14.0004 2.32429 13.9586 2.14983C13.8269 1.60136 13.3986 1.17312 12.8502 1.04145C12.6757 0.999564 12.4788 0.999752 12.2503 0.99997L12.2 1H9.8ZM9.38328 2.01382C9.42632 2.00348 9.49222 2 9.8 2H12.2C12.5078 2 12.5737 2.00348 12.6167 2.01382C12.7995 2.05771 12.9423 2.20045 12.9862 2.38328C12.9965 2.42632 13 2.49222 13 2.8V5.2C13 5.50779 12.9965 5.57369 12.9862 5.61672C12.9423 5.79955 12.7995 5.94229 12.6167 5.98619C12.5737 5.99652 12.5078 6 12.2 6H9.8C9.49222 6 9.42632 5.99652 9.38328 5.98619C9.20045 5.94229 9.05771 5.79955 9.01382 5.61672C9.00348 5.57369 9 5.50779 9 5.2V2.8C9 2.49222 9.00348 2.42632 9.01382 2.38328C9.05771 2.20045 9.20045 2.05771 9.38328 2.01382ZM2.74967 7.99997L2.8 8H5.2L5.25033 7.99997C5.47878 7.99975 5.67572 7.99956 5.85017 8.04145C6.39864 8.17312 6.82688 8.60136 6.95856 9.14983C7.00044 9.32429 7.00025 9.52122 7.00003 9.74967L7 9.8V12.2L7.00003 12.2503C7.00025 12.4788 7.00044 12.6757 6.95856 12.8502C6.82688 13.3986 6.39864 13.8269 5.85017 13.9586C5.67572 14.0004 5.47878 14.0003 5.25033 14L5.2 14H2.8L2.74967 14C2.52122 14.0003 2.32429 14.0004 2.14983 13.9586C1.60136 13.8269 1.17312 13.3986 1.04145 12.8502C0.999564 12.6757 0.999752 12.4788 0.99997 12.2503L1 12.2V9.8L0.99997 9.74967C0.999752 9.52122 0.999564 9.32429 1.04145 9.14983C1.17312 8.60136 1.60136 8.17312 2.14983 8.04145C2.32429 7.99956 2.52122 7.99975 2.74967 7.99997ZM2.8 9C2.49222 9 2.42632 9.00348 2.38328 9.01382C2.20045 9.05771 2.05771 9.20045 2.01382 9.38328C2.00348 9.42632 2 9.49222 2 9.8V12.2C2 12.5078 2.00348 12.5737 2.01382 12.6167C2.05771 12.7995 2.20045 12.9423 2.38328 12.9862C2.42632 12.9965 2.49222 13 2.8 13H5.2C5.50779 13 5.57369 12.9965 5.61672 12.9862C5.79955 12.9423 5.94229 12.7995 5.98619 12.6167C5.99652 12.5737 6 12.5078 6 12.2V9.8C6 9.49222 5.99652 9.42632 5.98619 9.38328C5.94229 9.20045 5.79955 9.05771 5.61672 9.01382C5.57369 9.00348 5.50779 9 5.2 9H2.8ZM9.8 8L9.74967 7.99997C9.52122 7.99975 9.32429 7.99956 9.14983 8.04145C8.60136 8.17312 8.17312 8.60136 8.04145 9.14983C7.99956 9.32429 7.99975 9.52122 7.99997 9.74967L8 9.8V12.2L7.99997 12.2503C7.99975 12.4788 7.99956 12.6757 8.04145 12.8502C8.17312 13.3986 8.60136 13.8269 9.14983 13.9586C9.32429 14.0004 9.52122 14.0003 9.74967 14L9.8 14H12.2L12.2503 14C12.4788 14.0003 12.6757 14.0004 12.8502 13.9586C13.3986 13.8269 13.8269 13.3986 13.9586 12.8502C14.0004 12.6757 14.0003 12.4788 14 12.2503L14 12.2V9.8L14 9.74967C14.0003 9.52122 14.0004 9.32429 13.9586 9.14983C13.8269 8.60136 13.3986 8.17312 12.8502 8.04145C12.6757 7.99956 12.4788 7.99975 12.2503 7.99997L12.2 8H9.8ZM9.38328 9.01382C9.42632 9.00348 9.49222 9 9.8 9H12.2C12.5078 9 12.5737 9.00348 12.6167 9.01382C12.7995 9.05771 12.9423 9.20045 12.9862 9.38328C12.9965 9.42632 13 9.49222 13 9.8V12.2C13 12.5078 12.9965 12.5737 12.9862 12.6167C12.9423 12.7995 12.7995 12.9423 12.6167 12.9862C12.5737 12.9965 12.5078 13 12.2 13H9.8C9.49222 13 9.42632 12.9965 9.38328 12.9862C9.20045 12.9423 9.05771 12.7995 9.01382 12.6167C9.00348 12.5737 9 12.5078 9 12.2V9.8C9 9.49222 9.00348 9.42632 9.01382 9.38328C9.05771 9.20045 9.20045 9.05771 9.38328 9.01382Z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
            <div className="bottomnav_item">
              {/* <p>Nofication</p> */}
              <div className="bottonav_icon-cnt" onClick={homebtnIconClick}>
                <svg
                  className="bottomnav__icon"
                  viewBox="0 0 15 15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.60124 1.25086C8.60124 1.75459 8.26278 2.17927 7.80087 2.30989C10.1459 2.4647 12 4.41582 12 6.79999V10.25C12 11.0563 12.0329 11.7074 12.7236 12.0528C12.931 12.1565 13.0399 12.3892 12.9866 12.6149C12.9333 12.8406 12.7319 13 12.5 13H8.16144C8.36904 13.1832 8.49997 13.4513 8.49997 13.75C8.49997 14.3023 8.05226 14.75 7.49997 14.75C6.94769 14.75 6.49997 14.3023 6.49997 13.75C6.49997 13.4513 6.63091 13.1832 6.83851 13H2.49999C2.2681 13 2.06664 12.8406 2.01336 12.6149C1.96009 12.3892 2.06897 12.1565 2.27638 12.0528C2.96708 11.7074 2.99999 11.0563 2.99999 10.25V6.79999C2.99999 4.41537 4.85481 2.46396 7.20042 2.3098C6.73867 2.17908 6.40036 1.75448 6.40036 1.25086C6.40036 0.643104 6.89304 0.150421 7.5008 0.150421C8.10855 0.150421 8.60124 0.643104 8.60124 1.25086ZM7.49999 3.29999C5.56699 3.29999 3.99999 4.86699 3.99999 6.79999V10.25L4.00002 10.3009C4.0005 10.7463 4.00121 11.4084 3.69929 12H11.3007C10.9988 11.4084 10.9995 10.7463 11 10.3009L11 10.25V6.79999C11 4.86699 9.43299 3.29999 7.49999 3.29999Z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>

            <div className="bottomnav_item">
              {/* <p>Profile</p> */}
              <div className="bottonav_icon-cnt" onClick={homebtnIconClick}>
                <img
                  className="bottomnav__image"
                  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt=""
                />
              </div>
            </div>
            {/* <div className="bottomnav_close">
                <div className="closebottomnav_item" onClick={homebtnIconClick}>
                  <svg
                    viewBox="0 0 15 15"
                    className="closebottomnav_icon"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div> */}
          </div>
        </>
      )}
    </>
  );
}

export default Categoryproducts;
