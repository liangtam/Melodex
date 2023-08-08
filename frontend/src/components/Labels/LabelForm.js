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
          Website URL: <input type="text" placeholder="Website URL"></input>
        </label>
      </div>
    </div>
  );
};

export default LabelForm;
