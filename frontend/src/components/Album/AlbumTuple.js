import { useState, useEffect } from "react";
import styles from "./AlbumTuple.module.css";

const AlbumTuple = (props) => {
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
              <h4>Total Duration</h4>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          {props.albums.map((album) => (
            <div className={styles.list} key={album.name}>
              <div className={styles.content}>
                <div className={styles.editbtn}>Edit</div>
                <p>{album.albumName}</p>
                <p>{album.genre}</p>
                <p>{album.releaseDate}</p>
                <p>{album.numOfSongs}</p>
                <p>{album.totalDuration}</p>
                <div className={styles.editbtn}>Delete</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlbumTuple;
