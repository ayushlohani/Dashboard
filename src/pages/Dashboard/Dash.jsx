import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import HI from "../../components/Hi/HI";
import Main from "../../components/graphs/Main";
import Strategy from "../../components/strategy/Strategy";
import "./style.scss";
function Dash() {
  return (
    <div className="dash bg-white w-98 m-1 h-95vh rounded-10 font-sans flex">
      <Sidebar />
      <HI />
      <div className="main-graph w-90 flex">
        <Main />
        <Strategy />
      </div>
    </div>
  );
}

export default Dash;
