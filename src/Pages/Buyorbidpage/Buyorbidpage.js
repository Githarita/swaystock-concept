import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import sneaker5 from "../../assets/sneaker5.png";
import "./Buyorbidpage.css";

function Buyorbidpage() {
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
          </svg>
          {/* <p className="settings-top-text dtptext">{productId}</p> */}
        </div>
        {/* <svg
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
        </svg> */}
      </header>

      <div className="buyorbidcnt">
        <div className="buyorbidcnt-producttop">
          <img src={sneaker5} alt="" className="buyorbidcnt-producttopimage" />
        </div>
        <div className="buyorbidcnt-producttop-item">
          <p className="buyorbcntpitname">{productId}</p>
          <div className="buyorbcntitname-item">
            <p className="buyorbcntpitpic">
              Lowest Ask: <span> NGN 97,000</span>
            </p>
            <p className="buyorbcntpitpic">
              Highest Bid: <span> NGN 120,000</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Buyorbidpage;
