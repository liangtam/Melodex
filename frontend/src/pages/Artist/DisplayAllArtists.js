import { useState, useEffect } from "react";
import styles from "./DisplayAllArtists.module.css";
import ArtistTuple from "../../components/Artists/ArtistTuple.js"
import { Link } from "react-router-dom";

const DisplayAllArtists = () => {

  const [artists, setArtists] = useState([]);

  const [attributes, setAttributes] = useState([]);

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

  useEffect(() => {
    fetchArtists();
  }, [])

  return (
  <div className={styles.tuples}>
      {artists && artists.map((artist) => {
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
      </div>
        return <ArtistTuple artist={artist} artistID={artist.artistID}/>
      })}
    </div>
  );
};

// DO NOT FORGET THIS LINE! It is very important. If we don't export the page, we can't use it LOL
export default DisplayAllArtists;
