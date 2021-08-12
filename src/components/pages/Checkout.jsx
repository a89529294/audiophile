import React, { useContext } from "react";

import classes from "../../styles/Checkout.module.css";

import BackButton from "../ui/BackButton";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { MediaQueryContext } from "../../contexts/MediaQueryContext";
import Button from "../ui/Button";
import OrderConfirmationModal from "../ui/OrderConfirmationModal";

const InfoBlock = ({ children, title }) => (
  <div className={classes["info-block"]}>
    <p className={classes["sub-title"]}>{title}</p>
    <div className={classes["input-group"]}>{children}</div>
  </div>
);

//variant has one option : 'full-width'
const Input = ({ name, placeholder, type = "text", variant }) => (
  <div className={`${classes.input} ${classes[variant]}`}>
    <label htmlFor={name}>{name}</label>
    <input type={type} id={name} placeholder={placeholder} />
  </div>
);

const PaymentMethodInput = ({ paymentTypes }) => (
  <div className={classes["payment-method-block"]}>
    <p className={classes["payment-method-title"]}>Payment Method</p>
    {paymentTypes.map((type, i) => (
      <div className={classes["payment-radio-container"]} key={i}>
        <input type="radio" name="payment" value={type} id={type} />
        <label htmlFor={type}>{type}</label>
      </div>
    ))}
  </div>
);

//two variants: 'default' 'standout'
const CostRow = ({ name, cost, variant = "default" }) => (
  <div className={`${classes["cost-row"]} ${classes[variant]}`}>
    <div className={classes["cost-row-name"]}>{name}</div>
    <h6 className={classes["cost-row-cost"]}>${cost}</h6>
  </div>
);

function Checkout() {
  const [showOrderConfirmation, setShowOrderConfirmation] =
    React.useState(false);
  const { products, dispatch } = useContext(ShoppingCartContext);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const { screenSize } = useContext(MediaQueryContext);

  React.useEffect(() => {
    setTotalPrice(
      products.reduce((acc, val) => acc + val.quantity * val.price, 0)
    );
  }, [products]);

  return (
    <div className={classes.root}>
      <BackButton
        style={{
          left:
            screenSize === "desktop"
              ? "16.5rem"
              : screenSize === "tablet"
              ? "4rem"
              : "2.4rem",
          top:
            screenSize === "desktop"
              ? "8rem"
              : screenSize === "tablet"
              ? "4.8rem"
              : "1.6rem",
          position: "absolute",
        }}
      />
      <div className={classes["info-root"]}>
        <h4>CHECKOUT</h4>
        <InfoBlock title="BILLING DETAILS">
          <Input name="Name" placeholder="John Doe" />
          <Input name="Email Address" placeholder="JohnDoe@mail.com" />
          <Input name="Name" placeholder="1231231234" type="tel" />
        </InfoBlock>
        <InfoBlock title="SHIPPING INFO">
          <Input
            name="Your Address"
            placeholder="1234 Sth Sth Avenue"
            variant="full-width"
          />
          <Input name="ZIP Code" placeholder="10001" type="tel" />
          <Input name="City" placeholder="New York" />
          <Input name="Country" placeholder="United States" />
        </InfoBlock>
        <InfoBlock title="PAYMENT DETAILS" t>
          <PaymentMethodInput paymentTypes={["e-Money", "Cash on Delivery"]} />
          <Input name="e-Money Number" placeholder="238521993" />
          <Input name="e-Money PIN" placeholder="6891" />
        </InfoBlock>
      </div>
      <div className={classes["summary-root"]}>
        <h6>SUMMARY</h6>
        <div className={classes["summary-items"]}>
          {products?.map((product) => (
            <div className={classes["summary-item"]}>
              <img src={product.img} className={classes["item-img"]} />
              <div className={classes["summary-item-desc"]}>
                <div className={classes["summary-item-name-quantity"]}>
                  <p>{product.cartName}</p>
                  <p>x{product.quantity}</p>
                </div>
                <div className={classes["summary-item-price"]}>
                  $ {product.price}
                </div>
              </div>
            </div>
          ))}
          <div className={classes["total-cost-summary"]}>
            <CostRow name="TOTAL" cost={totalPrice} />
            <CostRow name="SHIPPING" cost={50} />
            <CostRow
              name="VAT(INCLUDED)"
              cost={(totalPrice * 0.1).toFixed(0)}
            />
            <CostRow
              name="GRAND TOTAL"
              cost={(totalPrice + 50 + totalPrice * 0.1).toFixed(0)}
              variant="standout"
            />
          </div>
          <Button
            text="CONTINUE & PAY"
            style={{ width: "100%" }}
            onClick={() => setShowOrderConfirmation(true)}
          />
        </div>
      </div>
      {showOrderConfirmation && (
        <OrderConfirmationModal
          totalPrice={(totalPrice + 50 + totalPrice * 0.1).toFixed(0)}
        />
      )}
    </div>
  );
}

export default Checkout;
