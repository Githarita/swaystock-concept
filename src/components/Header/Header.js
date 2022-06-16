import React from "react";
import "./Header.css";

function Header() {
  return (
    <nav className="nav__container">
      <div className="nav__body">
        <a href="/yemmi" className="nav__items">
          Sneakers
        </a>
        <a href="/yemmi" className="nav__items">
          Apparel
        </a>
        <a href="/yemmi" className="nav__items">
          Phones & Tablets
        </a>
        <a href="/yemmi" className="nav__items">
          Electronics
        </a>

        <a href="/yemmi" className="nav__items">
          Accessories
        </a>
        <a href="/yemmi" className="nav__items">
          Bags
        </a>
        <a href="/yemmi" className="nav__items">
          NFTs
        </a>
        <a href="/yemmi" className="nav__items">
          Support
        </a>
      </div>
    </nav>
  );
}

export default Header;
