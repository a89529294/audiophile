import React from "react";

import rightArrow from "../../assets/home/icon-arrow-right.svg";

import classes from "../../styles/Button.module.css";

//4 variants 'orange' 'black' 'white' 'outline-less'
function Button({ text, variant = "orange", style = {}, onClick = () => {} }) {
  return (
    <div className={classes[`btn-${variant}`]} style={style} onClick={onClick}>
      <p className={classes.text}>{text}</p>
      {variant === "outline-less" ? <img src={rightArrow} /> : undefined}
    </div>
  );
}

export default Button;
