import styles from "./DynamicTuple.module.css";
import { useState, useEffect } from "react";

const DynamicTuple = ({
  projectedObj
}) => {
  // const [artistObj, setArtistObj] = useState('');

  const [keys, setKeys] = useState(Object.keys(projectedObj));
  const [values, setValues] = useState(Object.values(projectedObj));

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

    if (key === "dID") {
        return "Album ID";
      }
      if (key === "discoName") {
        return "Album Name";
      }
      if (key === "genre") {
        return "Genre";
      }
      if (key === "releaseDate") {
        return "Release Date";
      }
      if (key === "numOfSongs") {
        return "Number of SOngs";
      }
      if (key === "totalDuration") {
        return "Duration";
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

            <div className={styles.titlecontent}>
              {keys &&
                keys.map((key) => {
                  return (
                    <h4 className={styles.titleItem}>{mapKeyToLabel(key)}</h4>
                  );
                })}
            </div>


            <div className={styles.content}>
              {values &&
                values.map((value) => {
                  return <p className={styles.contentItem}>{value}</p>;
                })}
        </div>
      </div>
    </div>
  );
};

export default DynamicTuple;