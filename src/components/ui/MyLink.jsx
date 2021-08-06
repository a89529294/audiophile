import React from "react";
import { Link } from "react-router-dom";

function MyLink({ to, children, style, className, onClick = () => {} }) {
  return (
    <Link
      to={to}
      style={{
        ...style,
        textDecoration: "none",
        display: "block",
      }}
      className={className}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

export default MyLink;
