import styles from "./ArtistTuple.module.css";
import { useState, useEffect } from "react";

const ArtistTuple = ({ artist, artistID, artists, setArtists }) => {
  // const [artistObj, setArtistObj] = useState('');

  const [editClicked, setEditClicked] = useState(false);
  const [newArtistName, setNewArtistName] = useState(artist.artistName);
  const [newArtistAge, setNewArtistAge] = useState(artist.age);
  const [newArtistCountry, setNewArtistCountry] = useState(artist.country);
  const [newArtistBiography, setNewArtistBiography] = useState(
    artist.biography
  );
  const [newNumberOfMembers, setNewNumberOfMembers] = useState(
    artist.numOfMembers
  );
  const [newLabelId, setNewLabelId] = useState(artist.labelID);

  // useEffect((() => {
  //   setArtistObj(JSON.stringify(artist));
  // }), [])

  // const fetchArtist = async () => {
  //   const response = await fetch(`http://localhost:8080/api/artists/${artistID}`, {
  //           method: 'GET',
  //           headers: {
  //               'Content-Type': 'application/json'
  //           }
  //       })

  //       if (response.ok) {
  //         const json = response.json();
  //         setArtistFetched(json);
  //         console.log(json);
  //       } else {
  //           console.log("Error!");
  //       }
  // }

  const fetchArtists = async () => {
    const response = await fetch("http://localhost:8080/api/artists/all", {
      method: "GET",
    }).catch((err) => {
      console.log(err);
    });

    if (response.ok) {
      const json = await response.json();
      setArtists(json);
      console.log("Fetched artists! ", json);
    } else {
      console.log("Could not fetch artists");
    }
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    // const id = artist.artistId;
    // console.log(artist);
    const response = await fetch(
      `http://localhost:8080/api/artists/${artistID}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      console.log("Deleted artist");
      fetchArtists();
    } else {
      console.log("Error!");
    }
  };

  const handleUpdate = async (event) => {
    const newArtist = {
      artistName: newArtistName,
      age: newArtistAge,
      country: newArtistCountry,
      biography: newArtistBiography,
      numOfMembers: newNumberOfMembers,
      labelID: newLabelId,
    };

    const response = await fetch(
      `http://localhost:8080/api/artists/update/${artistID}`,
      {
        method: "PATCH",
        body: JSON.stringify(newArtist),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      console.log("Updated artist! ", newArtist);
      fetchArtists();
    } else {
      console.log("Error!");
    }
  };

  return (
    <div>
      <div className={styles.tupleContainer}>
        <div className={styles.titlebox}>
          <div className={styles.titlelist}>
            <div className={styles.titlecontent}>
              <h4>Artist Name</h4>
              <h4>Age</h4>
              <h4>Country</h4>
              <h4>Bio</h4>
              <h4>Number of Member</h4>
              <h4>Delete</h4>
              <h4>Update</h4>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.list}>
            <div className={styles.content}>
              <p>{artist && artist.artistName}</p>
              <p>{artist && artist.age}</p>
              <p>{artist && artist.country}</p>
              <p>{artist && artist.biography}</p>
              <p>{artist && artist.numOfMembers}</p>
              <button onClick={handleDelete}>X</button>
              <button onClick={(e) => setEditClicked(true)}>Edit</button>
            </div>
          </div>
        </div>

        {editClicked && (
          <div className={styles.editArea}>
            <input
              type="text"
              placeholder="Artist Name"
              value={newArtistName}
              onChange={(e) => setNewArtistName(e.target.value)}
            ></input>
            <input
              type="text"
              placeholder="Artist Age"
              value={newArtistAge}
              onChange={(e) => setNewArtistAge(e.target.value)}
            ></input>
            <input
              type="text"
              placeholder="Artist Country"
              value={newArtistCountry}
              onChange={(e) => setNewArtistCountry(e.target.value)}
            ></input>
            <input
              type="text"
              placeholder="Artist Bio"
              value={newArtistBiography}
              onChange={(e) => setNewArtistBiography(e.target.value)}
            ></input>
            <input
              type="text"
              placeholder="Artist Number of Members"
              value={newNumberOfMembers}
              onChange={(e) => setNewNumberOfMembers(e.target.value)}
            ></input>
            <input
              type="text"
              placeholder="Artist Label ID"
              value={newLabelId}
              onChange={(e) => setNewLabelId(e.target.value)}
            ></input>
            <button onClick={handleUpdate}>Submit</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtistTuple;
