import React from "react";

import styles from "./Input.module.css";

const Input = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className={styles.group}>
      <input
        className={styles.formInput}
        onChange={handleChange}
        {...otherProps}
      />
      {label ? (
        <label
          className={`${otherProps.value.length ? styles.shrink : ""} ${
            styles.formInputLabel
          }`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default Input;
