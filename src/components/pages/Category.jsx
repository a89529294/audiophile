import React, { useContext } from "react";
import { useMediaQuery } from "react-responsive";

import classes from "../../styles/Category.module.css";

import productDetailJSON from "../../../product-detail.json";
import categoryDetailJSON from "../../../category-detail.json";

import CategoryProduct from "../ui/CategoryProduct.jsx";
import CategoryLink from "../ui/CategoryLink";
import Ad from "../ui/Ad";
import { MediaQueryContext } from "../../contexts/MediaQueryContext";

function Headphones({ categoryName }) {
  const { screenSize } = useContext(MediaQueryContext);

  const [categoryObj, setCategoryObj] = React.useState({});

  React.useEffect(() => {
    setCategoryObj(
      categoryDetailJSON.find((obj) => obj.category === categoryName)
    );
  }, [categoryName]);

  return (
    <>
      <div className={classes["title-container"]}>
        <h4 className={classes.title}>{categoryName}</h4>
      </div>
      <div className={classes.root}>
        {categoryObj?.products?.map((name, index) => {
          const imgStr = categoryObj.images[screenSize][name];
          const productDetail = productDetailJSON.find(
            (obj) => obj.name.toLowerCase() === name.toLowerCase()
          );

          return (
            <CategoryProduct
              key={index}
              name={name}
              imgStr={imgStr}
              desc={productDetail.description}
              newProduct={productDetail.new}
              id={productDetail.id}
            />
          );
        })}
        <CategoryLink />
        <Ad />
      </div>
    </>
  );
}

export default Headphones;
