import "./reflink.scss";
import check from "../../assets/check-symbol.svg";
import React, { useState } from "react";
import axios from "axios";

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
      axios
        .put(
          "https://api.jsonbin.io/v3/b/634010e90e6a79321e2028e5",
          { email },
          {
            headers: {
              "X-Master-Key":
                "$2b$10$6mk03rTzL2yn7RcmcgDxK.sn0BRufhxY0OvYIZFXH0xneT0rBuTAG",
            },
          }
        )
        .then((res) => console.log(res.data.record.email))
        .catch((err) => console.log(err));
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
          {window.innerWidth > 580 ? "Copy" : "Copy URL"}
        </button>
      </div>
    </div>
  );
};

export default RefLink;
