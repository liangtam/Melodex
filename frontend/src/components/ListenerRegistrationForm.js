import { useState, useEffect } from "react";
import styles from './ListenerRegistrationForm.module.css';

const ListenerRegistrationForm = () => {
    
    return (
        <div className={styles.form}>
            <label>Username: <input type="text" placeholder="Username"></input></label>
            <label>Password: <input type="text" placeholder="Username"></input></label>
        </div>
    )
}

export default ListenerRegistrationForm;