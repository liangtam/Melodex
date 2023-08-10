import { useState, useEffect } from "react";
import styles from "./ArtistForm.module.css";

const ArtistForm = () => {
  const [artistName, setArtistName] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");
  const [numOfMembers, setNumOfMembers] = useState("");
  const [labelID, setLabelID] = useState(null);

  const [successAdd, setSuccessAdd] = useState(false);
  const [error, setError] = useState(false);

  const handleArtistNameChange = (e) => {
    setArtistName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleNumMemberChange = (e) => {
    setNumOfMembers(e.target.value);
  };

  const handleLabelIDChange = (e) => {
    setLabelID(e.target.value);
  };

  const handleAddClick = async (e) => {
    e.preventDefault();

    const artist = {
      artistName,
      age,
      country,
      biography: bio,
      numOfMembers,
      labelID,
    };

    const response = await fetch("http://localhost:8080/api/artists/add", {
      method: "POST",
      body: JSON.stringify(artist),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log("New artist added!");
      setSuccessAdd(true);
      setError(false);
    } else {
      setError(true);
      setSuccessAdd(false);
      console.log("Error!");
    }
  };

  return (
    <div>
      <div className={styles.formContainer}>
        <h3>Add New Artist</h3>
        <label>
          Artist Name:{" "}
          <input
            type="text"
            placeholder="Name"
            onChange={handleArtistNameChange}
          ></input>
        </label>
        <label>
          Age:{" "}
          <input
            type="text"
            placeholder="Artist age or group age since debut"
            onChange={handleAgeChange}
          ></input>
        </label>
        <label>
          Country:{" "}
          <input
            type="text"
            placeholder="Country"
            onChange={handleCountryChange}
          ></input>
        </label>
        <label>
          Biography:{" "}
          <input
            type="text"
            placeholder="This artist is a cool singer"
            onChange={handleBioChange}
          ></input>
        </label>
        <label>
          Number of members:{" "}
          <input
            type="text"
            placeholder="1 for solo artists"
            onChange={handleNumMemberChange}
          ></input>
        </label>
        <label>
          Label ID:{" "}
          <input
            type="text"
            placeholder="Leave blank if none"
            onChange={handleLabelIDChange}
          ></input>
        </label>
        {successAdd && (
          <div className={styles.successMessage}>Added successfully!</div>
        )}
        {error && (
          <div className={styles.errorMessage}>Could not add artist.</div>
        )}
        <div className={styles.btn} onClick={handleAddClick}>
          Add
        </div>
      </div>
    </div>
  );
};

export default ArtistForm;
