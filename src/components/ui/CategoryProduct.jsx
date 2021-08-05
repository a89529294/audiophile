import React from "react";

import classes from "../../styles/CategoryProduct.module.css";

import Button from "../ui/Button";
import MyLink from "./MyLink";

function CategoryProduct({
  name = "",
  desc = "",
  imgStr = "",
  id,
  newProduct = false,
}) {
  return (
    <div>
      <img src={imgStr} className={classes.img} />
      <div className={classes["description-card"]}>
        {newProduct && <p className={classes.overline}>NEW PRODUCT</p>}
        <h4 className={classes.title}>{name}</h4>
        <p className={classes.body}>{desc}</p>
        <MyLink
          to={`products/${id}`}
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            width: "fit-content",
          }}
        >
          <Button variant="orange" text="SEE PRODUCT" />
        </MyLink>
      </div>
    </div>
  );
}

export default CategoryProduct;
