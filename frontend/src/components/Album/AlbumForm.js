import { useState, useEffect } from "react";
import styles from "./AlbumForm.module.css";

const AlbumForm = () => {
  const [albumName, setAlbumName] = useState("");
  const [genre, setGenre] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [numOfSongs, setNumOfSongs] = useState("");
  const [totalDuration, setTotalDuration] = useState("");

  const handleAlbumNameChange = (e) => {
    setAlbumName(e.target.value);
  };

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };

  const handleReleaseDateChange = (e) => {
    setReleaseDate(e.target.value);
  };

  const handleNumOfSongsChange = (e) => {
    setNumOfSongs(e.target.value);
  };

  const handleTotalDurationChange = (e) => {
    setTotalDuration(e.target.value);
  };

  const handleAddClick = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className={styles.formContainer}>
        <h3>Album</h3>
        <label>
          Album Name: <input type="text" placeholder="Album name"></input>
        </label>
        <label>
          Genre: <input type="text" placeholder="Genre"></input>
        </label>
        <label>
          Release Date:{" "}
          <input type="text" placeholder="eg. 2000-00-00(?)"></input>
        </label>
        <label>
          Number of Songs: <input type="text" placeholder="1 or more"></input>
        </label>
        <label>
          Total Duration:{" "}
          <input type="text" placeholder="The length of album"></input>
        </label>
        <label>
          <div className={styles.btn}>Add</div>
        </label>
        <label>
          <div className={styles.btn}>Delete</div>
        </label>
        <label>
          <div className={styles.btn}>Update</div>
        </label>
      </div>
    </div>
  );
};

export default AlbumForm;
