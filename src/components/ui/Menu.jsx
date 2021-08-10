import React from "react";

import classes from "../../styles/Menu.module.css";

import MyLink from "./MyLink";
import Button from "./Button";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { MediaQueryContext } from "../../contexts/MediaQueryContext";
import CategoryLink from "../ui/CategoryLink";

const Category = ({ title, to, onClick }) => (
  <MyLink to={to} onClick={onClick}>
    <div className={classes.category}>
      {title}
      <Button text="SHOP" variant="outline-less" />
    </div>
  </MyLink>
);

function Menu({ setShowMenu }) {
  const ref = React.useRef();
  const { screenSize } = React.useContext(MediaQueryContext);
  useOnClickOutside(ref, () => setShowMenu(false));

  return (
    <div className={classes.root} ref={ref}>
      {screenSize !== "mobile" ? (
        <CategoryLink setShowMenu={setShowMenu} />
      ) : (
        <>
          <Category
            title="HEADPHONES"
            to="/headphones"
            onClick={() => setShowMenu(false)}
          />
          <Category
            title="SPEAKERS"
            to="/speakers"
            onClick={() => setShowMenu(false)}
          />
          <Category
            title="EARPHONES"
            to="/earphones"
            onClick={() => setShowMenu(false)}
          />
        </>
      )}
    </div>
  );
}

export default Menu;
