import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import classes from "../../styles/Portal.module.css";

const modalRoot = document.getElementById("modal");

//variant === 'cart', 'orderConfirmation', 'mobileMenu'
function Portal({ children, variant }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  return ReactDOM.createPortal(
    <div
      className={`${classes.bg} ${
        variant === "cart" ? classes["bg--cart"] : ""
      } ${
        variant === "orderConfirmation" ? classes["bg--orderConfirmation"] : ""
      } ${variant === "mobileMenu" ? classes["bg--mobileMenu"] : ""}`}
    >
      {children}
    </div>,
    modalRoot
  );
}

export default Portal;
