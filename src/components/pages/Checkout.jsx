import React from "react";
import { useHistory } from "react-router";

import classes from "../../styles/Checkout.module.css";

const InfoBlock = ({ children, title }) => (
  <div className={classes["info-block"]}>
    <p className={classes["sub-title"]}>{title}</p>
    <div className={classes["input-group"]}>{children}</div>
  </div>
);

const Input = ({ name, placeholder, type = "text" }) => (
  <div className={classes.input}>
    <label for="full-name">{name}</label>
    <input type={type} id="full-name" placeholder={placeholder} />
  </div>
);

function Checkout() {
  const history = useHistory();
  return (
    <div className={classes.root}>
      <div className={classes.back} onClick={() => history.goBack()}>
        Go Back
      </div>
      <h4 className={classes.title}>CHECKOUT</h4>
      <InfoBlock title="BILLING DETAILS">
        <Input name="Name" placeholder="John Doe" />
        <Input name="Email Address" placeholder="JohnDoe@mail.com" />
        <Input name="Name" placeholder="1231231234" type="tel" />
      </InfoBlock>
      <InfoBlock title="SHIPPING INFO">
        <Input name="Your Address" placeholder="1234 Sth Sth Avenue" />
        <Input name="ZIP Code" placeholder="10001" type="tel" />
        <Input name="City" placeholder="New York" />
        <Input name="Country" placeholder="United States" />
      </InfoBlock>
    </div>
  );
}

export default Checkout;
