package com.musicmanagementsystem.service.interfaces;

import com.musicmanagementsystem.model.Song;

import java.sql.Time;
import java.util.List;

public interface SongService {

    public List<Song> getAllSongs();
    public void addSongToAlbum(int albumID, int songID);

    public void insertNewSong(String discoName, String genre, String releaseDate, Time duration);

}
