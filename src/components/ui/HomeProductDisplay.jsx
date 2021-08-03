import React from "react";

import classes from "../../styles/HomeProductDisplay.module.css";

import Button from "./Button";

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
        <Button text="SEE PRODUCT" variant="black" style={{ marginTop: 24 }} />
      </div>
      <div
        className={`${classes["product-display"]} ${classes["product-display-two"]}`}
      >
        <div className={classes["product-display-two-text-box"]}>
          <h4 className={classes["product-display-two-title"]}>ZX7 SPEAKER</h4>
          <Button variant="white" text="SEE PRODUCT" />
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
          <Button text="SEE PRODUCT" variant="white" />
        </div>
      </div>
    </div>
  );
}

export default HomeProductDisplay;
