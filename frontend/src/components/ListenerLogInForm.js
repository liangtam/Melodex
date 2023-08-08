import { useState, useEffect } from "react";
import styles from "./ListenerLogInForm.module.css";

const ListenerLogInForm = () => {
  return (
    <div className={styles.form}>
      <label>
        Email: <input type="text" placeholder="Email"></input>
      </label>
      <label>
        Password: <input type="text" placeholder="Password"></input>
      </label>
      <button>Log In</button>
    </div>
  );
};

export default ListenerLogInForm;
