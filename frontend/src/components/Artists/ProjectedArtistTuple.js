import styles from "./ArtistTuple.module.css";
import { useState, useEffect } from "react";

const ProjectedArtistTuple = ({projectedArtist, artistID, artists, setProjectedArtists}) => {

  // const [artistObj, setArtistObj] = useState('');

  const [keysAndValues, setKeysAndValues] = useState(Object.keys(projectedArtist));

  useEffect(() => {
    console.log("Keys and vals: ", keysAndValues);
  }, [keysAndValues])
   

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
              <h4>Artist Name</h4>
              <h4>Age</h4>
              <h4>Country</h4>
              <h4>Bio</h4>
              <h4>Number of Member</h4>
              <h4>Delete</h4>
              <h4>Update</h4>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.list}>
            <div className={styles.content}>
              {/* <p>{projectedArtist && projectedArtist.artistName}</p>
              <p>{projectedArtist && projectedArtist.age}</p>
              <p>{projectedArtist && projectedArtist.country}</p>
              <p>{projectedArtist && projectedArtist.biography}</p>
              <p>{projectedArtist && projectedArtist.numOfMembers}</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectedArtistTuple;
