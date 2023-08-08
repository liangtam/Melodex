package com.musicmanagementsystem.service;

import com.musicmanagementsystem.repository.SongRepository;
import com.musicmanagementsystem.service.interfaces.SongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SongServiceImpl implements SongService {
    @Autowired
    private SongRepository songRepository;

    @Override
    public void addSongToAlbum(int albumID, int songID) {
        songRepository.addSongToAlbum(albumID, songID);
        System.out.println("Song " + songID + " added into album with id " + albumID + "!");
    }

}
