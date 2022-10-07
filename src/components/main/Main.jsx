import "./main.scss";
import envelope from "../../assets/Invite Friends Img.svg";
import hand from "../../assets/Collect coins img.svg";
import voucher from "../../assets/Get voucher img.svg";
import React from "react";
import Extension from "../extension/Extension";
import RefLink from "../refLink/RefLink";

const Main = () => {
  return (
    <>
      <section className="main">
        <div className="main__container main-container">
          <div className="main__form">
            <h1 className="main__form-heading">
              Refer friends and get rewards
            </h1>
            <p className="main__form-description">
              Refer your friends to us and earn hotel booking vouchers. We'll
              give you 1 coin for each friend that installs our extension.
              Minimum cash-out at 20 coins.
            </p>
            <div className="ref-link">
              <RefLink />
            </div>
            <p className="main__form-bottom--text">
              Limits on max rewards apply.
            </p>
          </div>
          <div className="steps">
            <div className="steps__card">
              <div className="steps__card-icon">
                <img src={envelope} alt="envelope" />
              </div>
              <div className="steps__card-textbox">
                <p className="steps__card-tier">Step 1</p>
                <h3 className="steps__card-heading">Invite friends</h3>
                <p className="steps__card-description">
                  Refer friends with your unique referral link.
                </p>
              </div>
            </div>
            <div className="steps__card reverse">
              <div className="steps__card-icon">
                <img src={hand} alt="hand with coin" />
              </div>
              <div className="steps__card-textbox">
                <p className="steps__card-tier">Step 2</p>
                <h3 className="steps__card-heading">Collect coins</h3>
                <p className="steps__card-description">
                  Get 1 coin for each friend that installs our extension using
                  your referral link.
                </p>
              </div>
            </div>
            <div className="steps__card">
              <div className="steps__card-icon">
                <img src={voucher} alt="voucher" />
              </div>
              <div className="steps__card-textbox">
                <p className="steps__card-tier">Step 3</p>
                <h3 className="steps__card-heading">Get voucher</h3>
                <p className="steps__card-description">
                  Redeem for a $20 hotel booking voucher once you collect 20
                  coins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Extension />
    </>
  );
};

export default Main;
