import { useState, useEffect } from "react";
import styles from "./AlbumsPage.module.css";

import AlbumForm from "../components/Album/AlbumForm";
import AlbumTuple from "../components/Album/AlbumTuple";

const AlbumsPage = () => {

    const handleAddAlbum = (e) => {
        e.preventDefault();

    }

    return (
        <div className={styles.albumContainer}>
            <div className={styles.leftBody}>
                <div className={styles.centered}>
                    <div className={styles.title}>
                        <AlbumTuple/>
                    </div>
                </div>
            </div>
            <div className={styles.rightBody}>
                <div className={styles.centered}>
                    <div className={styles.addForm}>
                        <AlbumForm/>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}

// DO NOT FORGET THIS LINE! It is very important. If we don't export the page, we can't use it LOL
export default AlbumsPage;
