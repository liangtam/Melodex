package com.musicmanagementsystem.service;

import com.musicmanagementsystem.model.Album;
import com.musicmanagementsystem.repository.AlbumRepository;
import com.musicmanagementsystem.repository.Discography_MainRepository;
import com.musicmanagementsystem.service.DTO.AlbumDTO;
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
    public void insertNewAlbum(String discoName, String genre, String releaseDate, int numOfSongs, Time totalDuration) {
        discography_mainRepository.insertNewDisco(discoName, genre, releaseDate);
        albumRepository.insertNewAlbum(numOfSongs, totalDuration);
    }

    @Override
    public List<Album> getAllAlbumsWithName(String discoName) {
        return albumRepository.getAllAlbumsWithName(discoName);
    }

    @Override
    public List<AlbumDTO> getAllAlbumsNoId() {
        return albumRepository.getAllAlbumsNoId();
    }
}
