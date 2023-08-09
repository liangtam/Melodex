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
    setAlbum((prev) => ({
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
            name="albumName"
            value={album.albumName}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Genre:{" "}
          <input
            type="text"
            placeholder="Genre"
            name="genre"
            value={album.genre}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Release Date:{" "}
          <input
            type="text"
            placeholder="eg. 2000-00-00(?)"
            name="releaseDate"
            value={album.releaseDate}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Number of Songs:{" "}
          <input
            type="text"
            placeholder="1 or more"
            name="numOfSongs"
            value={album.numOfSongs}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Total Duration:{" "}
          <input
            type="text"
            placeholder="The length of album"
            name="totalDuration"
            value={album.totalDuration}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          <div className={styles.btn} onClick={handleAdd}>
            Add
          </div>
        </label>
      </div>
    </div>
  );
};

export default AlbumForm;
