import React from "react";

import logo from "../../assets/home/logo.svg";
import facebook from "../../assets/home/icon-facebook.svg";
import instagram from "../../assets/home/icon-instagram.svg";
import twitter from "../../assets/home/icon-twitter.svg";

import classes from "../../styles/Footer.module.css";

import MyLink from "../ui/MyLink";

function Footer() {
  return (
    <div className={classes.root}>
      <img src={logo} />
      <div className={classes.tabs}>
        <MyLink to="/" className={classes.tab}>
          HOME
        </MyLink>
        <MyLink to="/headphones" className={classes.tab}>
          HEADPHONES
        </MyLink>
        <MyLink to="/speakers" className={classes.tab}>
          SPEAKERS
        </MyLink>
        <MyLink to="/earphones" className={classes.tab}>
          EARPHONES
        </MyLink>
      </div>
      <div className={classes.body}>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </div>
      <div className={classes["copy-right-social-media"]}>
        <div className={classes.body}>Copyright 2021. All Rights Reserved</div>
        <div className={classes["social-media"]}>
          <img src={facebook} />
          <img src={twitter} />
          <img src={instagram} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
