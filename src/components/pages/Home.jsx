import React from "react";

import classes from "../../styles/Home.module.css";

import Hero from "../ui/Hero";
import Ad from "../ui/Ad";

import HomeProductDisplay from "../ui/HomeProductDisplay";
import CategoryLink from "../ui/CategoryLink";

function Home() {
  return (
    <div>
      <Hero />
      <div className={classes.layout}>
        <CategoryLink />
        <HomeProductDisplay />
        <Ad />
      </div>
    </div>
  );
}

export default Home;
