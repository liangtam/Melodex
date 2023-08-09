import { useState, useEffect } from "react";
import styles from "./LabelForm.module.css";

const LabelForm = (props) => {
  const [label, setLabel] = useState({
    labelName: "",
    websiteURL: "",
  });

  const [labels, setLabels] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLabel((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    props.addLabel(label);
    resetForm();
  };

  const resetForm = () => {
    setLabel({
      labelName: "",
      websiteURL: "",
    });
  };

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
        <div className={styles.btn}>Add</div>
      </div>
    </div>
  );
};

export default LabelForm;
