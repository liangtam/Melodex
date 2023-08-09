import { useState, useEffect } from "react";
import styles from "./SongTuple.module.css";

const SongTuple = (props) => {
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
                            <h4>Duration</h4>
                        </div>
                    </div>
                </div>

                <div className={styles.box}>
                    {props.songs.map(song => (
                        <div className={styles.list} key={song.name}>
                            <div className={styles.content}>
                                <p>{song.name}</p>
                                <p>{song.artist}</p>
                                <p>{song.genre}</p>
                                <p>{song.releaseDate}</p>
                                <p>{song.duration}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SongTuple;
