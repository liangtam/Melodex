import styles from "./ArtistTuple.module.css";

const ArtistTuple = ({artist}) => {
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
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.list}>
            <div className={styles.content}>
              <p>{artist && artist.artistName}</p>
              <p>{artist && artist.age}</p>
              <p>{artist && artist.country}</p>
              <p>{artist && artist.biography}</p>
              <p>{artist && artist.numOfMembers}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistTuple;
