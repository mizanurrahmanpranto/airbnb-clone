import "./Header.css";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LanguageIcon from "@material-ui/icons/Language";
import { Link } from "react-router-dom";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import logo1 from "./logo1.png";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img className="header_icon" src={logo1} alt="Logo1" />
      </Link>

      <div className="header_center">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="header_right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <AccountCircleIcon />
      </div>
    </div>
  );
}

export default Header;
