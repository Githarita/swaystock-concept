import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import sneaker5 from "../../assets/sneaker5.png";
import "./Productpage.css";

function Productpage() {
  let { productId } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <header className="settings-top produtstop">
        <div className="productstopitem">
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
          </svg>{" "}
          <p className="settings-top-text">{productId}</p>
        </div>
        <svg
          className="settings-top-iconn"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 7.50003C5 8.32845 4.32843 9.00003 3.5 9.00003C2.67157 9.00003 2 8.32845 2 7.50003C2 6.6716 2.67157 6.00003 3.5 6.00003C4.32843 6.00003 5 6.6716 5 7.50003ZM5.71313 8.66388C5.29445 9.45838 4.46048 10 3.5 10C2.11929 10 1 8.88074 1 7.50003C1 6.11931 2.11929 5.00003 3.5 5.00003C4.46048 5.00003 5.29445 5.54167 5.71313 6.33616L9.10424 4.21671C9.03643 3.98968 9 3.74911 9 3.50003C9 2.11932 10.1193 1.00003 11.5 1.00003C12.8807 1.00003 14 2.11932 14 3.50003C14 4.88074 12.8807 6.00003 11.5 6.00003C10.6915 6.00003 9.97264 5.61624 9.51566 5.0209L5.9853 7.22738C5.99502 7.31692 6 7.40789 6 7.50003C6 7.59216 5.99502 7.68312 5.9853 7.77267L9.51567 9.97915C9.97265 9.38382 10.6915 9.00003 11.5 9.00003C12.8807 9.00003 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5C9 11.2509 9.03643 11.0104 9.10425 10.7833L5.71313 8.66388ZM11.5 5.00003C12.3284 5.00003 13 4.32846 13 3.50003C13 2.6716 12.3284 2.00003 11.5 2.00003C10.6716 2.00003 10 2.6716 10 3.50003C10 4.32846 10.6716 5.00003 11.5 5.00003ZM13 11.5C13 12.3285 12.3284 13 11.5 13C10.6716 13 10 12.3285 10 11.5C10 10.6716 10.6716 10 11.5 10C12.3284 10 13 10.6716 13 11.5Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      </header>
      <div className="productpage-cnt">
        <div className="productpage-image">
          <img src={sneaker5} alt="sneaker5" />
        </div>

        <div className="productpage-infomix">
          <div className="productpage-infomixitem1">
            <div className="productpage-info">
              <p className="productpage-infocat">Sneakers</p>
              <h1 className="productpage-infotitle">{productId}</h1>
            </div>
            <div className="productpage-lowestask">
              <p className="productpage-lowestask-subtext">Lowest Ask</p>
              <h1 className="productpage-lowestask-price">N120,000</h1>
            </div>
          </div>
          <div className="productpage-infomixitem2">
            <svg
                className="productpage-infomixitem2-icon"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM7.50003 4C7.77617 4 8.00003 4.22386 8.00003 4.5V7H10.5C10.7762 7 11 7.22386 11 7.5C11 7.77614 10.7762 8 10.5 8H8.00003V10.5C8.00003 10.7761 7.77617 11 7.50003 11C7.22389 11 7.00003 10.7761 7.00003 10.5V8H4.50003C4.22389 8 4.00003 7.77614 4.00003 7.5C4.00003 7.22386 4.22389 7 4.50003 7H7.00003V4.5C7.00003 4.22386 7.22389 4 7.50003 4Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>

        <div className="productpage-notifi">
          <svg
            className="productpage-notifi-icon"
            viewBox="0 0 15 15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.60124 1.25086C8.60124 1.75459 8.26278 2.17927 7.80087 2.30989C10.1459 2.4647 12 4.41582 12 6.79999V10.25C12 11.0563 12.0329 11.7074 12.7236 12.0528C12.931 12.1565 13.0399 12.3892 12.9866 12.6149C12.9333 12.8406 12.7319 13 12.5 13H8.16144C8.36904 13.1832 8.49997 13.4513 8.49997 13.75C8.49997 14.3023 8.05226 14.75 7.49997 14.75C6.94769 14.75 6.49997 14.3023 6.49997 13.75C6.49997 13.4513 6.63091 13.1832 6.83851 13H2.49999C2.2681 13 2.06664 12.8406 2.01336 12.6149C1.96009 12.3892 2.06897 12.1565 2.27638 12.0528C2.96708 11.7074 2.99999 11.0563 2.99999 10.25V6.79999C2.99999 4.41537 4.85481 2.46396 7.20042 2.3098C6.73867 2.17908 6.40036 1.75448 6.40036 1.25086C6.40036 0.643104 6.89304 0.150421 7.5008 0.150421C8.10855 0.150421 8.60124 0.643104 8.60124 1.25086ZM7.49999 3.29999C5.56699 3.29999 3.99999 4.86699 3.99999 6.79999V10.25L4.00002 10.3009C4.0005 10.7463 4.00121 11.4084 3.69929 12H11.3007C10.9988 11.4084 10.9995 10.7463 11 10.3009L11 10.25V6.79999C11 4.86699 9.43299 3.29999 7.49999 3.29999Z"
              
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
          <h2 className="productpage-notifitext">7 Left for this item</h2>
        </div>

        <div className="productpage-category">
          <div className="productpage-category-item">
            <p>Description</p>
          </div>
          <div className="productpage-category-item">
            <p>Product Details</p>
          </div>
          <div className="productpage-category-item">
            <p>Market Data</p>
          </div>
          <div className="productpage-category-item">
            <p>Price History</p>
          </div>
        </div>

        <div className="productpage-desciption">
          <p>
            From the school-spirited College Colors Program to the vibrant Nike
            CO.JP collection, Nike Dunks have seen many colorways since the
            design's inception in 1985. But with each new colorway, the Dunk's
            classic color-blocking has remained in some capacity. Nike put its
            timeless color-blocking to work with the Nike Dunk Low Retro White
            Black.
          </p>

          <p>
            The Upper Nike Dunk Low Retro White Black is constructed of white
            leather with black leather overlays and Swooshes. Classic Nike
            branding is featured on the nylon tongue, nodding to traditional
            Dunk design elements. A white midsole and black outsole completes
            the desing.
          </p>

          <p>
            The Nike Dunk Low Retro White Black released in January of 2021 and
            retailed for N90,000.
          </p>
        </div>

        <div className="productpage-details">
          <div className="productpage-details-item">
            <p className="pditext">Category</p>
            <p className="pdians">Sneakers</p>
          </div>
          <div className="productpage-details-item">
            <p className="pditext">Conditon</p>
            <p className="pdians">New</p>
          </div>
          <div className="productpage-details-item">
            <p className="pditext">Authencity</p>
            <p className="pdians">100%</p>
          </div>
          <div className="productpage-details-item">
            <p className="pditext">Retail Price</p>
            <p className="pdians">N90,000</p>
          </div>
          <div className="productpage-details-item">
            <p className="pditext">Realease Date</p>
            <p className="pdians">02 June 2021</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Productpage;
