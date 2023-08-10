import SongForm from "../../components/Song/SongForm";
import SongTuple from "../../components/Song/SongTuple";
import { useState, useEffect } from "react";
import styles from "./SongsPage.module.css";

const SongsPage = () => {
  const [songs, setSongs] = useState([]);

  const addSong = (song) => {
    setSongs([...songs, song]);
  };

  const fetchSongs = async () => {
    const response = await fetch("http://localhost:8080/api/songs/all", {
      method: "GET",
    }).catch((err) => {
      console.log(err);
    });

    if (response.ok) {
      const json = await response.json();
      setSongs(json);
      console.log("Fetched songs! ", json);
    } else {
      console.log("Could not fetch songs");
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  useEffect(() => {
    console.log("Songs in songs page: ", songs);
  }, [songs]);

  return (
    <div className={styles.songContainer}>
      <div className={styles.leftBody}>
        <div className={styles.centered}>
          <div className={styles.tuples}>
            {songs &&
              songs.map((song) => {
                return <SongTuple song={song} />;
              })}
          </div>
        </div>
      </div>
      <div className={styles.rightBody}>
        <div className={styles.centered}>
          <div className={styles.addForm}>
            <SongForm addSong={addSong} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongsPage;
