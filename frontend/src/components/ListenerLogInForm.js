import { useState, useEffect } from "react";
import styles from "./ListenerLogInForm.module.css";

const ListenerLogInForm = () => {

    return (
        <div className={styles.form}>
        <label>Username: <input type="text" placeholder="Name"></input></label>
        <label>Password: <input type="text" placeholder="Username"></input></label>
        <button>Log In</button>
    </div>
    )
}

export default ListenerLogInForm;
