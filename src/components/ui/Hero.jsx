import React from "react";

import classes from "../../styles/Hero.module.css";

import Button from "./Button";

function Hero({ setShowCategories, showCategories }) {
  const initialRender = React.useRef(true);
  React.useEffect(() => {
    !initialRender.current && !showCategories && setShowCategories(true);
    if (initialRender.current) initialRender.current = false;
  }, [showCategories]);

  return (
    <div className={classes["hero-container"]}>
      <div className={classes["hero-text-container"]}>
        <p className={classes["hero-overline"]}>NEW PRODUCT</p>
        <p className={classes["hero-title"]}>XX99 Mark II Headphones</p>
        <p className={classes["hero-body"]}>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button
          text="SEE PRODUCTS"
          variant="orange"
          onClick={() => {
            setShowCategories((showCategories) => !showCategories);
          }}
        />
      </div>
    </div>
  );
}

export default Hero;
