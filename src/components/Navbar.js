import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={styles.nav_container}>
            <div className={styles.website_title}>
                <Link to="/">
                    <h2><strong>Melodex</strong></h2>
                </Link>
             </div>
            <div className={styles.navbar_links}>
                <ul>
                    {/* <li>
                        <Link to="/loginPage">
                        <h4>Log In</h4>
                        </Link>
                    </li> */}
                    
                    {/* <li>
                        <Link to="/SignupPage">
                        <h4>Sign up</h4>
                        </Link>
                    </li> */}
                    <div className={styles.rightLinks}>
                        <li>
                            <Link to="/artists">
                                <h4>Artists</h4>
                            </Link>
                        </li>
                        <li>
                            <Link to="/songs">
                                <h4>Song</h4>
                            </Link>
                        </li>
                        <li>
                            <Link to="/albums">
                                <h4>Album</h4>
                            </Link>
                        </li>
                        <li>
                            <Link to="/labels">
                                <h4>Labels</h4>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <h4>Home</h4>
                            </Link>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
