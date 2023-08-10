import { useState, useEffect } from "react";
import styles from "./SongTuple.module.css";

const SongTuple = ({ song }) => {
  return (
    <div>
      <div className={styles.tupleContainer}>
        {/*<h3>Song List</h3>*/}
        <div className={styles.titlebox}>
          <div className={styles.titlelist}>
            <div className={styles.titlecontent}>
              <h4>Song Name</h4>
              <h4>Genre</h4>
              <h4>Release Date</h4>
              <h4>Duration</h4>
            </div>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.list}>
            <div className={styles.content}>
              <p>{song && song.discoName}</p>
              <p>{song && song.genre}</p>
              <p>{song && song.releaseDate}</p>
              <p>{song && song.duration}</p>
              <div className={styles.btn}>
                <button className={styles.editbtn}>Edit</button>
                <button className={styles.deleteBtn}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongTuple;
