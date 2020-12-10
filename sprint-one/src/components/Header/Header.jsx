import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header class="header">
      <div class="header__logo-container">
        <img class="header__logo" src="./src/assets/logos/Logo-brainflix.svg" />
      </div>
      <div class="header__search-container">
        <input class="header__search" type="text" placeholder="Search" />
      </div>
      <div class="header__user">
        <button class="header__user-button">+ UPLOAD</button>
        <img class="header__user-picture" src="./src/assets/images/Mohan-muruge.jpg" />
      </div>
    </header>
  );
};

export default Header;
