import styles from "./ArtistTuple.module.css";

const ArtistTuple = () => {
  return (
    <div>
      <div className={styles.tupleContainer}>
        <h3>Artist List</h3>
        <div className={styles.titlebox}>
          <div className={styles.titlelist}>
            <div className={styles.titlecontent}>
              <h4>Artist Name</h4>
              <h4>Age</h4>
              <h4>Country</h4>
              <h4>Bio</h4>
              <h4>Number of Member</h4>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.list}>
            <div className={styles.content}>
              <p>...</p>
              <p>...</p>
              <p>...</p>
              <p>...</p>
              <p>...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistTuple;
