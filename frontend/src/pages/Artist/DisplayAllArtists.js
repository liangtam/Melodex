import { useState, useEffect } from "react";
import styles from "./DisplayAllArtists.module.css";
import ArtistTuple from "../../components/Artists/ArtistTuple.js"

const DisplayAllArtists = () => {

  const [artists, setArtists] = useState([]);
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
      console.log("Fetched aggrogroup! ", json)
    } else {
      console.log("Could not fetch artists");
    }
  }

  const fetchArtists = async () => {
    const response = await fetch('http://localhost:8080/api/artists/all', {
      method: 'GET'
    }).catch((err) => {
      console.log(err);
    })

    if (response.ok) {
      const json = await response.json();
      setArtists(json);
      console.log("Fetched artists! ", json)
    } else {
      console.log("Could not fetch artists");
    }
  }

  useEffect(() => {
    fetchArtists();
  }, [])

  return (
    <div className={styles.tuples}>
      {artists && artists.map((artist) => {
        return <ArtistTuple artist={artist} artistID={artist.artistID}/>
      })}

    </div>
  );
};

// DO NOT FORGET THIS LINE! It is very important. If we don't export the page, we can't use it LOL
export default DisplayAllArtists;
