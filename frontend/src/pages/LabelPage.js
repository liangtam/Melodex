import { useState, useEffect } from "react";
import styles from "./LabelPage.module.css";

import LabelForm from "../components/Labels/LabelForm";

const LabelPage = () => {
  const handleAddLabel = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.labelContainer}>
      <div className={styles.leftBody}>
        <div className={styles.centered}>
          <div className={styles.title}>
            <h4>Label</h4>
          </div>
        </div>
      </div>
      <div className={styles.rightBody}>
        <div className={styles.centered}>
          <div className={styles.addForm}>
            <LabelForm />
          </div>
        </div>
      </div>
    </div>
  );
};

// DO NOT FORGET THIS LINE! It is very important. If we don't export the page, we can't use it LOL
export default LabelPage;
