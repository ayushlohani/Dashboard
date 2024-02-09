import React from "react";
import "./style.css";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegNewspaper } from "react-icons/fa";
import { FaRegListAlt } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="up">
        <div className="logo-search">
          <div className="log">
            <img className="logo" src="logo.png" />
          </div>
          <li className="search">
            <FaSearch size={19} />
          </li>
        </div>
        <ul className="nav-links">
          <li className="nav-link active">
            <IoHomeOutline size={25} />
          </li>
          <li className="nav-link">
            <FaRegNewspaper size={25} />
          </li>
          <li className="nav-link">
            <FaRegListAlt size={25} />
          </li>
          <li className="nav-link">
            <IoPersonOutline
              size={25}
              style={{ stroke: "rgb(105, 102, 102)" }}
            />
          </li>
        </ul>
      </div>
      <div className="down">
        <ul className="bell-exit">
          <li className="nav-link">
            <FaRegBell size={25} />
          </li>
          <li className="nav-link">
            <RxExit size={25} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
