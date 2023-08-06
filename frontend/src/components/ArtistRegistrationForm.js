import { useState, useEffect } from "react";
import styles from './ArtistRegistrationForm.module.css';

const ArtistRegistrationForm = () => {
    
    return (
        <div className={styles.form}>
            <label>Name: <input type="text" placeholder="Name"></input></label>
            <label>Password: <input type="text" placeholder="Username"></input></label>
            <label>Number of members: <input type="text" placeholder="1"></input></label>
        </div>
    )
}

export default ArtistRegistrationForm;