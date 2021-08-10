import React from "react";

import classes from "../../styles/Ad.module.css";

import bestGear from "../../assets/home/image-best-gear-mobile.jpg";
import bestGearTablet from "../../assets/home/image-best-gear-tablet.jpg";
import bestGearDesktop from "../../assets/home/image-best-gear-desktop.jpg";

import { MediaQueryContext } from "../../contexts/MediaQueryContext";

function Ad({ style }) {
  const { screenSize } = React.useContext(MediaQueryContext);

  return (
    <div style={style}>
      <img
        src={
          screenSize === "desktop"
            ? bestGearDesktop
            : screenSize === "tablet"
            ? bestGearTablet
            : bestGear
        }
        className={classes["best-gear"]}
      />
      <h4 className={classes.title}>
        Bringing you the <span>best</span> audio gear
      </h4>
      <p className={classes.body}>
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </p>
    </div>
  );
}

export default Ad;
