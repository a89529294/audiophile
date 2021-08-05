import React, { useState, useContext } from "react";

import classes from "../../styles/Header.module.css";

import MyLink from "../ui/MyLink";

import logo from "../../assets/home/logo.svg";
import hamburger from "../../assets/header/icon-hamburger.svg";
import cart from "../../assets/header/icon-cart.svg";
import Cart from "./Cart";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";

function Header() {
  const [showCart, setShowCart] = useState(false);
  const { products } = useContext(ShoppingCartContext);

  return (
    <div className={classes.navbar}>
      <img src={hamburger} className={classes.hamburger} />
      <MyLink to="/">
        <img src={logo} />
      </MyLink>
      <div
        className={classes["cart-container"]}
        style={{ "--width": products.length ? "15px" : "0px" }}
        data-content={products.reduce((acc, obj) => acc + obj.quantity, 0)}
      >
        <img
          src={cart}
          className={classes.cart}
          onClick={() => setShowCart((state) => !state)}
        />
      </div>

      {showCart && <Cart setShowCart={setShowCart} />}
    </div>
  );
}

export default Header;
