import { useState, useEffect } from "react";
import styles from "./DisplayAllArtists.module.css";
import ArtistTuple from "../components/Artists/ArtistTuple";

const DisplayAllArtists = () => {
  const handleDisplay = (e) => {
    e.preventDefault();
  };

  return <ArtistTuple />;
};

// DO NOT FORGET THIS LINE! It is very important. If we don't export the page, we can't use it LOL
export default DisplayAllArtists;
