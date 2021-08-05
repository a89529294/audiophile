import React, { useEffect, ReactDOM } from "react";

const modalRoot = document.getElementById("modal");

function Modal({ children }) {
  return ReactDOM.createPortal(children, modalRoot);
}

export default Modal;
