import { useState, useEffect } from "react";
import styles from "./AlbumForm.module.css";

const AlbumForm = () => {

    return (
        <div>
            <div className={styles.formContainer}>
            <h3>Add New Album</h3>
            <label>Album Name: <input type="text" placeholder="Album name"></input></label>
            <label>Artist Name: <input type="text" placeholder="Name(s)"></input></label>
            <label>Number of Songs: <input type="text" placeholder="1 or more"></input></label>
            <label>Duration: <input type="text" placeholder="The length of album"></input></label>
            </div>
        </div>
    )
}

export default AlbumForm;
