import React from "react";

import classes from "../../styles/Header.module.css";

import MyLink from "../ui/MyLink";

import logo from "../../assets/home/logo.svg";
import hamburger from "../../assets/header/icon-hamburger.svg";
import cart from "../../assets/header/icon-cart.svg";

function Header() {
  return (
    <div className={classes.navbar}>
      <img src={hamburger} className={classes.hamburger} />
      <MyLink to="/">
        <img src={logo} />
      </MyLink>

      <img src={cart} className={classes.cart} />
    </div>
  );
}

export default Header;
