import SongForm from "../../components/Song/SongForm";
import SongTuple from "../../components/Song/SongTuple";
import { useState } from "react";
import styles from './SongsPage.module.css';

const SongsPage = () => {
    const [songs, setSongs] = useState([]);

    const addSong = (song) => {
        setSongs([...songs, song]);
    };

    return (
        <div className={styles.songContainer}>
            <div className={styles.leftBody}>
                <div className={styles.centered}>
                    <div className={styles.title}>
                    <SongTuple songs={songs} />
                    </div>
                </div>
            </div>
            <div className={styles.rightBody}>
                <div className={styles.centered}>
                    <div className={styles.addForm}>
                        <SongForm addSong={addSong} />
                    </div>
                </div>
            </div>
            
        </div>
        
    );

};

export default SongsPage;
