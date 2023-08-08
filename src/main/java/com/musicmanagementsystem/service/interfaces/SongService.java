package com.musicmanagementsystem.service.interfaces;

import com.musicmanagementsystem.service.DTO.SongDTO;

import java.util.List;

public interface SongService {

    public List<SongDTO> getAllSongs();
    public void addSongToAlbum(int albumID, int songID);
}
