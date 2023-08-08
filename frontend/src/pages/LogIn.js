import { useState, useEffect } from "react";
import styles from "./LogIn.module.css";
import ListenerLogInForm from "../components/ListenerLogInForm";
import ArtistLogInForm from "../components/ArtistLogInForm";

const LogIn = () => {
    const [userLogClicked, setUserLogClicked] = useState(true);
    const [artistLogClicked, setArtistLogClicked] = useState(false);

    const handleUserClick = (e) => {
        e.preventDefault();
        console.log("Clicked user");
        setUserLogClicked(true);
        setArtistLogClicked(false);
    }

    const handleArtistClick = (e) => {
        e.preventDefault();
        console.log("Clicked artist");
        setUserLogClicked(false);
        setArtistLogClicked(true);
    }

    return (
        <div className={styles.logContainer}>
            <div className={styles.leftBody}>
                <div className={styles.centered}>
                    <div className={styles.title}>
                        <h2>Welcome to Music Manager</h2>
                    </div>
                    <p>A music management website for listeners to explore new artists and follow their favourite ones, and for artists to reach new audiences and keep their fans up to date.</p>
                </div>
            </div>
            <div className={styles.rightBody}>
                <div className={styles.centered}>
                    <div className={styles.logButtons}>
                        <button onClick={handleUserClick}>User</button>
                        <button onClick={handleArtistClick}>Artist</button>
                    </div>
                    <div className={styles.logForm}>
                        {userLogClicked && <div><ListenerLogInForm/></div>}
                        {artistLogClicked && <div><ArtistLogInForm/></div>}
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}

// DO NOT FORGET THIS LINE! It is very important. If we don't export the page, we can't use it LOL
export default LogIn;
