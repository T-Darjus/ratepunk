import logo from "../../assets/Group 12.svg";
import email from "../../assets/Icon feather-mail.svg";
import instagram from "../../assets/Icon awesome-instagram.svg";
import facebook from "../../assets/Icon awesome-facebook-f.svg";
import linkedin from "../../assets/Icon awesome-linkedin-in.svg";
import twitter from "../../assets/Icon awesome-twitter.svg";
import tiktok from "../../assets/Icon simple-tiktok.svg";
import "./footer.scss";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="main-container">
        <div className="footer__wrapper">
          <div className="footer__textbox">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <p className="footer__description">
              Ratepunk compares hotel room prices across the major online travel
              agencies. When you search for a room, Ratepunk extension scans the
              top booking sites and runs a price comparison, so you can be
              confident in knowing you’re getting the best deal!
            </p>
          </div>
          <div className="footer__links">
            <div className="footer__quick-links">
              <p className="footer-heading">Quick links</p>
              <ul>
                <li>
                  <Link className="footer-link" to="/">
                    Price Comparison
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" to="/">
                    Chrome Extension
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" to="/">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" to="/">
                    Ratepunk Blog
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" to="/">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <div className="footer__contact">
                <p className="footer-heading">Contact</p>
                <div className="footer-email">
                  <img src={email} alt="envelope icon" />
                  <a className="footer-link" href="/">
                    hi@ratepunk.com
                  </a>
                </div>
              </div>
              <div className="footer__social">
                <p className="footer-heading">Social</p>
                <ul>
                  <li className="social-link">
                    <a href="/">
                      <img src={instagram} alt="instagram logo" />
                    </a>
                  </li>
                  <li className="social-link">
                    <a href="/">
                      <img src={facebook} alt="facebook logo" />
                    </a>
                  </li>
                  <li className="social-link">
                    <a href="/">
                      <img src={linkedin} alt="linkedIn logo" />
                    </a>
                  </li>
                  <li className="social-link">
                    <a href="/">
                      <img src={twitter} alt="twitter logo" />
                    </a>
                  </li>
                  <li className="social-link">
                    <a href="/">
                      <img src={tiktok} alt="tiktok logo" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Ratepunk. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
