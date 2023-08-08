import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={styles.nav_container}>
            <div className={styles.navbar_links}>
                <ul>
                        <div className={styles.website_title}>
                            <Link to="/">
                                <h2><strong>Music Manager</strong></h2>
                            </Link>
                        </div>

                    <li>
                        <Link to="/artists">
                            <h4>Artists</h4>
                        </Link>
                    </li>
                    <li>
                        <Link to="/discography">
                            <h4>Music</h4>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;