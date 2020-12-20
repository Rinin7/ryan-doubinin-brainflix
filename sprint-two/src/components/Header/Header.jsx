import React from "react";
import "./Header.scss";
import Logo from "../../assets/logos/Logo-brainflix.svg";
import Mohan from "../../assets/images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-container">
        <Link to="/">
          <img className="header__logo" src={Logo} />
        </Link>
      </div>
      <div className="header__search-container">
        <input className="header__search" type="text" placeholder="Search" />
      </div>
      <div className="header__user">
        <Link to="/upload">
          <button className="header__user-button">UPLOAD</button>
        </Link>
        <img className="header__user-picture" src={Mohan} alt="side view of a man" />
      </div>
    </header>
  );
};

export default Header;
