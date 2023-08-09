import { useState, useEffect } from "react";
import styles from "./AlbumForm.module.css";

const AlbumForm = (props) => {
  const [album, setAlbum] = useState({
    albumName: "",
    genre: "",
    releaseDate: "",
    numOfSongs: "",
    totalDuration: "",
  });

  const [albums, setAlbums] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLabel((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    props.addAlbum(album);
    resetForm();
  };

  const resetForm = () => {
    setAlbum({
      albumName: "",
      genre: "",
      releaseDate: "",
      numOfSongs: "",
      totalDuration: "",
    });
  };

  return (
    <div>
      <div className={styles.formContainer}>
        <h3>Album</h3>
        <label>
          Album Name:{" "}
          <input
            type="text"
            placeholder="Album name"
            onChange={handleAlbumNameChange}
          ></input>
        </label>
        <label>
          Genre:{" "}
          <input
            type="text"
            placeholder="Genre"
            onChange={handleGenreChange}
          ></input>
        </label>
        <label>
          Release Date:{" "}
          <input
            type="text"
            placeholder="eg. 2000-00-00(?)"
            onChange={handleReleaseDateChange}
          ></input>
        </label>
        <label>
          Number of Songs:{" "}
          <input
            type="text"
            placeholder="1 or more"
            onChange={handleNumOfSongsChange}
          ></input>
        </label>
        <label>
          Total Duration:{" "}
          <input
            type="text"
            placeholder="The length of album"
            onChange={handleTotalDurationChange}
          ></input>
        </label>
        <label>
          <div className={styles.btn} onClick={handleAddClick}>
            Add
          </div>
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
