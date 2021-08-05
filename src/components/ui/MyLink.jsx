import React from "react";
import { Link } from "react-router-dom";

function MyLink({ to, children, style, className }) {
  return (
    <Link
      to={to}
      style={{
        ...style,
        textDecoration: "none",
        display: "block",
      }}
      className={className}
    >
      {children}
    </Link>
  );
}

export default MyLink;
