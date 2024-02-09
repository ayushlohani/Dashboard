import React, { useRef } from "react";
import { useState, useEffect } from "react";
import "./style.css";
const Strategy = () => {
  const [contri, setcontri] = useState(50);
  const [age, setage] = useState(50);
  return (
    <div className="Strategy">
      <div className="retire">
        <h3>Retirement Strategy</h3>
        <div className="emp-contri">
          <h4>Employee Contribution</h4>
          <div className="bar">
            <div className="range-slider">
              <input type="range" onChange={(e) => setcontri(e.target.value)} />
            </div>
            <span>{contri}%</span>
          </div>
        </div>
        <div className="emp-contri">
          <h4>Retirement Age</h4>
          <div className="bar">
            <div className="range-slider">
              <input type="range" onChange={(e) => setage(e.target.value)} />
            </div>
            <span>{age}</span>
          </div>
        </div>
        <hr />
        <div className="emp-interest">
          <div className="emp-co">
            <span>Employer Contribution</span>
            <span>8.4%</span>
          </div>
          <div className="emp-co">
            <span>Interest Rate</span>
            <span>5%</span>
          </div>
        </div>
        <button className="update">Update</button>
      </div>
      <div className="learn-more">
        <a href="#" className="text-blue-700">
          View Help Docs {">"}
        </a>
      </div>
      <div className="bot-end">
        <img className="botend" src="./botend.png" />
      </div>
    </div>
  );
};

export default Strategy;
