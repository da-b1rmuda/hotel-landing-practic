import React from "react";
import "./style.scss";

export function Button({ padding = "13px 20px", children, onClick }) {
  const buttonStyle = {
    padding: padding,
  };
  return (
    <button
      className="Button-style-default"
      onClick={onClick}
      style={buttonStyle}
    >
      {children}
    </button>
  );
}
