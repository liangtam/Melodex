import { useState, useEffect } from "react";
import styles from "./SongForm.module.css";


const SongForm = (props) => {

    const [song, setSong] = useState({
        discoName: "",
        genre: "",
        releaseDate: "",
        duration: ""
    });

    const [successAdd, setSuccessAdd] = useState(false);
    const [error, setError] = useState(false);

    // const [songs, setSongs] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSong(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAddClick = async (e) => {
        //props.addSong(song);
        e.preventDefault();

        console.log("Song: ", song); // this is just for debugging purposes

        const response = await fetch('http://localhost:8080/api/songs/add', {
            method: 'POST',
            body: JSON.stringify(song),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.ok) {
            console.log("Added new song!");
            props.addSong(song);
            setSuccessAdd(true);
            setError(false);
        } else {
            console.log("Error!");
            setError(true);
            setSuccessAdd(false);
        }

        //resetForm(); // temporarily commented out for quick addition of songs
    };

    const resetForm = () => {
        setSong({
            discoName: "",
            genre: "",
            releaseDate: "",
            duration: ""
        });
    };

    // useEffect(() => {
    //     console.log("Song: ", song); // this is just for debugging purposes
    // }, [song])

    return (
        <div>
            <div className={styles.formContainer}>
                <label>Song Name: <input type="text" placeholder="Name" name="discoName" value={song.discoName} onChange={handleChange}></input></label>
                <label>Genre: <input type="text" placeholder="Genre" name="genre" value={song.genre} onChange={handleChange}></input></label>
                <label>Release Date: <input type="text" placeholder="YYYY-MM-DD HH:MM" name="releaseDate" value={song.releaseDate} onChange={handleChange}></input></label>
                <label>Duration: <input type="text" placeholder="HH:MM:SS" name="duration" value={song.duration} onChange={handleChange}></input></label>
                {successAdd && (
                    <div className={styles.successMessage}>Added new song successfully!</div>
                )}
                {error && (
                    <div className={styles.errorMessage}>Could not add song.</div>
                )}
                <div className={styles.btn} onClick={handleAddClick}>Add</div>
            </div>
        </div>
    )
}

export default SongForm;

