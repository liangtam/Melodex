package com.musicmanagementsystem.service.interfaces;

import com.musicmanagementsystem.model.Song;

import java.util.List;

public interface SongService {
    public Song saveSong(Song song);
    public List<Song> getAllSongs();
    public void deleteSong(int id);
}
