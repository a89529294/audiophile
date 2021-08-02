import React from "react";

import classes from "../../styles/CategoryCard.module.css";

function CategoryCard({ imgSrc, title }) {
  return (
    <div>
      <img src={imgSrc} alt="logo" />
      {title}
    </div>
  );
}

export default CategoryCard;
