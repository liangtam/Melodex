import { useState, useEffect } from "react";
import styles from "./ArtistsPage.module.css";

import ArtistForm from "../../components/Artists/ArtistForm";
import { Link } from "react-router-dom";

const ArtistsPage = () => {

  // const handleAddArtist = (e) => {
  //   e.preventDefault();
  // };

  const [aggGroupClicked, setAggGroupClicked] =useState(false);
  const [aggHavingClicked, setAggHavingClicked] =useState(false);
  const [nestedAggClicked, setNestedAggClicked] =useState(false);
  const [divisionClicked, setDivisionClicked] =useState(false);

  const [aggGroup, setAggGroup] =useState('');
  const [aggHaving, setAggHaving] =useState('');
  const [nestedAgg, setNestedAgg] =useState('');
  const [divisionObj, setDivisionObj] =useState('');


  const aggGroupFetch = async (e) => {
    const response = await fetch('http://localhost:8080/api/artists/aggregationgroupby', {
      method: 'GET'
    }).catch((err) => {
      console.log(err);
    })

    if (response.ok) {
      const json = await response.json();
      setAggGroup(json);
      console.log("Fetched aggrogroup! ", json)
    } else {
      console.log("error");
    }
  }

  const aggHavingFetch = async (e) => {
    const response = await fetch('http://localhost:8080/api/artists/aggregationhaving', {
      method: 'GET'
    }).catch((err) => {
      console.log(err);
    })

    if (response.ok) {
      const json = await response.json();
      setAggGroup(json);
      console.log("Fetched aggHaving! ", json)
    } else {
      console.log("error");
    }
  }

  const divisionFetch = async (e) => {
    const response = await fetch('http://localhost:8080/api/artists/division', {
      method: 'GET'
    }).catch((err) => {
      console.log(err);
    })

    if (response.ok) {
      const json = await response.json();
      setAggGroup(json);
      console.log("Fetched division! ", json)
    } else {
      console.log("error");
    }
  }

  const nestedFetch = async (e) => {
    const response = await fetch('http://localhost:8080/api/artists/nestedaggregation', {
      method: 'GET'
    }).catch((err) => {
      console.log(err);
    })

    if (response.ok) {
      const json = await response.json();
      setAggGroup(json);
      console.log("Fetched nested! ", json)
    } else {
      console.log("error");
    }
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
