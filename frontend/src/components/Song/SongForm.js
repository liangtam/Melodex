import { useState } from "react";
import styles from "./SongForm.module.css";


const SongForm = (props) => {

    const [song, setSong] = useState({
        name: "",
        genre: "",
        releaseDate: "",
        duration: ""
    });

    const [songs, setSongs] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSong(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAdd = () => {
        props.addSong(song);
        resetForm();
    };

    const resetForm = () => {
        setSong({
            name: "",
            genre: "",
            releaseDate: "",
            duration: ""
        });
    };

    return (
        <div>
            <div className={styles.formContainer}>
                <label>Song Name: <input type="text" placeholder="Name" name="name" value={song.name} onChange={handleChange}></input></label>
                <label>Genre: <input type="text" placeholder="Genre" name="genre" value={song.genre} onChange={handleChange}></input></label>
                <label>Release Date: <input type="text" placeholder="eg. 2000-00-00(?)" name="releaseDate" value={song.releaseDate} onChange={handleChange}></input></label>
                <label>Duration: <input type="text" placeholder="The length of song" name="duration" value={song.duration} onChange={handleChange}></input></label>
                <div className={styles.btn} onClick={handleAdd}>Add</div>
            </div>
        </div>
    )
}

export default SongForm;

