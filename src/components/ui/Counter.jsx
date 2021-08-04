import React, { useState } from "react";

import classes from "../../styles/Counter.module.css";

function Counter() {
  const [count, setCount] = useState(1);
  return (
    <div className={classes.root}>
      <span onClick={() => setCount((count) => (count === 1 ? 1 : --count))}>
        -
      </span>{" "}
      {count}
      <span onClick={() => setCount((count) => ++count)}>+</span>
    </div>
  );
}

export default Counter;
