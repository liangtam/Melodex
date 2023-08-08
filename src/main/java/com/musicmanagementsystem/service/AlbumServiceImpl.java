package com.musicmanagementsystem.service;

import com.musicmanagementsystem.model.Album;
import com.musicmanagementsystem.repository.AlbumRepository;
import com.musicmanagementsystem.repository.Discography_MainRepository;
import com.musicmanagementsystem.service.interfaces.AlbumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Time;
import java.util.List;

@Service
public class AlbumServiceImpl implements AlbumService {
    @Autowired
    private AlbumRepository albumRepository;

    @Autowired
    private Discography_MainRepository discography_mainRepository;


    @Override
    public List<Album> getAllAlbums() {
        return albumRepository.getAllAlbums();
    }

    @Override
    public void insertNewAlbum(String discoName, String genre, String releaseDate, int numOfLikes, int numOfSongs, Time totalDuration) {
        discography_mainRepository.insertNewDisco(discoName, genre, releaseDate, numOfLikes);
        albumRepository.insertNewAlbum(numOfSongs, totalDuration);
    }
}
