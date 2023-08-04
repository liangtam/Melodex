package com.musicmanagementsystem.service;

import com.musicmanagementsystem.model.Album;
import com.musicmanagementsystem.repository.AlbumRepository;
import com.musicmanagementsystem.service.interfaces.AlbumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AlbumServiceImpl implements AlbumService {
    @Autowired
    private AlbumRepository albumRepository;

    @Override
    public Album saveAlbum(Album album) {
        return albumRepository.save(album);
    }

    @Override
    public List<Album> getAllAlbums() {
        return albumRepository.findAll();
    }

    @Override
    public void deleteAlbum(int id) {
        albumRepository.deleteById(id);
        System.out.println("Deleted album with id: " + id);
    }
}
