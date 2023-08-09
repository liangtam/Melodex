import { useState, useEffect } from "react";
import styles from "./AlbumsPage.module.css";

import AlbumForm from "../../components/Album/AlbumForm";
import AlbumTuple from "../../components/Album/AlbumTuple";

const AlbumsPage = () => {
  const [albums, setAlbums] = useState([]);

  const addAlbum = (album) => {
    setAlbums([...albums, album]);
  };

  return (
    <div className={styles.albumContainer}>
      <div className={styles.leftBody}>
        <div className={styles.centered}>
          <div className={styles.title}>
            <AlbumTuple albums={albums} />
          </div>
        </div>
      </div>
      <div className={styles.rightBody}>
        <div className={styles.centered}>
          <div className={styles.addForm}>
            <AlbumForm addAlbum={addAlbum} />
          </div>
        </div>
      </div>
    </div>
  );
};

// DO NOT FORGET THIS LINE! It is very important. If we don't export the page, we can't use it LOL
export default AlbumsPage;