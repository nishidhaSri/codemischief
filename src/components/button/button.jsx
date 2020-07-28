import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, onClick, style, className, value }) => {
  return (
    <button
      style={style}
      className={`${styles.button} ${className}`}
      onClick={onClick}
      value={value}
    >
      {text}
    </button>
  );
};

export default Button;
