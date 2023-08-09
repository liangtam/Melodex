import { useState, useEffect } from "react";
import styles from "./AlbumTuple.module.css";

const AlbumTuple = () => {
  return (
    <div>
      <div className={styles.tupleContainer}>
        <h3>Album List</h3>
        <div className={styles.titlebox}>
          <div className={styles.titlelist}>
            <div className={styles.titlecontent}>
              <h4>Album Name</h4>
              <h4>Genre</h4>
              <h4>Release Date</h4>
              <h4>Duration</h4>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.list}>
            <div className={styles.content}>
              <p>eg.albumname</p>
              <p>eg.genre</p>
              <p>eg.releasedate</p>
              <p>eg.duration</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumTuple;
