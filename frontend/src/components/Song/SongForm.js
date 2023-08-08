import { useState, useEffect } from "react";
import styles from "./SongForm.module.css";

const SongForm = () => {

    return (
        <div>
            <div className={styles.formContainer}>
            <h3>Add New Song</h3>
            <label>Song Name: <input type="text" placeholder="Name"></input></label>
            <label>Duration: <input type="text" placeholder="The length of song"></input></label>
            </div>
        </div>
    )
}

export default SongForm;
