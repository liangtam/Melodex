import { useState, useEffect } from "react";
import styles from "./LabelPage.module.css";

import LabelForm from "../../components/Labels/LabelForm";
import LabelTuple from "../../components/Labels/LabelTuple";

const LabelPage = () => {
  const [labels, setLabels] = useState([]);

  const addLabel = (label) => {
    setLabels([...labels, label]);
  };

  return (
    <div className={styles.labelContainer}>
      <div className={styles.leftBody}>
        <div className={styles.centered}>
          {/* <div className={styles.title}>
            <LabelTuple labels={labels} />
          </div> */}
          NOT IMPLEMENTED
        </div>
      </div>
      <div className={styles.rightBody}>
        <div className={styles.centered}>
          {/* <div className={styles.addForm}>
            <LabelForm addLabel={addLabel} />
          </div> */}
          NOT IMPLEMENTED
        </div>
      </div>
    </div>
  );
};

// DO NOT FORGET THIS LINE! It is very important. If we don't export the page, we can't use it LOL
export default LabelPage;
