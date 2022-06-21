import React from "react";
import Header from "../../components/Header/Header";
import sneakerimg from "../../assets/sneakers.png";
import apparelimg from "../../assets/apparel.png";
import electronicsimg from "../../assets/electronics.png";
import collectiblesimg from "../../assets/collectibles.png";
import bagsimg from "../../assets/bags.png";
import accessoriesimg from "../../assets/accessories.png";
import beautyimg from "../../assets/beauty.png";
import phoneimg from "../../assets/phone.png";
import sneakercatimg from "../../assets/sneakercat.png";
import sneaker1 from "../../assets/sneaker1.png";
import sneaker2 from "../../assets/sneaker2.png";
import sneaker3 from "../../assets/sneaker3.png";
import sneaker4 from "../../assets/sneaker4.png";
import sneaker5 from "../../assets/sneaker5.png";
import olapng from "../../assets/olapic.png";
import "./Homepage.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Homepage() {
  const [searchmodal, setSearchmodal] = useState(false);
  const [homebtn, setHomebtn] = useState(true);
  const [bottomnav, setBottomnav] = useState(false);

  const homebuttonmenu = () => {
    setHomebtn(false);
    setBottomnav(true);
  };

  const homebtnIconClick = () => {
    setHomebtn(true);
    setBottomnav(false);
  };
  return (
    <div>
      <Header />
      <div className="try">
        <section className="header">
          <div className="header__typography">
            <h1 className="header__h1">
              <span className="header__h1-span">SwayStock.</span> The best place
              to buy, bid, sell and ask products you love.
            </h1>
          </div>

          <div className="header__user-profile">
            <img
              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
            <div className="header__user-profile_info">
              <div className="">
                <p className="header__username">Emmanuel Adeyemi</p>
                <p className="header__username-tag">@yemicodes</p>
              </div>
            </div>
          </div>
          <div
            className="searchhome"
            onClick={() => {
              setSearchmodal(true);
              setHomebtn(false);
            }}
          >
            <svg
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
              className="searchhome__svg"
            >
              <path
                d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </section>
        <section className="categories">
          <div className="categories__item">
            <img src={phoneimg} alt="" />
            <p>Phones</p>
          </div>

          <div className="categories__item">
            <img src={sneakerimg} alt="" />
            <p>Sneakers</p>
          </div>
          <div className="categories__item">
            <img src={apparelimg} alt="" />
            <p>Apparel</p>
          </div>
          <div className="categories__item">
            <img src={electronicsimg} alt="" />
            <p>Electronics</p>
          </div>
          <div className="categories__item">
            <img src={collectiblesimg} alt="" />
            <p>Collectibles</p>
          </div>
          <div className="categories__item">
            <img src={bagsimg} alt="" />
            <p>Bags</p>
          </div>
          <div className="categories__item">
            <img src={accessoriesimg} alt="" />
            <p>Accessories</p>
          </div>
          <div className="categories__item">
            <img src={beautyimg} alt="" />
            <p>Beauty</p>
          </div>
        </section>

        <section className="marketlist__title">
          <h2>
            <span className="header__h1-span">The latest.</span> Take a look at
            what's new, right now.
          </h2>
        </section>
        <section className="sneakers__categories">
          <div className="sneakers__categories__item">
            <div
              className="sneakers1img"
              style={{ backgroundImage: `url(${sneakercatimg})` }}
            />
            <div className="sneakers__categories__item-info">
              <h2>In with the new.</h2>
              <p>Discover fresh new colors for your favorite accessories.</p>
            </div>
          </div>

          <div className="sneakers__categories__item-group">
            <div className="sneakers_item-name">
              <p className="sneaker-tag">New</p>
              <h2 className="sneaker-name">Adidas Yeezy Foam RNR Onyx</h2>
            </div>
            <div className="imagecnt">
              <img src={sneaker1} alt="" />
            </div>{" "}
            <div className="price-cnt">
              <p className="lowask">Lowest Ask</p>
              <p className="sneaker-price">NGN100k</p>
            </div>
          </div>
          <div className="sneakers__categories__item-group">
            <div className="sneakers_item-name">
              <p className="sneaker-tag">Only at SwayStock</p>
              <h2 className="sneaker-name">
                Jordan 2 Retro A Ma Maniere Airness
              </h2>
            </div>
            <div className="imagecnt">
              <img src={sneaker2} alt="" />
            </div>{" "}
            <div className="price-cnt">
              <p className="lowask">Lowest Ask</p>
              <p className="sneaker-price">NGN230k</p>
            </div>
          </div>
          <div className="sneakers__categories__item-group">
            <div className="sneakers_item-name">
              <p className="sneaker-tag">New</p>
              <h2 className="sneaker-name">Jordan 4 Retro Millitary Black</h2>
            </div>

            <div className="imagecnt">
              <img src={sneaker3} alt="" />
            </div>
            <div className="price-cnt">
              <p className="lowask">Lowest Ask</p>
              <p className="sneaker-price">NGN150k</p>
            </div>
          </div>
          <div className="sneakers__categories__item-group">
            <div className="sneakers_item-name">
              <p className="sneaker-tag">New</p>
              <h2 className="sneaker-name">
                Nike Air Max 1 Kasina Won-Ang Orange
              </h2>
            </div>

            <div className="imagecnt">
              <img src={sneaker4} alt="" />
            </div>
            <div className="price-cnt">
              <p className="lowask">Lowest Ask</p>
              <p className="sneaker-price">NGN80k</p>
            </div>
          </div>
          <div className="sneakers__categories__item-group">
            <div className="sneakers_item-name">
              <p className="sneaker-tag">Only at SwayStock</p>
              <h2 className="sneaker-name">Nike Dunk Low Two-Toned Grey(GS)</h2>
            </div>

            <div className="imagecnt">
              <img src={sneaker5} alt="" />
            </div>
            <div className="price-cnt">
              <p className="lowask">Lowest Ask</p>
              <p className="sneaker-price">NGN50k</p>
            </div>
          </div>

          <div className="sneakers__categories__item">
            <div
              className="sneakers1img"
              style={{ backgroundImage: `url(${sneakercatimg})` }}
            />
            <div className="sneakers__categories__item-info">
              <h2>Explore all products.</h2>
            </div>
          </div>
        </section>

        <section className="marketlist__title">
          <h2>
            <span className="header__h1-span">Accessories.</span> Essentials
            that pair perfectly with your favorite devices
          </h2>
        </section>
        <section className="sneakers__categories">
          <div className="sneakers__categories__item">
            <div
              className="sneakers1img"
              style={{ backgroundImage: `url(${sneakercatimg})` }}
            />
            <div className="sneakers__categories__item-info">
              <h2>Don't take it lightly</h2>
              <p>Pro anywhere from.</p>
            </div>
          </div>

          <div className="sneakers__categories__item-group">
            <div className="sneakers_item-name">
              <p className="sneaker-tag">New</p>
              <h2 className="sneaker-name">Adidas Yeezy Foam RNR Onyx</h2>
            </div>
            <div className="imagecnt">
              <img src={sneaker1} alt="" />
            </div>{" "}
            <div className="price-cnt">
              <p className="lowask">Lowest Ask</p>
              <p className="sneaker-price">NGN100k</p>
            </div>
          </div>
          <div className="sneakers__categories__item-group">
            <div className="sneakers_item-name">
              <p className="sneaker-tag">Only at SwayStock</p>
              <h2 className="sneaker-name">
                Jordan 2 Retro A Ma Maniere Airness
              </h2>
            </div>
            <div className="imagecnt">
              <img src={sneaker2} alt="" />
            </div>{" "}
            <div className="price-cnt">
              <p className="lowask">Lowest Ask</p>
              <p className="sneaker-price">NGN230k</p>
            </div>
          </div>
          <div className="sneakers__categories__item-group">
            <div className="sneakers_item-name">
              <p className="sneaker-tag">New</p>
              <h2 className="sneaker-name">Jordan 4 Retro Millitary Black</h2>
            </div>

            <div className="imagecnt">
              <img src={sneaker3} alt="" />
            </div>
            <div className="price-cnt">
              <p className="lowask">Lowest Ask</p>
              <p className="sneaker-price">NGN150k</p>
            </div>
          </div>
          <div className="sneakers__categories__item-group">
            <div className="sneakers_item-name">
              <p className="sneaker-tag">New</p>
              <h2 className="sneaker-name">
                Nike Air Max 1 Kasina Won-Ang Orange
              </h2>
            </div>

            <div className="imagecnt">
              <img src={sneaker4} alt="" />
            </div>
            <div className="price-cnt">
              <p className="lowask">Lowest Ask</p>
              <p className="sneaker-price">NGN80k</p>
            </div>
          </div>
          <div className="sneakers__categories__item-group">
            <div className="sneakers_item-name">
              <p className="sneaker-tag">Only at SwayStock</p>
              <h2 className="sneaker-name">Nike Dunk Low Two-Toned Grey(GS)</h2>
            </div>

            <div className="imagecnt">
              <img src={sneaker5} alt="" />
            </div>
            <div className="price-cnt">
              <p className="lowask">Lowest Ask</p>
              <p className="sneaker-price">NGN50k</p>
            </div>
          </div>

          <div className="sneakers__categories__item">
            <div
              className="sneakers1img"
              style={{ backgroundImage: `url(${sneakercatimg})` }}
            />
            <div className="sneakers__categories__item-info">
              <h2>Explore all products.</h2>
            </div>
          </div>
        </section>

        <section className="marketlist__title">
          <h2>
            <span className="header__h1-span">TLoud and clear.</span>{" "}
            Unparalleled choices for rich, high-quality sound.
          </h2>
        </section>
        <section className="sneakers__categories">
          <div className="sneakers__categories__item">
            <div
              className="sneakers1img"
              style={{ backgroundImage: `url(${sneakercatimg})` }}
            />
            <div className="sneakers__categories__item-info">
              <h2>Get 6 months of Apple Music free.</h2>
              <p>
                Included with purchase of select AirPods and Beats products, and
                HomePod mini.**
              </p>
            </div>
          </div>

          <div className="sneakers__categories__item-group">
            <div className="sneakers_item-name">
              <p className="sneaker-tag">New</p>
              <h2 className="sneaker-name">Adidas Yeezy Foam RNR Onyx</h2>
            </div>
            <div className="imagecnt">
              <img src={sneaker1} alt="" />
            </div>{" "}
            <div className="price-cnt">
              <p className="lowask">Lowest Ask</p>
              <p className="sneaker-price">NGN100k</p>
            </div>
          </div>
          <div className="sneakers__categories__item-group">
            <div className="sneakers_item-name">
              <p className="sneaker-tag">Only at SwayStock</p>
              <h2 className="sneaker-name">
                Jordan 2 Retro A Ma Maniere Airness
              </h2>
            </div>
            <div className="imagecnt">
              <img src={sneaker2} alt="" />
            </div>{" "}
            <div className="price-cnt">
              <p className="lowask">Lowest Ask</p>
              <p className="sneaker-price">NGN230k</p>
            </div>
          </div>
          <div className="sneakers__categories__item-group">
            <div className="sneakers_item-name">
              <p className="sneaker-tag">New</p>
              <h2 className="sneaker-name">Jordan 4 Retro Millitary Black</h2>
            </div>

            <div className="imagecnt">
              <img src={sneaker3} alt="" />
            </div>
            <div className="price-cnt">
              <p className="lowask">Lowest Ask</p>
              <p className="sneaker-price">NGN150k</p>
            </div>
          </div>
          <div className="sneakers__categories__item-group">
            <div className="sneakers_item-name">
              <p className="sneaker-tag">New</p>
              <h2 className="sneaker-name">
                Nike Air Max 1 Kasina Won-Ang Orange
              </h2>
            </div>

            <div className="imagecnt">
              <img src={sneaker4} alt="" />
            </div>
            <div className="price-cnt">
              <p className="lowask">Lowest Ask</p>
              <p className="sneaker-price">NGN80k</p>
            </div>
          </div>
          <div className="sneakers__categories__item-group">
            <div className="sneakers_item-name">
              <p className="sneaker-tag">Only at SwayStock</p>
              <h2 className="sneaker-name">Nike Dunk Low Two-Toned Grey(GS)</h2>
            </div>

            <div className="imagecnt">
              <img src={sneaker5} alt="" />
            </div>
            <div className="price-cnt">
              <p className="lowask">Lowest Ask</p>
              <p className="sneaker-price">NGN50k</p>
            </div>
          </div>

          <div className="sneakers__categories__item">
            <div
              className="sneakers1img"
              style={{ backgroundImage: `url(${sneakercatimg})` }}
            />
            <div className="sneakers__categories__item-info">
              <h2>Explore all products.</h2>
            </div>
          </div>
        </section>
        <section style={{ marginTop: "3.5rem" }} className="marketlist__title">
          <h2>
            <span className="header__h1-span">The SwayStock difference.</span>{" "}
            Even more reasons to shop with us.
          </h2>
        </section>

        <section className="difference">
          <div className="difference_item">
            <svg
              className="difference_icon1"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 1C5 0.447715 5.44772 0 6 0H9C9.55228 0 10 0.447715 10 1V2H14C14.5523 2 15 2.44772 15 3V6C15 6.8888 14.6131 7.68734 14 8.23608V11.5C14 12.3284 13.3284 13 12.5 13H2.5C1.67157 13 1 12.3284 1 11.5V8.2359C0.38697 7.68721 0 6.88883 0 6V3C0 2.44772 0.447716 2 1 2H5V1ZM9 1V2H6V1H9ZM1 3H5H5.5H9.5H10H14V6C14 6.654 13.6866 7.23467 13.1997 7.6004C12.8655 7.85144 12.4508 8 12 8H8V7.5C8 7.22386 7.77614 7 7.5 7C7.22386 7 7 7.22386 7 7.5V8H3C2.5493 8 2.1346 7.85133 1.80029 7.60022C1.31335 7.23446 1 6.65396 1 6V3ZM7 9H3C2.64961 9 2.31292 8.93972 2 8.82905V11.5C2 11.7761 2.22386 12 2.5 12H12.5C12.7761 12 13 11.7761 13 11.5V8.82915C12.6871 8.93978 12.3504 9 12 9H8V9.5C8 9.77614 7.77614 10 7.5 10C7.22386 10 7 9.77614 7 9.5V9Z"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
            <h2 className="difference_typo">
              <span className="conv">Convenient pickup options</span> that fit
              into your everyday schedule.
            </h2>
          </div>
          <div className="difference_item">
            <svg
              className="difference_icon2"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 2H2.5C2.22386 2 2 2.22386 2 2.5V12.5C2 12.7761 2.22386 13 2.5 13H12.5C12.7761 13 13 12.7761 13 12.5V2.5C13 2.22386 12.7761 2 12.5 2ZM2.5 1C1.67157 1 1 1.67157 1 2.5V12.5C1 13.3284 1.67157 14 2.5 14H12.5C13.3284 14 14 13.3284 14 12.5V2.5C14 1.67157 13.3284 1 12.5 1H2.5Z"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
            <h2 className="difference_typo">
              Choose fast, free authentication,{" "}
              <span className="within"> within two-days courier delivery.</span>
            </h2>
          </div>
          <div className="difference_item">
            <svg
              className="difference_icon3"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 9C3 6.5 4.5 4.25 7.5 1.5C10.5 4.25 12 6.5 12 9C12 11.4853 9.98528 13.5 7.5 13.5C5.01472 13.5 3 11.4853 3 9ZM10.9524 8.30307C9.67347 7.82121 8.2879 8.46208 6.98956 9.06259C5.9327 9.55142 4.93365 10.0135 4.09695 9.82153C4.03357 9.55804 4 9.28294 4 9C4 7.11203 5.02686 5.27195 7.5 2.87357C9.66837 4.97639 10.725 6.65004 10.9524 8.30307Z"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
            <h2 className="difference_typo">
              Make them yours.{" "}
              <span className="maked">
                Engrave a mix of emoji, names, and numbers into your product for
                free.
              </span>
            </h2>
          </div>
          <div className="difference_item">
            <svg
              className="difference_icon4"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.8536 1.14645C11.6583 0.951184 11.3417 0.951184 11.1465 1.14645L3.71455 8.57836C3.62459 8.66832 3.55263 8.77461 3.50251 8.89155L2.04044 12.303C1.9599 12.491 2.00189 12.709 2.14646 12.8536C2.29103 12.9981 2.50905 13.0401 2.69697 12.9596L6.10847 11.4975C6.2254 11.4474 6.3317 11.3754 6.42166 11.2855L13.8536 3.85355C14.0488 3.65829 14.0488 3.34171 13.8536 3.14645L11.8536 1.14645ZM4.42166 9.28547L11.5 2.20711L12.7929 3.5L5.71455 10.5784L4.21924 11.2192L3.78081 10.7808L4.42166 9.28547Z"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
            <h2 className="difference_typo">
              <span className="getorg">Get Original </span>tag on your mac and
              create your own style of tag.
            </h2>
          </div>
          <div className="difference_item">
            <svg
              className="difference_icon5"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.35355 1.85355C3.54882 1.65829 3.54882 1.34171 3.35355 1.14645C3.15829 0.951184 2.84171 0.951184 2.64645 1.14645L0.646447 3.14645C0.451184 3.34171 0.451184 3.65829 0.646447 3.85355L2.64645 5.85355C2.84171 6.04882 3.15829 6.04882 3.35355 5.85355C3.54882 5.65829 3.54882 5.34171 3.35355 5.14645L2.20711 4H9.5C11.433 4 13 5.567 13 7.5C13 7.77614 13.2239 8 13.5 8C13.7761 8 14 7.77614 14 7.5C14 5.01472 11.9853 3 9.5 3H2.20711L3.35355 1.85355ZM2 7.5C2 7.22386 1.77614 7 1.5 7C1.22386 7 1 7.22386 1 7.5C1 9.98528 3.01472 12 5.5 12H12.7929L11.6464 13.1464C11.4512 13.3417 11.4512 13.6583 11.6464 13.8536C11.8417 14.0488 12.1583 14.0488 12.3536 13.8536L14.3536 11.8536C14.5488 11.6583 14.5488 11.3417 14.3536 11.1464L12.3536 9.14645C12.1583 8.95118 11.8417 8.95118 11.6464 9.14645C11.4512 9.34171 11.4512 9.65829 11.6464 9.85355L12.7929 11H5.5C3.567 11 2 9.433 2 7.5Z"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
            <h2 className="difference_typo">
              <span className="tradcur">Trade in your current device. </span>Get
              to bid and ask toward a new one.
            </h2>
          </div>
          <div className="difference_item">
            <svg
              className="difference_icon6"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 11.0001V4.00006L1 4.00006L1 11.0001H14ZM15 4.00006V11.0001C15 11.5523 14.5523 12.0001 14 12.0001H1C0.447715 12.0001 0 11.5523 0 11.0001V4.00006C0 3.44778 0.447715 3.00006 1 3.00006H14C14.5523 3.00006 15 3.44778 15 4.00006ZM2 5.25C2 5.11193 2.11193 5 2.25 5H5.75C5.88807 5 6 5.11193 6 5.25V9.75C6 9.88807 5.88807 10 5.75 10H2.25C2.11193 10 2 9.88807 2 9.75V5.25ZM7.5 7C7.22386 7 7 7.22386 7 7.5C7 7.77614 7.22386 8 7.5 8H10.5C10.7761 8 11 7.77614 11 7.5C11 7.22386 10.7761 7 10.5 7H7.5ZM7 9.5C7 9.22386 7.22386 9 7.5 9H12.5C12.7761 9 13 9.22386 13 9.5C13 9.77614 12.7761 10 12.5 10H7.5C7.22386 10 7 9.77614 7 9.5ZM7.5 5C7.22386 5 7 5.22386 7 5.5C7 5.77614 7.22386 6 7.5 6H11.5C11.7761 6 12 5.77614 12 5.5C12 5.22386 11.7761 5 11.5 5H7.5Z"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
            <h2 className="difference_typo">
              Pay in full or <span className="payov">pay over time. </span>Your
              choice.
            </h2>
          </div>
        </section>
        <section style={{ marginTop: "3.5rem" }} className="marketlist__title">
          <h2>
            <span className="header__h1-span">Help is here.</span> Whenever and
            however you need it.
          </h2>
        </section>
        <section className="help_here">
          <div className="help_here-itemheader">
            <div
              className="help_headerimg"
              style={{ backgroundImage: `url(${olapng})` }}
            />
            <div className="help_headerinfo">
              <h2>Shop one on one with a Specialist Online store.</h2>
            </div>
          </div>
        </section>
      </div>
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
                setHomebtn(true);
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

      {homebtn && (
        <div className="homemenu" onClick={homebuttonmenu}>
          <svg
            viewBox="0 0 15 15"
            className="homenuswitchicon"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 2C3.11929 2 2 3.11929 2 4.5C2 5.88072 3.11929 7 4.5 7C5.88072 7 7 5.88072 7 4.5C7 3.11929 5.88072 2 4.5 2ZM3 4.5C3 3.67157 3.67157 3 4.5 3C5.32843 3 6 3.67157 6 4.5C6 5.32843 5.32843 6 4.5 6C3.67157 6 3 5.32843 3 4.5ZM10.5 2C9.11929 2 8 3.11929 8 4.5C8 5.88072 9.11929 7 10.5 7C11.8807 7 13 5.88072 13 4.5C13 3.11929 11.8807 2 10.5 2ZM9 4.5C9 3.67157 9.67157 3 10.5 3C11.3284 3 12 3.67157 12 4.5C12 5.32843 11.3284 6 10.5 6C9.67157 6 9 5.32843 9 4.5ZM2 10.5C2 9.11929 3.11929 8 4.5 8C5.88072 8 7 9.11929 7 10.5C7 11.8807 5.88072 13 4.5 13C3.11929 13 2 11.8807 2 10.5ZM4.5 9C3.67157 9 3 9.67157 3 10.5C3 11.3284 3.67157 12 4.5 12C5.32843 12 6 11.3284 6 10.5C6 9.67157 5.32843 9 4.5 9ZM10.5 8C9.11929 8 8 9.11929 8 10.5C8 11.8807 9.11929 13 10.5 13C11.8807 13 13 11.8807 13 10.5C13 9.11929 11.8807 8 10.5 8ZM9 10.5C9 9.67157 9.67157 9 10.5 9C11.3284 9 12 9.67157 12 10.5C12 11.3284 11.3284 12 10.5 12C9.67157 12 9 11.3284 9 10.5Z"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      )}

      {bottomnav && (
        <>
          <div className="bottomnav_modalOverlay" />
          <div className="bottomnav_modalWrap">
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
                    setHomebtn(false);
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
              <div className="bottomnav_close">
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
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Homepage;
