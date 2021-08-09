import React from "react";
import { useHistory } from "react-router-dom";

import classes from "../../styles/BackButton.module.css";

function BackButton({ style }) {
  const history = useHistory();
  return (
    <div
      className={classes.back}
      onClick={() => history.goBack()}
      style={style}
    >
      Go Back
    </div>
  );
}

export default BackButton;
