import { useState, useEffect } from "react";
import styles from "./DisplayAllArtists.module.css";
import ArtistTuple from "../components/Artists/ArtistTuple";

const DisplayAllArtists = () => {

  const [artists, setArtists] = useState([]);

  const handleDisplay = (e) => {
    e.preventDefault();
  };

  const fetchArtists = async () => {
    const response = await fetch('http://localhost:8080/api/artists/all', {
      method: 'GET'
    })

    const json = await response.json();

    if (response.ok) {
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
        return <ArtistTuple artist={artist}/>
      })}

    </div>
  );
};

// DO NOT FORGET THIS LINE! It is very important. If we don't export the page, we can't use it LOL
export default DisplayAllArtists;
