import { useState, useEffect } from "react";
import styles from "./SongForm.module.css";

const SongForm = () => {

    return (
        <div>
            <div className={styles.formContainer}>
            <h3>Add New Song</h3>
            <label>Song Name: <input type="text" placeholder="Name"></input></label>
            <label>Artist Name: <input type="text" placeholder="Name(s)"></input></label>
            <label>Genre: <input type="text" placeholder="Genre"></input></label>
            <label>Release Date: <input type="text" placeholder="eg. 2000-00-00(?)"></input></label>
            <label>Number of Likes: <input type="text" placeholder="1 or more"></input></label>
            <label>Duration: <input type="text" placeholder="The length of song"></input></label>
            </div>
        </div>
    )
}

export default SongForm;
