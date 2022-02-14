import React from "react";

import classes from "../../styles/CategoryProduct.module.css";

import Button from "../ui/Button";
import MyLink from "./MyLink";
import { MediaQueryContext } from "../../contexts/MediaQueryContext";

function CategoryProduct({
  name = "",
  desc = "",
  imgStr = "",
  id,
  newProduct = false,
}) {
  const { screenSize } = React.useContext(MediaQueryContext);
  const imgUrl = new URL(imgStr, import.meta.url).href;
  return (
    <div className={classes.root}>
      <img src={imgUrl} className={classes.img} />
      <div className={classes["description-card"]}>
        {newProduct && <p className={classes.overline}>NEW PRODUCT</p>}
        {screenSize !== "mobile" ? (
          <h2 className={classes.title} style={{ maxWidth: "35rem" }}>
            {name}
          </h2>
        ) : (
          <h4 className={classes.title}>{name}</h4>
        )}
        <p className={classes.body}>{desc}</p>
        <MyLink
          to={`products/${id}`}
          style={{
            marginLeft: screenSize === "desktop" ? "unset" : "auto",
            marginRight: screenSize === "desktop" ? "unset" : "auto",
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
