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

function Homepage() {
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
    </div>
  );
}

export default Homepage;
