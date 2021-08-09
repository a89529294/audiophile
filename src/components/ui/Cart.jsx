import React, { useEffect, useRef, useContext, useState } from "react";

import classes from "../../styles/Cart.module.css";

import Button from "../ui/Button";
import Counter from "../ui/Counter";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import MyLink from "./MyLink";
import Portal from "../ui/Portal";

function Cart({ setShowCart }) {
  const ref = useRef();
  const { products, dispatch } = useContext(ShoppingCartContext);
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  useEffect(() => {
    setNumberOfItems(products.reduce((acc, obj) => acc + obj.quantity, 0));
    setTotalPrice(
      products.reduce((acc, obj) => acc + obj.quantity * obj.price, 0)
    );
  }, [products]);

  useOnClickOutside(ref, () => setShowCart(false));

  return (
    <Portal variant="cart">
      <div className={classes.cart} ref={ref}>
        <div className={classes.title}>
          <h6>CART ({numberOfItems})</h6>
          <p
            className={classes["remove-btn"]}
            onClick={() => dispatch({ type: "removeAll" })}
          >
            Remove all
          </p>
        </div>
        <div className={classes.body}>
          {products.map((obj) => (
            <div className={classes["cart-item"]} key={obj.id}>
              <img src={obj.img} className={classes["item-img"]} />
              <div className={classes["item-center-column"]}>
                <p className={classes["item-name"]}>{obj.cartName}</p>
                <p className={classes["item-price"]}>
                  ${obj.price * obj.quantity}
                </p>
              </div>
              <Counter
                style={{ width: "9.6rem", height: "3.2rem" }}
                count={obj.quantity}
                increment={() =>
                  dispatch({
                    type: "addItem",
                    payload: {
                      id: obj.id,
                      cartName: obj.cartName,
                      price: obj.price,
                      quantity: 1,
                      img: obj.img,
                    },
                  })
                }
                decrement={() =>
                  dispatch({
                    type: "removeItem",
                    payload: {
                      id: obj.id,
                      cartName: obj.cartName,
                      price: obj.price,
                      quantity: 1,
                      img: obj.img,
                    },
                  })
                }
              />
            </div>
          ))}
        </div>
        <div className={classes.total}>
          <p className={classes["total-tag"]}>TOTAL</p>
          <p className={classes["total-price"]}>${totalPrice}</p>
        </div>
        <MyLink to="/checkout" onClick={() => setShowCart(false)}>
          <Button
            text="CHECKOUT"
            variant="orange"
            style={{ width: "100%", marginTop: "2.4rem" }}
          />
        </MyLink>
      </div>
    </Portal>
  );
}

export default Cart;
