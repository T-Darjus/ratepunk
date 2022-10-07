import "./reflink.scss";
import check from "../../assets/check-symbol.svg";
import React, { useState } from "react";

const RefLink = () => {
  const [confirmation, setConfirmation] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [email, setEmail] = useState("");
  const reflink = "https://ratepunk.com/referral";

  const onSubmit = (e) => {
    e.preventDefault();
  };
  const onClick = () => {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setConfirmation(true);
      setEmailError("");
    }
    setEmailError("Please enter an email address!");
  };

  if (!confirmation) {
    return (
      <>
        <p className="email-error">{emailError}</p>
        <form onSubmit={onSubmit}>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
            placeholder="Enter your email address"
          />
          <button type="submit" className="btn btn-submit" onClick={onClick}>
            Get Referral Link
          </button>
        </form>
      </>
    );
  }

  return (
    <div className="confirmation">
      <div className="confirmation__textbox">
        <img src={check} alt="check symbol" />
        <p className="confirmation__text">Your email is confirmed!</p>
      </div>
      <div className="confirmation__referral">
        <input type="text" readOnly value={reflink} />
        <button
          onClick={() => {
            navigator.clipboard.writeText(reflink);
          }}
          className="btn btn-copy"
        >
          Copy
        </button>
      </div>
    </div>
  );
};

export default RefLink;
