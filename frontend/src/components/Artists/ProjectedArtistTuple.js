import styles from "./ProjectionArtistTuple.module.css";
import { useState, useEffect } from "react";

const ProjectedArtistTuple = ({
  projectedArtist,
  artistID,
  artists,
  setProjectedArtists,
}) => {
  // const [artistObj, setArtistObj] = useState('');

  const [keys, setKeys] = useState(Object.keys(projectedArtist));
  const [values, setValues] = useState(Object.values(projectedArtist));

  useEffect(() => {
    console.log("Keys and vals: ", keys);
  }, [keys]);

  const mapKeyToLabel = (key) => {
    if (key === "artistID") {
      return "Artist ID";
    }
    if (key === "artistName") {
      return "Artist Name";
    }
    if (key === "age") {
      return "Age";
    }
    if (key === "country") {
      return "Country";
    }
    if (key === "biography") {
      return "Bio";
    }
    if (key === "numOfMembers") {
      return "Number of Members";
    }
    if (key === "labelID") {
      return "Label ID";
    }
  };

  //   const fetchArtists = async () => {
  //     const response = await fetch('http://localhost:8080/api/artists/all', {
  //       method: 'GET'
  //     }).catch((err) => {
  //       console.log(err);
  //     })

  //     if (response.ok) {
  //       const json = await response.json();
  //       setArtists(json);
  //       console.log("Fetched artists! ", json)
  //     } else {
  //       console.log("Could not fetch artists");
  //     }
  //   }

  return (
    <div>
      <div className={styles.tupleContainer}>
        <div className={styles.titlebox}>
          <div className={styles.titlelist}>
            <div className={styles.titlecontent}>
              {keys &&
                keys.map((key) => {
                  return (
                    <h4 className={styles.titleItem}>{mapKeyToLabel(key)}</h4>
                  );
                })}
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.list}>
            <div className={styles.content}>
              {values &&
                values.map((value) => {
                  return <p className={styles.contentItem}>{value}</p>;
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectedArtistTuple;
