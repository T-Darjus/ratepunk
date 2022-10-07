import logo from "../../assets/Group 12.svg";
import menu from "../../assets/menu-icon.svg";
import close from "../../assets/menu-close.svg";
import "./navbar.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navigation">
      <div className="navigation__container main-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <ul className={isOpen ? "navigation__list open" : "navigation__list"}>
          <li>
            <Link className="navigation__link" to="/">
              Chrome Extension
            </Link>
          </li>
          <li>
            <Link className="navigation__link" to="/">
              Price Comparison
            </Link>
          </li>
          <li>
            <Link className="navigation__link" to="/">
              Blog
            </Link>
          </li>
        </ul>
        <button
          className="mobile__menu"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <img
            className={isOpen ? "hidden" : undefined}
            src={menu}
            alt="menu icon"
          />
          <img
            className={!isOpen ? "hidden" : undefined}
            src={close}
            alt="close menu icon"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
