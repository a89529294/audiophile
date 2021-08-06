import React, { useRef, useEffect } from "react";

import classes from "../../styles/CategoryLink.module.css";

import CategoryCard from "../ui/CategoryCard";
import MyLink from "../ui/MyLink";

import headphoneLogo from "../../assets/home/category-logo-headphone.svg";
import speakerLogo from "../../assets//home/category-logo-speaker.svg";
import earphoneLogo from "../../assets/home/category-logo-earphone.svg";

function CategoryLink({ style, showCategories }) {
  const ref = useRef();

  useEffect(() => {
    showCategories &&
      ref.current.scrollIntoView({
        behavior: "smooth",
      });
  }, [showCategories]);

  return (
    <div className={classes.root} style={style} ref={ref}>
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
