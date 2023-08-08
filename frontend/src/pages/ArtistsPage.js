import { useState, useEffect } from "react";
import styles from "./ArtistsPage.module.css";

import ArtistForm from "../components/Album/ArtistForm";

const ArtistsPage = () => {



    const handleAddArtist = (e) => {
        e.preventDefault();

    }

    return (
        <div className={styles.regContainer}>
            <div className={styles.leftBody}>
                <div className={styles.centered}>
                    <div className={styles.title}>
                        <h4>Artists</h4>
                    </div>
                </div>
            </div>
            <div className={styles.rightBody}>
                <div className={styles.centered}>
                    <div className={styles.addForm}>
                        <ArtistForm/>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}

// DO NOT FORGET THIS LINE! It is very important. If we don't export the page, we can't use it LOL
export default ArtistsPage;