import React, { useContext } from "react";
import { useParams, useHistory } from "react-router";

import classes from "../../styles/ProductDetail.module.css";

import productDetailJSON from "../../../product-detail.json";

import { MediaQueryContext } from "../../contexts/MediaQueryContext";
import Counter from "../ui/Counter";
import Button from "../ui/Button";

function ProductDetail() {
  let { screenSize } = useContext(MediaQueryContext);
  let { id } = useParams();
  let history = useHistory();

  const [productObj, setProductObj] = React.useState({});

  React.useEffect(() => {
    setProductObj(productDetailJSON.find((obj) => obj.id == id));
  }, [id]);

  return (
    <div className={classes.root}>
      <div className={classes.back} onClick={() => history.goBack()}>
        Go Back
      </div>
      <img
        src={productObj?.image?.[screenSize]}
        className={classes["main-img"]}
      />
      <h4 className={classes.title}>{productObj.name}</h4>
      <p className={classes.description}>{productObj.description}</p>
      <h6 className={classes.price}>${productObj.price}</h6>
      <div className={classes["btns-container"]}>
        <Counter />
        <Button variant="orange" text="ADD TO CART" />
      </div>
    </div>
  );
}

export default ProductDetail;
