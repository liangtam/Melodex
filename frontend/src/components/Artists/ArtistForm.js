import { useState, useEffect } from "react";
import styles from "./ArtistForm.module.css";

const ArtistForm = () => {
  const [artistName, setArtistName] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");
  const [numMember, setNumMember] = useState("");

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
    setNumMember(e.target.value);
  };

  const handleAddClick = (e) => {
    e.preventDefault();
  };

  /*
  const artist = {
    "artistName": artistName,
  };
  */

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
            placeholder="Name"
            onChange={handleCountryChange}
          ></input>
        </label>
        <label>
          Biography:{" "}
          <textarea
            type="text"
            placeholder="This artist is a cool singer"
            onChange={handleBioChange}
          ></textarea>
        </label>
        <label>
          Number of members:{" "}
          <input
            type="text"
            placeholder="1 for solo artists"
            onChange={handleNumMemberChange}
          ></input>
        </label>
        <div className={styles.btn}>Add</div>
      </div>
    </div>
  );
};

export default ArtistForm;
