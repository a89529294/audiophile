import React from "react";

import classes from "../../styles/Hero.module.css";

import Button from "./Button";

function Hero() {
  return (
    <div className={classes["hero-container"]}>
      <div className={classes["hero-text-container"]}>
        <p className={classes["hero-overline"]}>NEW PRODUCT</p>
        <p className={classes["hero-title"]}>XX99 Mark II Headphones</p>
        <p className={classes["hero-body"]}>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button>SEE PRODUCT</Button>
      </div>
    </div>
  );
}

export default Hero;
