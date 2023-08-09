import { useState, useEffect } from "react";
import styles from "./ArtistRegistrationForm.module.css";

const ArtistRegistrationForm = () => {
  return (
    <div className={styles.form}>
      <label>
        Email: <input type="text" placeholder="Email"></input>
      </label>
      <label>
        Username: <input type="text" placeholder="Username"></input>
      </label>
      <label>
        Password: <input type="text" placeholder="Password"></input>
      </label>
      <label>
        Number of members: <input type="text" placeholder="1"></input>
      </label>
      <button>Register</button>
    </div>
  );
};

export default ArtistRegistrationForm;