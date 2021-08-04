import React from "react";
import { Link } from "react-router-dom";

function MyLink({ to, children, style }) {
  return (
    <Link
      to={to}
      style={{
        ...style,
        textDecoration: "none",
        display: "block",
      }}
    >
      {children}
    </Link>
  );
}

export default MyLink;
