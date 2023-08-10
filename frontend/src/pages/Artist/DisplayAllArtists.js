import { useState, useEffect } from "react";
import styles from "./DisplayAllArtists.module.css";
import ArtistTuple from "../../components/Artists/ArtistTuple.js"
import ProjectedArtistTuple from "../../components/Artists/ProjectedArtistTuple.js"
import { Link } from "react-router-dom";

const DisplayAllArtists = () => {

  const [artists, setArtists] = useState([]);

  const [projectedArtists, setProjectedArtists] = useState([]);

  const [projectionClicked, setProjectionClicked] = useState(false);

  const [attributes, setAttributes] = useState([]);

  const [successAdd, setSuccessAdd] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log("Attributes: ", attributes)
  }, [attributes])

  const artistAttributes = [
    { label: "Artist ID", value: "artistID" },
    { label: "Artist Name", value: "artistName" },
    { label: "Age", value: "age" },
    { label: "Country", value: "country" },
    { label: "Biography", value: "biography" },
    { label: "Number of Members", value: "numOfMembers" },
    { label: "Record Label ID", value: "labelID" },
  ];

  useEffect(() => {
    console.log("Attribute change: ", attributes)
  }, [attributes]);

  const handleAttributesChange = (e) => {
    const attributeVal = e.target.value;

    if (e.target.checked) {
      setAttributes([...attributes, attributeVal]);
    } else {
      setAttributes(attributes.filter((att) => att !== attributeVal));
    }
  };

  const fetchArtists = async () => {
    const response = await fetch('http://localhost:8080/api/artists/all', {
      method: 'GET'
    }).catch((err) => {
      console.log(err);
    })

    if (response.ok) {
      const json = await response.json();
      setArtists(json);
      console.log("Fetched artists! ", json)
    } else {
      console.log("Could not fetch artists");
    }
  }

  const handleProjectionClick = (e) => {
    e.preventDefault();
    setArtists([]);
    setProjectionClicked(true);
    fetchProjection();
  }

  const fetchProjection = async () => {

    if (!attributes.length) {
      setSuccessAdd(false);
      setError('Please choose an attribute, or refresh for all artists again.')
      return;
    }

    let attributesCopy = [...attributes];
    const attributeString = attributesCopy.join(", ");
    console.log("Attribute string: ", attributeString);

    const queryParams = new URLSearchParams({
      attributes: attributeString
    }).toString();

    console.log("Query params: ", queryParams);

    try {
      const response = await fetch(`http://localhost:8080/api/artists/projection/?${queryParams}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        console.log("Error status:", response.status);
        console.log("Error status text:", response.statusText);
        throw new Error("Request failed");
      }

      // if response is ok
      const projectedArtists = await response.json();
      console.log("Projection success! ", projectedArtists);
      setError(false);
      setSuccessAdd("Projection success! Refresh to see all artists or to try a different projection.")
      setProjectedArtists(projectedArtists);
    } catch (error) {
      console.log("Error :( ", error);
      setSuccessAdd(false);
      setError("Could not project.");
    }

  };



  useEffect(() => {
    fetchArtists();
  }, [])

    return (
      <div className={styles.displayArtistsPage}>
        <div className={styles.attributeOptions}>
        <label> Attributes: </label>
        <ul>
          {artistAttributes.map((item) => {
              return (
                <li><label key={item.value}><input
                      type="checkbox"
                      value={item.value}
                      onChange={handleAttributesChange}
                      checked={attributes.includes(item.value)}
                    />
                    {item.label}
                  </label>
                </li>
              );
            })}
        </ul>
        <button onClick ={handleProjectionClick}>Project</button>
        {successAdd && (
                    <div className={styles.successMessage}>{successAdd}</div>
                )}
                {error && (
                    <div className={styles.errorMessage}>{error}</div>
          )}
        {artists && <div className={styles.tuples}>
          <h2>All Artists</h2>
            {artists && artists.map((artist) => {
              return <ArtistTuple artist={artist} artistID={artist.artistID} setArtists={setArtists}/>
            })}
        </div>}
        {projectionClicked && <div className={styles.tuples}>
          <h2>Projected Artists</h2>
            {projectedArtists.map((projectedArtist) => {
              return <ProjectedArtistTuple projectedArtist={projectedArtist} artistID={projectedArtist.artistID} setProjectedArtists={setProjectedArtists}/>
            })}
        </div>}
      </div>
    </div>
  
  )
};

// DO NOT FORGET THIS LINE! It is very important. If we don't export the page, we can't use it LOL
export default DisplayAllArtists;
