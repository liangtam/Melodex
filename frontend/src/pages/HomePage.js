import { useState, useEffect } from "react";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const [table, setTable] = useState("Artist_ContractedWith");
  const [attributes, setAttributes] = useState([]);
  const [field1, setField1] = useState("artistName");
  const [field2, setField2] = useState("numOfMembers");
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");

  const [artistSelected, setArtistSelected] = useState(true);
  const [albumsSelected, setAlbumsSelected] = useState(false);

  const [tableInfo, setTableInfo] = useState([]);
  const [tableRowKeys, setTableRowKeys] = useState([]);

  useEffect(() => {
    console.log("Attribute change: ", attributes)
    console.log("Field 1 change: ", field1 )
    console.log("Field 2 change: ", field2 )
    console.log("Val 1 change: ", val1 )
    console.log("Val 2 change: ", val2)
  }, [attributes, field1, field2, val1, val2])

  useEffect(() => {
    if (tableInfo.length) {
      setTableRowKeys(Object.keys(tableInfo[0]));
    }
  }, [tableInfo]);

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
      setField1('artistName');
      setField2('numOfMembers')
      setAttributes([]);
      setVal1('');
      setVal2('');
    } else {
      setAlbumsSelected(true);
      setArtistSelected(false);
      setField1('genre');
      setField2('dID');
      setAttributes([]);
      setVal1('');
      setVal2('');
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

  const handleSearchClick = async (e) => {
    e.preventDefault();

    if (!attributes.length || table === '' || field1==='' || field2==='' || val1 === '' || val2 === '') {
      return;
    }

    let attributesCopy = [...attributes];
    const attributeString = attributesCopy.join(", ");
    console.log("Attributes: ", attributeString);

    console.log("Table: ", table);

    const queryParams = new URLSearchParams({
      table: table,
      attributes: attributeString,
      field1: field1,
      field2: field2,
      val1: val1,
      val2: val2,
    }).toString();

    console.log("Query Params: ", queryParams);

    try {
      const response = await fetch(
        `http://localhost:8080/api/general/?${queryParams}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
        }
      );

      if (!response.ok) {
        console.log("Error status:", response.status);
        console.log("Error status text:", response.statusText);
        throw new Error("Request failed");
      }
      const tableToDisplay = await response.json();
      console.log("Select success! ", tableToDisplay);
      setTableInfo(tableToDisplay);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    console.log("Table: ", table);
  }, [table]);

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
        <p className={styles.simpleSearchText}>Try a simple search here:</p>
        <div className={styles.searchArea}>
          <label>Table: </label>
          <select name="table" onChange={handleTableChange}>
            <option value="Artist_ContractedWith">Artists</option>
            <option value="Discography_Main, Album">Albums</option>
          </select>
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
            <div className={styles.tableInfo}>
              {tableInfo &&
                tableInfo.map((tableRow, index) => (
                  <div key={index}>
                    {tableRowKeys &&
                      tableRowKeys.map((tableRowKey) => (
                        <div>
                          {`${tableRowKey}: `}
                          {tableRow[tableRowKey]}
                        </div>
                      ))}
                  </div>
                ))}
            </div>
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
