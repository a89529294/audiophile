import React from "react";

import logo from "../../assets/home/logo.svg";
import facebook from "../../assets/home/icon-facebook.svg";
import instagram from "../../assets/home/icon-instagram.svg";
import twitter from "../../assets/home/icon-twitter.svg";

import classes from "../../styles/Footer.module.css";

function Footer() {
  return (
    <div className={classes.root}>
      <img src={logo} />
      <div className={classes.tabs}>
        <div className={classes.tab}>HOME</div>
        <div className={classes.tab}>HEADPHONES</div>
        <div className={classes.tab}>SPEAKERS</div>
        <div className={classes.tab}>EARPHONES</div>
      </div>
      <div className={classes.body}>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </div>
      <div className={classes.body}>Copyright 2021. All Rights Reserved</div>
      <div className={classes["social-media"]}>
        <img src={facebook} />
        <img src={twitter} />
        <img src={instagram} />
      </div>
    </div>
  );
}

export default Footer;
