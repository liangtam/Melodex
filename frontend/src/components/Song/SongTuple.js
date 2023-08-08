import { useState, useEffect } from "react";
import styles from "./SongTuple.module.css";

const SongTuple = () => {

    return (
        <div>
            <div className={styles.tupleContainer}>
            <h3>Song List</h3>
            <div className={styles.titlebox}>
                <div className={styles.titlelist}>
                    <div className={styles.titlecontent}>
                    <h4>Song Name</h4>
                    <h4>Artist Name</h4>
                    <h4>Genre</h4>
                    <h4>Release Date</h4>
                    <h4>Number of Likes</h4>
                    <h4>Duration</h4>
                </div>
                </div>
                </div>
            <div className={styles.box}>
                <div className={styles.list}>
                    <div className={styles.content}>
                        <p>eg.songname</p>
                        <p>eg.artistname</p>
                        <p>eg.genre</p>
                        <p>eg.releasedate</p>
                        <p>eg.numoflikes</p>
                        <p>eg.duration</p>
                    </div>
                </div>
            </div>

            </div>
        </div>
    )
}

export default SongTuple;
