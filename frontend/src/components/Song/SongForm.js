import { useState, useEffect } from "react";
import styles from "./SongForm.module.css";

const SongForm = () => {
  return (
    <div>
      <div className={styles.formContainer}>
        <h3>Song</h3>
        <label>
          Song Name: <input type="text" placeholder="Name"></input>
        </label>
        <label>
          Genre: <input type="text" placeholder="Genre"></input>
        </label>
        <label>
          Release Date:{" "}
          <input type="text" placeholder="eg. 2000-00-00(?)"></input>
        </label>
        <label>
          Duration: <input type="text" placeholder="The length of song"></input>
        </label>
        <label>
          <div className={styles.btn}>Add</div>
        </label>
        <label>
          <div className={styles.btn}>Delete</div>
        </label>
        <label>
          <div className={styles.btn}>Update</div>
        </label>
      </div>
    </div>
  );
};

export default SongForm;
