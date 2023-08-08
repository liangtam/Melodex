import { useState, useEffect } from "react";
import styles from "./HomePage.module.css";


const HomePage = () => {

    

    const handleDiscographySearch = (e) => {
        e.preventDefault();
    }

    return (
        <div className={styles.regContainer}>
                <div className={styles.centered}>
                    <div className={styles.title}>
                        <h2>Welcome to Melodex</h2>
                    </div>
                    <p>A music website for users to discover a whole world of artists and music, all in one place.</p>
                    <p>Begin searching for your favourite discographies here:</p>
                    <input className={styles.searchBar} type="text"></input>
                    <button onClick={handleDiscographySearch}>Search</button>
                </div>

            
        </div>
        
    )
}

// DO NOT FORGET THIS LINE! It is very important. If we don't export the page, we can't use it LOL
export default HomePage;