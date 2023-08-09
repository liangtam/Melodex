import styles from "./LabelTuple.module.css";

const LabelTuple = (props) => {
  return (
    <div>
      <div className={styles.tupleContainer}>
        <h3>Label List</h3>
        <div className={styles.titlebox}>
          <div className={styles.titlelist}>
            <div className={styles.titlecontent}>
              <h4>Label Name</h4>
              <h4>Website URL</h4>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          {props.labels.map((label) => (
            <div className={styles.list} key={label.name}>
              <div className={styles.content}>
                <div className={styles.editbtn}>Edit</div>
                <p>{label.labelName}</p>
                <p>{label.websiteURL}</p>
                <div className={styles.editbtn}>Delete</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LabelTuple;
