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
    setAggGroupClicked(true);
    setAggHavingClicked(false);
    setDivisionClicked(false);
    setNestedAggClicked(false);

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
    setAggGroupClicked(false);
    setAggHavingClicked(true);
    setDivisionClicked(false);
    setNestedAggClicked(false);
    const response = await fetch('http://localhost:8080/api/artists/aggregationhaving', {
      method: 'GET'
    }).catch((err) => {
      console.log(err);
    })

    if (response.ok) {
      const json = await response.json();
      setAggHaving(json);
      console.log("Fetched aggHaving! ", json)
    } else {
      console.log("error");
    }
  }

  const divisionFetch = async (e) => {
    setAggGroupClicked(false);
    setAggHavingClicked(false);
    setDivisionClicked(true);
    setNestedAggClicked(false);
    const response = await fetch('http://localhost:8080/api/artists/division', {
      method: 'GET'
    }).catch((err) => {
      console.log(err);
    })

    if (response.ok) {
      const json = await response.json();
      setDivisionObj(json);
      console.log("Fetched division! ", json)
    } else {
      console.log("error");
    }
  }

  const nestedFetch = async (e) => {
    setAggGroupClicked(false);
    setAggHavingClicked(false);
    setDivisionClicked(false);
    setNestedAggClicked(true);
    const response = await fetch('http://localhost:8080/api/artists/nestedaggregation', {
      method: 'GET'
    }).catch((err) => {
      console.log(err);
    })

    if (response.ok) {
      const json = await response.json();
      setNestedAgg(json);
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
            <h3>Choose what you'd like to do!</h3>
            <Link to="/display-artists">
              <button className={styles.displayArtistsBtn}>Display All Artists</button>
            </Link>
            <div className={styles.fun}>
            <div className={styles.buttons}>
            <h4>Fun</h4>
              <ul>
                <li><button className={styles.alignbtn} onClick={aggGroupFetch}>*Aggregation with Group By prompt*</button></li>
                <li><button className={styles.alignbtn} onClick={aggHavingFetch}>*Aggregation with Having prompt*</button></li>
                <li><button className={styles.alignbtn} onClick={nestedFetch}>*Nested Aggregation with Group By prompt*</button></li>
                <li><button className={styles.alignbtn} onClick={divisionFetch}>Genre God (Division)</button></li>
              </ul>
            </div>
            </div>
          </div>

          {divisionClicked && divisionObj && <div className={styles.divisionResult}> <h4>Artist ID of artists who covered all genres:</h4> {divisionObj.map((result) => {
            return <div><b>Artist ID: </b>{result}</div>
          })}</div>}
          {aggHavingClicked && aggHaving && <div className={styles.aggHavingResult}><h4>Names of artists who released the earliest discographies:</h4> {aggHaving.map((result) => {
            return <div><b>Name: </b> {result.artistName} <b>Earliest Release Date:</b> {result.earliestReleaseDate}</div>
          })}</div>}
          {aggGroupClicked && aggGroup && <div className={styles.aggGroupResult}><h4>Number of Discographies Released by Each Artist:</h4> {aggGroup.map((result) => {
            return <div><b>ID: </b> {result.artistID} <b>Number of Releases:</b> {result.numOfDiscography}</div>
          })}</div>}
          {nestedAggClicked && nestedAgg && <div className={styles.nestedAggResult}><h4>Artist IDs whose average number of songs released per album is the lowest among all artists:</h4> {nestedAgg.map((result) => {
            return <div>Artist ID: {result}</div>
          })}</div>}
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
