import React, { useContext } from "react";
import { useParams, useHistory } from "react-router";

import classes from "../../styles/ProductDetail.module.css";

import productDetailJSON from "../../../product-detail.json";

import { MediaQueryContext } from "../../contexts/MediaQueryContext";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import Counter from "../ui/Counter";
import Button from "../ui/Button";
import MyLink from "../ui/MyLink";
import CategoryLink from "../ui/CategoryLink";
import Ad from "../ui/Ad";

function ProductDetail() {
  let { screenSize } = useContext(MediaQueryContext);
  let { dispatch } = useContext(ShoppingCartContext);
  let { id } = useParams();
  let history = useHistory();

  const [productObj, setProductObj] = React.useState({});
  const [produnctCount, setProductCount] = React.useState(1);

  React.useEffect(() => {
    setProductObj(productDetailJSON.find((obj) => obj.id == id));
    setProductCount(1);
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
        <Counter
          count={produnctCount}
          increment={() => setProductCount((count) => ++count)}
          decrement={() =>
            setProductCount((count) => (count > 1 ? --count : 1))
          }
        />
        <Button
          variant="orange"
          text="ADD TO CART"
          onClick={() => {
            dispatch({
              type: "addItem",
              payload: {
                id: productObj.id,
                cartName: productObj.cartName,
                price: productObj.price,
                quantity: produnctCount,
                img: productObj.image.mobile,
              },
            });
            setProductCount(1);
          }}
        />
      </div>
      <div className={classes.features}>
        <p className={classes["feature-title"]}>FEATURES</p>
        <p className={classes["features-body"]}>{productObj.features}</p>
      </div>
      <div className={classes["content"]}>
        <p className={classes["content-title"]}>IN THE BOX</p>
        <div className={classes["content-list"]}>
          {productObj?.includes?.map((obj, i) => (
            <div className={classes["content-item"]} key={i}>
              <span className={classes["content-item-quantity"]}>
                {obj.quantity}x
              </span>
              <span className={classes["content-item-name"]}>{obj.item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.gallery}>
        <img
          src={productObj?.gallery?.first[screenSize]}
          className={classes["gallery-first"]}
        />
        <img
          src={productObj?.gallery?.second[screenSize]}
          className={classes["gallery-second"]}
        />
        <img
          src={productObj?.gallery?.third[screenSize]}
          className={classes["gallery-third"]}
        />
      </div>
      <div className={classes.others}>
        <p className={classes["others-title"]}>YOU MAY ALSO LIKE</p>
        {productObj?.others?.map((obj, i) => (
          <div className={classes["others-item"]} key={i}>
            <img
              src={obj.image[screenSize]}
              className={classes["others-item-img"]}
            />
            <h5>{obj.name}</h5>
            <MyLink to={`/products/${obj.id}`}>
              <Button text="SEE PRODUCT" variant="orange" />
            </MyLink>
          </div>
        ))}
      </div>

      <CategoryLink style={{ marginTop: "120px" }} />
      <Ad style={{ marginTop: "120px", marginBottom: "120px" }} />
    </div>
  );
}

export default ProductDetail;
