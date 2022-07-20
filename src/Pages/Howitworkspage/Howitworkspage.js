import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Howitworkspage.css";

function Howitworkspage() {
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

        <p className="settings-top-text">How it Works</p>
      </header>
      <div className="buying-info-containerr">
        <div className="howitworkscnt">
          <div className="howitworkstop">
            <div className="howitworkstopitem">
              <h1>BUY</h1>
            </div>
            <div className="howitworkstopitem">
              <h1>SELL</h1>
            </div>
            <div className="howitworkstopitem">
              <h1>Authentication</h1>
            </div>
          </div>
          <div className="howitworksbottom">
            <div className="howitworksbottombuy">
              <p>Place A Bid Or Buy Now</p>
              <p>We Authenticate</p>
              <p>We Ship To You</p>

              <div className="hiwbb">
                <h2>Buying On SwayStock</h2>
                <p>
                  We don't determine the price, you do. As a live marketplace,
                  SwayStock empowers you to Bid and Buy at real-time prices that
                  reflect the current demand
                </p>
              </div>

              <div className="hiwbbnameprice">
                <h2>Name Your Price</h2>
                <p>
                  Buy Now at the lowest Ask, or place a lower Bid at the price
                  you want to pay. We will send you immediate updates as prices
                  move on your Bids. Bids can be renewed or let go when they're
                  about to expire, and you'll be notified ahead of time
                </p>
              </div>

              <div className="hiwbbnameprice">
                <h2>Browse Our Nigeria Marketplace</h2>
                <p>
                  Discover and shop the products you love from around the world.
                  Doesn't matter if it's a recently sold out console or an
                  internationally exclusive product, you can always find them
                  available for purchase on our marketplace.
                </p>
              </div>

              <div className="hiwbbnameprice">
                <h2>Make Data-Driven Purchases</h2>
                <p>
                  Stay informed with powerful data to help you make the right
                  purchases. View analytics like historical prices and
                  time-stamped trades for every item to help you shop smarter.
                </p>
              </div>

              <div className="hiwbbnameprice">
                <h2>Enjoy Guaranteed Authenticity</h2>
                <p>
                  Our global team of authenticators inspect all items by hand.
                  They'll verify and make sure every item you buy is completely
                  authentic and brand new before it arrives at your door.
                </p>

                <Link to="/">Learn More about Authenticity</Link>
              </div>

              <div className="stepsonsuccess">
                <h1>Our Steps For Success</h1>
                <div className="stepsonsuccess-item">
                  <h2>Bid or Buy</h2>
                  <p>
                    On SwayStock there are two ways to buy: Bid at the price of
                    your choice and watch our dynamic marketplace come to life,
                    or Buy Now at the lowest Ask to secure your item without any
                    gamesmanship.
                  </p>
                </div>
                <div className="stepsonsuccess-item">
                  <h2>We Authenticate</h2>
                  <p>
                    Kick back and relax while we get to work. We make sure items
                    are shipped ASAP for verification. Once we verify it's 100%
                    authentic, we ship it off to you! Our average delivery time
                    is 7-12 busines days from order date.
                  </p>
                </div>
                <div className="stepsonsuccess-item">
                  <h2>Flex on Everyone</h2>
                  <p>
                    After we make sure the order is 100% authentic, we send it
                    your way ASAP. Once it arrives you should feel free to flex
                    on everyone by sharing with the hashtag #GotItOnSwayStock.
                    We'll be sure to show you some love as well.
                  </p>
                </div>
              </div>
            </div>
            <div className="howitworksbottombuy">
              <p>Place An Ask Or Sell Now</p>
              <p>Ship Us Your Sold Item</p>
              <p>We Authenticate & You Get Paid</p>

              <div className="hiwbb">
                <h2>Selling On SwayStock</h2>
                <p>
                  Whether you're looking to make quick cash or start a reselling
                  business, we have the tools to help you succeed.
                </p>
              </div>

              <div className="hiwbbnameprice">
                <h2>Sell Quick with Zero Customer Base</h2>
                <p>
                  Just search for your product and set your price. You won't
                  need to take product pictures, share personal information, or
                  negotiate with potential Buyers.
                </p>
              </div>

              <div className="hiwbbnameprice">
                <h2>Reach Millions</h2>
                <p>
                  Our global reach extends to millions of customers in Nigeria.
                  You're guaranteed to discover someone who can't wait to
                  purchase the item you're selling.
                </p>
              </div>

              <div className="hiwbbnameprice">
                <h2>Unlock Rewards</h2>
                <p>
                  We pride ourselves on having some of the lowest commission
                  rates in the industry and we wnat to share our thanks for
                  making it happen. The more you sell, the lower your rates.
                </p>
              </div>

              <div className="stepsonsuccess">
                <h1>Our Steps For Selling Easily</h1>
                <div className="stepsonsuccess-item">
                  <h2>No Approval Needed! Sign Up & Sell</h2>
                  <p>
                    Your earnings, your rules. All you have to do is select a
                    payout method and currency from our availbale options.
                  </p>
                </div>
                <div className="stepsonsuccess-item">
                  <h2>Create Smarter Listings</h2>
                  <p>
                    Decide when to sell and how to sell using the historical
                    sales data for every item on our marketplace.
                  </p>
                </div>
                <div className="stepsonsuccess-item">
                  <h2>Ship Us Your Sold Items</h2>
                  <p>
                    We require that you send us the sold item within two
                    business days. Simply print the label we send and follow our
                    shipping guidelines to ensure your products arrive safely at
                    our authentication center.
                  </p>
                </div>
                <div className="stepsonsuccess-item">
                  <h2>Get Paid</h2>
                  <p>
                    We release your payouts as soon as we confirm your sold
                    items are new and authentic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Howitworkspage;
