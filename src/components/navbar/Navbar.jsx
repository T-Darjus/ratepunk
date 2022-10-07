import logo from "../../assets/Group 12.svg";
import "./navbar.scss";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navigation">
      <div className="navigation__container main-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <ul className="navigation__list">
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
      </div>
    </nav>
  );
};

export default Navbar;
