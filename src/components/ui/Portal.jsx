import React from "react";
import ReactDOM from "react-dom";

import classes from "../../styles/Portal.module.css";

const modalRoot = document.getElementById("modal");

//variant === 'cart' or 'orderConfirmation'
function Portal({ children, variant }) {
  return ReactDOM.createPortal(
    <div
      className={`${classes.bg} ${
        variant === "cart" ? classes["bg--cart"] : ""
      } ${
        variant === "orderConfirmation" ? classes["bg--orderConfirmation"] : ""
      }`}
    >
      {children}
    </div>,
    modalRoot
  );
}

export default Portal;
