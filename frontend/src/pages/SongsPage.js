import { useState, useEffect } from "react";
import styles from "./SongsPage.module.css";

import SongForm from "../components/Song/SongForm";

const SongsPage = () => {

    const handleAddSong = (e) => {
        e.preventDefault();

    }

    return (
        <div className={styles.songContainer}>
            <div className={styles.leftBody}>
                <div className={styles.centered}>
                    <div className={styles.title}>
                        <h4>Song</h4>
                    </div>
                </div>
            </div>
            <div className={styles.rightBody}>
                <div className={styles.centered}>
                    <div className={styles.addForm}>
                        <SongForm/>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}

// DO NOT FORGET THIS LINE! It is very important. If we don't export the page, we can't use it LOL
export default SongsPage;
