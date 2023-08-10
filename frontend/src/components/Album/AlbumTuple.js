import { useState, useEffect } from "react";
import styles from "./AlbumTuple.module.css";

const AlbumTuple = ({ album }) => {


  return (
    <div>
      <div className={styles.tupleContainer}>
        {/*<h3>Album List</h3>*/}
        <div className={styles.titlebox}>
          <div className={styles.titlelist}>
            <div className={styles.titlecontent}>
              <h4>Album Name</h4>
              <h4>Genre</h4>
              <h4>Release Date</h4>
              <h4>Total Duration</h4>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.list}>
            <div className={styles.content}>
              <p>{album && album.discoName}</p>
              <p>{album && album.genre}</p>
              <p>{album && album.releaseDate}</p>
              <p>{album && album.numOfSongs}</p>
              <p>{album && album.totalDuration}</p>
              <div className={styles.btn}>
                <button className={styles.deletebtn}>Delete</button>
                <button className={styles.editbtn}>Edit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumTuple;
