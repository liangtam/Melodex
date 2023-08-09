package com.musicmanagementsystem.service.interfaces;

import com.musicmanagementsystem.model.Album;

import java.sql.Time;
import java.util.List;

public interface AlbumService {
    public List<Album> getAllAlbums();

    public void insertNewAlbum(String discoName, String genre, String releaseDate, int numOfLikes, int numOfSongs, Time totalDuration);

    public List<Album> getAllAlbumsWithName(String discoName);

}
