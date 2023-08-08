package com.musicmanagementsystem.service.interfaces;

import com.musicmanagementsystem.model.Song;

import java.util.List;

public interface SongService {

    public List<Song> getAllSongs();
    public void addSongToAlbum(int albumID, int songID);
}
