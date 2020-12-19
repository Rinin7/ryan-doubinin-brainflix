import React from "react";
import "./Header.scss";
import Logo from "../../assets/logos/Logo-brainflix.svg";
import Mohan from "../../assets/images/Mohan-muruge.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-container">
        <img className="header__logo" src={Logo} />
      </div>
      <div className="header__search-container">
        <input className="header__search" type="text" placeholder="Search" />
      </div>
      <div className="header__user">
        <button className="header__user-button">UPLOAD</button>
        <img className="header__user-picture" src={Mohan} alt="side view of a man" />
      </div>
    </header>
  );
};

export default Header;
