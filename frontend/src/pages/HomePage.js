import { useState, useEffect } from "react";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const [table, setTable] = useState("");
  const [attributes, setAttributes] = useState([]);
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");

  const [artistSelected, setArtistSelected] = useState(true);
  const [albumsSelected, setAlbumsSelected] = useState(false);

  const artistAttributes = [
    { label: "Artist ID", value: "artistID" },
    { label: "Artist Name", value: "artistName" },
    { label: "Age", value: "age" },
    { label: "Country", value: "country" },
    { label: "Biography", value: "biography" },
    { label: "Number of Members", value: "numOfMembers" },
    { label: "Record Label ID", value: "labelID" },
  ];

  const albumAttributes = [
    { label: "Album ID", value: "dID" },
    { label: "Album Name", value: "discoName" },
    { label: "Genre", value: "genre" },
    { label: "Release Date", value: "releaseDate" },
    { label: "Number of Songs", value: "numOfSongs" },
    { label: "Total Duration", value: "totalDuration" },
  ];

  const handleTableChange = (e) => {
    setTable(e.target.value);
    if (e.target.value === "Artist_ContractedWith") {
      setArtistSelected(true);
      setAlbumsSelected(false);
      setAttributes([]);
    } else {
      setAlbumsSelected(true);
      setArtistSelected(false);
      setAttributes([]);
    }
  };

  const handleField1Change = (e) => {
    setField1(e.target.value);
  };

  const handleField2Change = (e) => {
    setField2(e.target.value);
  };

  const handleVal1Change = (e) => {
    setVal1(e.target.value);
  };

  const handleVal2Change = (e) => {
    setVal2(e.target.value);
  };

  const handleAttributesChange = (e) => {
    const attributeVal = e.target.value;

    if (e.target.checked) {
      setAttributes([...attributes, attributeVal]);
    } else {
      setAttributes(attributes.filter((att) => att !== attributeVal));
    }
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.regContainer}>
      <div className={styles.centered}>
        <div className={styles.title}>
          <h2>Welcome to Melodex</h2>
        </div>
        <p>
          A music website for users to discover a whole world of artists and
          music, all in one place.
        </p>
        <p>Try a simple search here:</p>
        <div className={styles.searchArea}>
          <label>Table: </label>
          <select name="table" onChange={handleTableChange}>
            <option value="Artist_ContractedWith">Artists</option>
            <option value="Discography_Main, Album">Albums</option>
          </select>
          <div />
          <div className={styles.attributeOptions}>
            <label> Attributes: </label>
            <ul>
              {artistSelected &&
                artistAttributes.map((item) => {
                  return (
                    <li>
                      <label key={item.value}>
                        <input
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

              {albumsSelected &&
                albumAttributes.map((item) => {
                  return (
                    <li>
                      <label key={item.value}>
                        <input
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
          <div className={styles.filters}>
            <label>Filters: </label>
            {artistSelected && (
              <select onChange={handleField1Change}>
                <option value="artistName">Name</option>
                <option value="country">Country</option>
              </select>
            )}
            {albumsSelected && (
              <select onChange={handleField1Change}>
                <option value="genre">Genre</option>
                <option value="discoName">Album Name</option>
              </select>
            )}
            <label>:</label>
            <input type="text" onChange={handleVal1Change}></input>
            {artistSelected && (
              <select onChange={handleField2Change}>
                <option value="numOfMembers">Number of Members</option>
                <option value="age">Age</option>
              </select>
            )}
            {albumsSelected && (
              <select onChange={handleField2Change}>
                <option value="dID">Album ID</option>
                <option value="numOfSongs">Number of Songs</option>
              </select>
            )}
            <label>is at least: </label>
            <input
              type="text"
              placeholder="An integer"
              onChange={handleVal2Change}
            ></input>
          </div>
        </div>

        {/* <input className={styles.searchBar} type="text" placeholder=" Search..."></input> */}
        <button onClick={handleSearchClick}>Search</button>
      </div>
    </div>
  );
};

// DO NOT FORGET THIS LINE! It is very important. If we don't export the page, we can't use it LOL
export default HomePage;
