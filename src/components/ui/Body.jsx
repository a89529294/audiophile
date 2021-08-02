import React from "react";

import classes from "../../styles/Body.module.css";

function Body({ children }) {
  return <div className={classes.root}>{children}</div>;
}

export default Body;
