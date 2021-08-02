import React from "react";

import classes from "../../styles/Button.module.css";

function Button({ children }) {
  return <div className={classes.default}>{children}</div>;
}

export default Button;
