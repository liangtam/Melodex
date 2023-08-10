import { useState, useEffect } from "react";
import styles from "./AlbumsPage.module.css";

import AlbumForm from "../../components/Album/AlbumForm";
import AlbumTuple from "../../components/Album/AlbumTuple";

const AlbumsPage = () => {
  const [albums, setAlbums] = useState([]);
  const [name, setName] = useState([]);

  const addAlbum = (album) => {
    setAlbums([...albums, album]);
  };

  const fetchAlbums = async () => {
    const response = await fetch('http://localhost:8080/api/albums/alldto', {
      method: 'GET'
    }).catch((err) => {
      console.log(err);
    })

    if (response.ok) {
      const json = await response.json();
      setAlbums(json);
      console.log("Fetched albums! ", json)
    } else {
      console.log("Could not fetch albums");
    }
  }

  const handleSearchClick = async (e) => {
    e.preventDefault();
    if (name === '') {
      return;
    }
    const response = await fetch('http://localhost:8080/api/albums/all/' + name, {
      method: 'GET'
    }).catch((err) => {
      console.log(err);
    })

    if (response.ok) {
      const json = await response.json();
      setAlbums(json);
      console.log("Fetched artists! ", json)
    } else {
      console.log("Could not fetch artists");
    }
  }

  useEffect(() => {
    fetchAlbums();
  }, [])



  return (
    <div className={styles.albumContainer}>

      <div className={styles.leftBody}>
        <div className={styles.centered}>
          <div className={styles.tuples}>
          <div className={styles.searchArea}>
              <h2>Albums</h2>
              <input type="text" placeholder="Search by Name" onChange={(e) => setName(e.target.value)}></input>
              <button onClick={handleSearchClick}>Search</button>
          </div>
            { albums && albums.map((album) => {
              return <AlbumTuple album={album}/>
            })}
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
