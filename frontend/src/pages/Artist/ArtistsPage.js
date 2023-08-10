import { useState, useEffect } from "react";
import styles from "./ArtistsPage.module.css";

import ArtistForm from "../../components/Artists/ArtistForm";
import { Link } from "react-router-dom";

const ArtistsPage = () => {

  // const handleAddArtist = (e) => {
  //   e.preventDefault();
  // };

  const handleNestedAggro = (e) => {
    
  }

  return (
    <div className={styles.regContainer}>
      <div className={styles.leftBody}>
        <div className={styles.centered}>
          <div className={styles.title}>
            <h4>All the artists you like, right in our app.</h4>
            <Link to="/display-artists">
              <button>Display All Artists</button>
            </Link>
            <button>*Aggregation with Group By prompt*</button>
            <button>*Aggregation with Having prompt*</button>
            <button>*Nested Aggregation with Group By prompt*</button>
            <button>Genre God (Division)</button>
          </div>
        </div>
      </div>
      <div className={styles.rightBody}>
        <div className={styles.centered}>
          <div className={styles.addForm}>
            <p>Didn't see the artist of your choice?</p>
            <p>Add them yourself!</p>
            <ArtistForm />
          </div>
        </div>
      </div>
    </div>
  );
};

// DO NOT FORGET THIS LINE! It is very important. If we don't export the page, we can't use it LOL
export default ArtistsPage;
