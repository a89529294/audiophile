import React, { useState } from "react";

import classes from "../../styles/Counter.module.css";

function Counter({ style, count, increment, decrement }) {
  return (
    <div className={classes.root} style={style}>
      <span onClick={decrement}>-</span>
      {count}
      <span onClick={increment}>+</span>
    </div>
  );
}

export default Counter;
