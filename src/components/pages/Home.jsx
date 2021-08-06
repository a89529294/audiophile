import React, { useState } from "react";

import classes from "../../styles/Home.module.css";

import Hero from "../ui/Hero";
import Ad from "../ui/Ad";

import HomeProductDisplay from "../ui/HomeProductDisplay";
import CategoryLink from "../ui/CategoryLink";

function Home() {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <div>
      <Hero
        setShowCategories={setShowCategories}
        showCategories={showCategories}
      />
      <div className={classes.layout}>
        <CategoryLink showCategories={showCategories} />
        <HomeProductDisplay />
        <Ad />
      </div>
    </div>
  );
}

export default Home;
