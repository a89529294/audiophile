import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router";

import classes from "../../styles/OrderConfirmationModal.module.css";

import checkmark from "../../assets/misc/checkmark.svg";

import Button from "./Button";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import Portal from "./Portal";
import MyLink from "../ui/MyLink";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";

function OrderConfirmationModal({ totalPrice }) {
  const ref = useRef();
  const history = useHistory();
  const { dispatch } = React.useContext(ShoppingCartContext);
  const totalPriceFixed = React.useRef(totalPrice);

  useOnClickOutside(ref, () => history.push("/"));

  useEffect(() => {
    dispatch({ type: "removeAll" });
  }, []);

  return (
    <Portal variant="orderConfirmation">
      <div className={classes["order-confirmation"]} ref={ref}>
        <div className={classes["checkmark-container"]}>
          <img src={checkmark} className={classes["checkmark-img"]} />
        </div>
        <p className={classes.title}>
          THANK YOU <br /> FOR YOUR ORDER
        </p>
        <p className={classes["text-body"]}>
          You will receive an email confirmation shortly.
        </p>
        <div className={classes.total}>
          <div className={classes["total-title"]}>GRAND TOTAL</div>
          <h6 className={classes["total-price"]}>${totalPriceFixed.current}</h6>
        </div>
        <MyLink to="/">
          <Button text="BACK TO HOME" style={{ width: "100%" }} />
        </MyLink>
      </div>
    </Portal>
  );
}

export default OrderConfirmationModal;
