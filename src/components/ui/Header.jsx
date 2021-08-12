import React, { useState, useContext } from "react";

import classes from "../../styles/Header.module.css";

import logo from "../../assets/home/logo.svg";
import hamburger from "../../assets/header/icon-hamburger.svg";
import cart from "../../assets/header/icon-cart.svg";

import Cart from "./Cart";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { MediaQueryContext } from "../../contexts/MediaQueryContext";
import MyLink from "../ui/MyLink";
import Portal from "../ui/Portal";
import Menu from "./Menu";

function Header() {
  const [showCart, setShowCart] = useState(false);
  const { products } = useContext(ShoppingCartContext);
  const [showMenu, setShowMenu] = useState(false);
  const { screenSize } = useContext(MediaQueryContext);

  return (
    <>
      <div className={classes.navbar}>
        {screenSize !== "desktop" && (
          <img
            src={hamburger}
            className={classes.hamburger}
            onClick={() => setShowMenu(true)}
          />
        )}

        <MyLink to="/">
          <img src={logo} />
        </MyLink>
        {screenSize === "desktop" && (
          <div className={classes["category-links"]}>
            <MyLink to="/" style={{ color: "white" }}>
              HOME
            </MyLink>
            <MyLink to="/headphones" style={{ color: "white" }}>
              HEADPHONES
            </MyLink>
            <MyLink to="/speakers" style={{ color: "white" }}>
              SPEAKERS
            </MyLink>
            <MyLink to="/earphones" style={{ color: "white" }}>
              EARPHONES
            </MyLink>
          </div>
        )}
        <div
          className={classes["cart-container"]}
          style={{ "--width": products.length ? "1.5rem" : "0rem" }}
          data-content={products.reduce((acc, obj) => acc + obj.quantity, 0)}
        >
          <img
            src={cart}
            className={classes.cart}
            onClick={() => setShowCart((state) => !state)}
          />
        </div>

        {showCart && <Cart setShowCart={setShowCart} />}
        {showMenu && (
          <Portal variant="mobileMenu">
            <Menu setShowMenu={setShowMenu} />
          </Portal>
        )}
      </div>
      <div
        className={classes.navbar}
        style={{ visibility: "hidden", position: "static" }}
      >
        <img src={logo} />
      </div>
    </>
  );
}

export default Header;
