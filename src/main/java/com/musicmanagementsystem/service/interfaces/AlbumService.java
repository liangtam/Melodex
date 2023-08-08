package com.musicmanagementsystem.service.interfaces;

import com.musicmanagementsystem.service.DTO.AlbumDTO;

import java.sql.Time;
import java.util.List;

public interface AlbumService {
    public List<AlbumDTO> getAllAlbums();

    public void insertNewAlbum(String discoName, String genre, String releaseDate, int numOfLikes, int numOfSongs, Time totalDuration);

}
