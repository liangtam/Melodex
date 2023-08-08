import { useState, useEffect } from "react";
import styles from "./LogIn.module.css";
import ListenerLogInForm from "../components/ListenerLogInForm";
import ArtistLogInForm from "../components/ArtistLogInForm";

const LogIn = () => {
  const [userRegClicked, setUserRegClicked] = useState(true);
  const [artistRegClicked, setArtistRegClicked] = useState(false);

  const handleUserClick = (e) => {
    e.preventDefault();
    console.log("Clicked user");
    setUserRegClicked(true);
    setArtistRegClicked(false);
  };

  const handleArtistClick = (e) => {
    e.preventDefault();
    console.log("Clicked artist");
    setUserRegClicked(false);
    setArtistRegClicked(true);
  };

  function LogInText() {
    return <div className={styles.logInText}>Log In</div>;
  }

  return (
    <div className={styles.regContainer}>
      <div className={styles.leftBody}>
        <div className={styles.centered}>
          <div className={styles.title}>
            <h2>Welcome to Music Manager</h2>
          </div>
          <p>
            A music management website for listeners to explore new artists and
            follow their favourite ones, and for artists to reach new audiences
            and keep their fans up to date.
          </p>
        </div>
      </div>
      <div className={styles.rightBody}>
        <div className={styles.centered}>
          <LogInText />
          <div className={styles.regButtons}>
            <button className={styles.userbtn} onClick={handleUserClick}>
              User
            </button>
            <button className={styles.artistbtn} onClick={handleArtistClick}>
              Artist
            </button>
          </div>
          <div className={styles.regForm}>
            {userRegClicked && (
              <div>
                <ListenerLogInForm />
              </div>
            )}
            {artistRegClicked && (
              <div>
                <ArtistLogInForm />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// DO NOT FORGET THIS LINE! It is very important. If we don't export the page, we can't use it LOL
export default LogIn;
