import { useState, useEffect } from "react";
import styles from "./ArtistLogInForm.module.css";

const ArtistLogInForm = () => {
  return (
    <div className={styles.form}>
      <label>
        Email: <input type="text" placeholder="Artist Email"></input>
      </label>
      <label>
        Password: <input type="text" placeholder="Password"></input>
      </label>
      <button>Log In</button>
    </div>
  );
};

export default ArtistLogInForm;
