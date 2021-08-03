import React from "react";

import Button from "./Button";

import classes from "../../styles/CategoryCard.module.css";

function CategoryCard({ imgSrc, title }) {
  return (
    <div className={classes.card}>
      <img src={imgSrc} alt="img" className={classes["card-img"]} />
      <div className={classes["card-img-blur"]}></div>
      <p className={classes["card-title"]}>{title}</p>
      <Button text="SHOP" variant="outline-less" />
    </div>
  );
}

export default CategoryCard;
