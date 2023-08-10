import { useState, useEffect } from "react";
import styles from "./AlbumForm.module.css";

const AlbumForm = (props) => {
  const [album, setAlbum] = useState({
    discoName: "",
    genre: "",
    releaseDate: "",
    numOfSongs: "",
    totalDuration: "",
  });

  const [successAdd, setSuccessAdd] = useState(false);
  const [error, setError] = useState(false);

  // const [albums, setAlbums] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlbum((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddClick = async (e) => {
    e.preventDefault();

        console.log("Album: ", album); // this is just for debugging purposes

        const response = await fetch('http://localhost:8080/api/albums/add', {
            method: 'POST',
            body: JSON.stringify(album),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.ok) {
            console.log("Added new album!");
            props.addAlbum(album);
            setSuccessAdd(true);
            setError(false);
        } else {
            console.log("Error!");
            setError(true);
            setSuccessAdd(false);
        }

            //resetForm();
  };

  const resetForm = () => {
    setAlbum({
      discoName: "",
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
            name="discoName"
            value={album.discoName}
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
            placeholder="eg. YYYY-MM-DD HH:MM"
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
            placeholder="HH:MM:SS"
            name="totalDuration"
            value={album.totalDuration}
            onChange={handleChange}
          ></input>
        </label>
                {successAdd && (
                    <div className={styles.successMessage}>Added new album successfully!</div>
                )}
                {error && (
                    <div className={styles.errorMessage}>Could not add album. Double check inputs.</div>
                )}
        <label>
          <button className={styles.btn} onClick={handleAddClick}>
            Add
          </button>
        </label>
      </div>
    </div>
  );
};

export default AlbumForm;
