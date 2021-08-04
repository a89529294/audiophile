import React from "react";

import classes from "../../styles/CategoryLink.module.css";

import CategoryCard from "../ui/CategoryCard";
import MyLink from "../ui/MyLink";

import headphoneLogo from "../../assets/home/category-logo-headphone.svg";
import speakerLogo from "../../assets//home/category-logo-speaker.svg";
import earphoneLogo from "../../assets/home/category-logo-earphone.svg";

function CategoryLink() {
  return (
    <div className={classes.root}>
      <MyLink to="/headphones">
        <CategoryCard title="HEADPHONES" imgSrc={headphoneLogo} />
      </MyLink>
      <MyLink to="/speakers">
        <CategoryCard title="SPEAKERS" imgSrc={speakerLogo} />
      </MyLink>
      <MyLink to="/earphones">
        <CategoryCard title="EARPHONES" imgSrc={earphoneLogo} />
      </MyLink>
    </div>
  );
}

export default CategoryLink;
