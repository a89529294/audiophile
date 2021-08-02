import React from "react";

import classes from "../../styles/Header.module.css";

import logo from "../../assets/header/logo.svg";
import hamburger from "../../assets/header/icon-hamburger.svg";
import cart from "../../assets/header/icon-cart.svg";

function Header() {
  return (
    <div className={classes.navbar}>
      <img src={hamburger} className={classes.hamburger} />
      <img src={logo} />
      <img src={cart} className={classes.cart} />
    </div>
  );
}

export default Header;
