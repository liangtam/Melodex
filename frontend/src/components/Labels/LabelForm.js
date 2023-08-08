import { useState, useEffect } from "react";
import styles from "./LabelForm.module.css";

const LabelForm = () => {
  return (
    <div>
      <div className={styles.formContainer}>
        <h3>Add New Label</h3>
        <label>
          Label name: <input type="text" placeholder="Name"></input>
        </label>
        <label>
          Age:{" "}
          <input
            type="text"
            placeholder="Artist age or group age since debut"
          ></input>
        </label>
        <label>
          Country: <input type="text" placeholder="Name"></input>
        </label>
        <label>
          Biography:{" "}
          <textarea
            type="text"
            placeholder="This artist is a cool singer"
          ></textarea>
        </label>
        <label>
          Number of members:{" "}
          <input type="text" placeholder="1 for solo artists"></input>
        </label>
      </div>
    </div>
  );
};

export default LabelForm;
