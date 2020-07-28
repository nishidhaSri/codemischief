import React, { useState } from "react";
import styles from "./Modal.module.css";
import Input from "../input/input";
import Button from "../button/button";

const Modal = ({ onClose }) => {
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });

  const [registerState, setRegisterState] = useState({
    email1: "",
    password1: "",
    name: "",
    confirmPassword: "",
  });

  const { email, password } = loginState;

  const { email1, password1, name, confirmPassword } = registerState;

  const handleChange = (event) => {
    const { value, name } = event.target;

    setLoginState({ ...loginState, [name]: value });
  };

  const handleRegisterChange = (event) => {
    const { value, name } = event.target;

    setRegisterState({ ...registerState, [name]: value });
  };

  const handleLoginSubmit = () => {
    console.log(loginState);
    setLoginState({
      email: "",
      password: "",
    });
    setRegisterState({
      email1: "",
      password1: "",
      name: "",
      confirmPassword: "",
    });
  };

  const handleRegisterSubmit = () => {
    console.log(registerState);
    setRegisterState({
      email1: "",
      password1: "",
      name: "",
      confirmPassword: "",
    });
    setLoginState({
      email: "",
      password: "",
    });
  };

  return (
    <div id="myModal" className={styles.modal}>
      <div className={styles.modalcontent}>
        <div className={styles.modalheader}>
          <span onClick={onClose} className={styles.close}>
            &times;
          </span>
          <h3>Log In!</h3>
        </div>
        <div className={styles.modalbody}>
          <Input
            label="Enter Email"
            name="email"
            type="emial"
            value={email}
            handleChange={handleChange}
            required
          />
          <Input
            label="Enter password"
            name="password"
            type="password"
            value={password}
            handleChange={handleChange}
            required
          />
          <div className={styles.buttonContainer}>
            <Button
              className={styles.button}
              text="Log In"
              onClick={handleLoginSubmit}
            />
          </div>
        </div>
      </div>
      <div className={styles.modalcontent}>
        <div className={styles.modalheader}>
          <h3>Not a user? Register!</h3>
        </div>
        <div className={styles.modalbody}>
          <Input
            label="Enter Name"
            name="name"
            type="name"
            value={name}
            handleChange={handleRegisterChange}
            required
          />
          <Input
            label="Enter Email"
            name="email1"
            type="emial"
            value={email1}
            handleChange={handleRegisterChange}
            required
          />
          <Input
            label="Enter password"
            name="password1"
            type="password"
            value={password1}
            handleChange={handleRegisterChange}
            required
          />
          <Input
            label="Confirm password"
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            handleChange={handleRegisterChange}
            required
          />
          <div className={styles.buttonContainer}>
            <Button
              className={styles.button}
              text="Sign Up"
              onClick={handleRegisterSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
