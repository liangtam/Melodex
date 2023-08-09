package com.musicmanagementsystem.service;

import com.musicmanagementsystem.model.Song;
import com.musicmanagementsystem.repository.Discography_MainRepository;
import com.musicmanagementsystem.repository.SongRepository;
import com.musicmanagementsystem.service.interfaces.SongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Time;
import java.util.List;

@Service
public class SongServiceImpl implements SongService {
    @Autowired
    private SongRepository songRepository;

    @Autowired
    private Discography_MainRepository discography_mainRepository;

    @Override
    public List<Song> getAllSongs() {
        return songRepository.getAllSongs();
    }

    @Override
    public void addSongToAlbum(int albumID, int songID) {
        songRepository.addSongToAlbum(albumID, songID);
        System.out.println("Song " + songID + " added into album with id " + albumID + "!");
    }

    @Override
    public void insertNewSong(String discoName, String genre, String releaseDate, Time duration) {
        discography_mainRepository.insertNewDisco(discoName, genre, releaseDate);
        songRepository.insertNewSong(duration);
    }
}
