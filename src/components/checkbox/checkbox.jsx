import React from "react";
import styles from "./Checkbox.module.css";

const Checkbox = ({ id, name, value, label }) => {
  return (
    <label className={styles.container} htmlFor={name}>
      {label}
      <input type="checkbox" id={id} name={name} value={value} />
    </label>
  );
};

export default Checkbox;
