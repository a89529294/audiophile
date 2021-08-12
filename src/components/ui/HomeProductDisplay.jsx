import React from "react";

import classes from "../../styles/HomeProductDisplay.module.css";

import Button from "./Button";
import MyLink from "./MyLink";
import { MediaQueryContext } from "../../contexts/MediaQueryContext";

import zx9Speaker from "../../assets/home/speaker-zx9-mobile.png";
import zx9SpeakerDesktop from "../../assets/home/speaker-zx9-desktop.png";
import circlePattern from "../../assets/home/pattern-circles.svg";
import yx1Earphone from "../../assets/home/earphones-yx1-mobile.jpg";

function HomeProductDisplay() {
  const { screenSize } = React.useContext(MediaQueryContext);
  return (
    <div className={classes["home-page-product-display"]}>
      <div
        className={`${classes["product-display"]} ${classes["product-display-one"]}`}
      >
        <img src={circlePattern} className={classes["circle-pattern"]} />
        <img
          src={screenSize === "desktop" ? zx9SpeakerDesktop : zx9Speaker}
          className={classes["product-display-one-image"]}
        />
        <div className={classes["product-display-one-text-container"]}>
          <h1 className={classes["product-display-one-title"]}>
            ZX9 <br /> SPEAKER
          </h1>
          <div className={classes["product-display-one-desc"]}>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </div>
          <MyLink to="/products/6">
            <Button
              text="SEE PRODUCT"
              variant="black"
              style={{ marginTop: 24 }}
            />
          </MyLink>
        </div>
      </div>
      <div
        className={`${classes["product-display"]} ${classes["product-display-two"]}`}
      >
        <h4 className={classes["product-display-two-title"]}>ZX7 SPEAKER</h4>
        <MyLink to="/products/5">
          <Button variant="white" text="SEE PRODUCT" />
        </MyLink>
      </div>
      <div className={classes["product-display-three"]}>
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
    </div>
  );
}

export default HomeProductDisplay;
