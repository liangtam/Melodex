import { useState, useEffect } from "react";
import styles from "./Registration.module.css";
import ListenerRegistrationForm from "../components/ListenerRegistrationForm";
import ArtistRegistrationForm from "../components/ArtistRegistrationForm";

const Registration = () => {
    const [userRegClicked, setUserRegClicked] = useState(true);
    const [artistRegClicked, setArtistRegClicked] = useState(false);

    const handleRegClick = (e) => {
        e.preventDefault();
        setUserRegClicked(!userRegClicked);
        setArtistRegClicked(!artistRegClicked);
    }

    return (
        <div className={styles.regContainer}>
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
                    <div className={styles.regButtons}>
                        <button onClick={handleRegClick}>User</button>
                        <button onClick={handleRegClick}>Artist</button>
                    </div>
                    <div className={styles.regForm}>
                        {userRegClicked && <div><ListenerRegistrationForm/></div>}
                        {artistRegClicked && <div><ArtistRegistrationForm/></div>}
                    </div>
                    <div className={styles.registerButton}>
                        <button>Register</button>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}

// DO NOT FORGET THIS LINE! It is very important. If we don't export the page, we can't use it LOL
export default Registration;