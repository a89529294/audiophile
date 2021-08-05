import React, { useEffect, useRef, useContext, useState } from "react";

import classes from "../../styles/Cart.module.css";

import Button from "../ui/Button";
import Counter from "../ui/Counter";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";

function Cart({ setShowCart }) {
  const ref = useRef();
  const { products, dispatch } = useContext(ShoppingCartContext);
  const [numberOfItems, setNumberOfItems] = useState(
    products.reduce((acc, obj) => acc + obj.quantity, 0)
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  useEffect(() => {
    setNumberOfItems(products.reduce((acc, obj) => acc + obj.quantity, 0));
  }, [products]);

  useOnClickOutside(ref, () => setShowCart(false));

  return (
    <div className={classes.bg}>
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
                style={{ width: "96px", height: "32px" }}
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
          <p className={classes["total-price"]}>${numberOfItems}</p>
        </div>
        <Button
          text="CHECKOUT"
          variant="orange"
          style={{ width: "100%", marginTop: "24px" }}
        />
      </div>
    </div>
  );
}

export default Cart;
