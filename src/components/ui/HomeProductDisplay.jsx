import React from "react";

import classes from "../../styles/HomeProductDisplay.module.css";

import Button from "./Button";
import MyLink from "./MyLink";

import zx9Speaker from "../../assets/home/speaker-zx9-mobile.png";
import circlePattern from "../../assets/home/pattern-circles.svg";
import yx1Earphone from "../../assets/home/earphones-yx1-mobile.jpg";

function HomeProductDisplay() {
  return (
    <div className={classes["home-page-product-display"]}>
      <div
        className={`${classes["product-display"]} ${classes["product-display-one"]}`}
      >
        <img src={circlePattern} className={classes["circle-pattern"]} />
        <img
          src={zx9Speaker}
          className={classes["product-display-one-image"]}
        />
        <h1 className={classes["product-display-one-title"]}>
          ZX9 <br /> SPEAKER
        </h1>
        <p className={classes["product-display-one-desc"]}>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <MyLink to="/products/6">
          <Button
            text="SEE PRODUCT"
            variant="black"
            style={{ marginTop: 24 }}
          />
        </MyLink>
      </div>
      <div
        className={`${classes["product-display"]} ${classes["product-display-two"]}`}
      >
        <div className={classes["product-display-two-text-box"]}>
          <h4 className={classes["product-display-two-title"]}>ZX7 SPEAKER</h4>
          <MyLink to="/products/5">
            <Button variant="white" text="SEE PRODUCT" />
          </MyLink>
        </div>
      </div>
      <img
        className={`${classes["product-display"]} ${classes["product-display-three-img"]}`}
        src={yx1Earphone}
      />
      <div
        className={`${classes["product-display"]} ${classes["product-display-three-card"]}`}
      >
        <div className={classes["product-display-three-text"]}>
          <h4 className={classes["product-display-three-title"]}>
            YX1 EARPHONES
          </h4>
          <MyLink to="/products/1">
            <Button text="SEE PRODUCT" variant="white" />
          </MyLink>
        </div>
      </div>
    </div>
  );
}

export default HomeProductDisplay;
