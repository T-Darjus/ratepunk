import chrome from "../../assets/Chrome Icon.svg";
import apple from "../../assets/Apple Store Icon.svg";
import star from "../../assets/rating-star.svg";
import "./extension.scss";
import React from "react";

const Extension = () => {
  return (
    <div className="extension">
      <div className="extension__container main-container">
        <div className="extension__cards">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk"
            className="extension__card"
          >
            <div className="-icon">
              <img src={chrome} alt="chrome web store logo"></img>
            </div>
            <div className="extension__card-textbox">
              <p className="extension__card-text">available in the</p>
              <p className="extension__card-heading chrome">chrome web store</p>
            </div>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://apps.apple.com/app/ratepunk/id1607823726"
            className="extension__card"
          >
            <div className="-icon">
              <img src={apple} alt="apple app store logo"></img>
            </div>
            <div className="extension__card-textbox">
              <p className="extension__card-text">available in the</p>
              <p className="extension__card-heading">apple app store</p>
            </div>
          </a>
        </div>
        <div className="extension__reviews">
          <div className="extension__reviews-icons">
            <img className="star-icon" src={star} alt="star" />
            <img className="star-icon" src={star} alt="star" />
            <img className="star-icon" src={star} alt="star" />
            <img className="star-icon" src={star} alt="star" />
            <img className="star-icon" src={star} alt="star" />
          </div>
          <p className="extension__reviews-text">Chrome Store reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Extension;
