import React from "react";
import "./style.css";
import { FaCaretDown } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
const HI = () => {
  const name = "Mike";
  const account_balance = "19,892";
  const year_contri = "4,000";
  const interest = "1,892";
  const trans = [
    ["2020-8-07", "XXX11"],
    ["2020-8-07", "XXX11"],
    ["2020-8-07", "XXX11"],
  ];
  return (
    <div className="hi">
      <div className="profile">
        <div className="pro-img">
          <img className="poimg" src="propic.png" />
        </div>
        <div className="name">
          <h1 className="d-font">Hi {name},</h1>
          <p className="l-font">welcome back</p>
        </div>
      </div>
      <div className="mob-bell">
        <FaRegBell size={20} />
        <sup className="not"></sup>
      </div>
      <div className="today">
        <div className="to-cont">
          <h3 className="d-font">Today</h3>
          <div className="accbal">
            <span className="d-font" style={{ fontSize: "20px" }}>
              ${account_balance}
            </span>
            <span className="l-font">Account Balance</span>
          </div>
        </div>
        <div className="int-contri">
          <div className="contri-int">
            <span className="d-font">${year_contri}</span>
            <span className="l-font">Year-to-Date Contribution</span>
          </div>
          <div className="contri-int">
            <span className="d-font">${interest}</span>
            <span className="l-font">Total Interest</span>
          </div>
        </div>
        <button className="iwant">
          I want to <FaCaretDown />
        </button>
      </div>
      <div className="recent">
        <h3 className="trans-head d-font">Recent Transactions</h3>
        <div className="trans">
          {trans.map((item) => (
            <div className="trans-info">
              <div className="trans-date l-font">{item[0]}</div>
              <div className="trans-bank d-font">
                Withdrawal Transfer to Bank-{item[1]}
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HI;
