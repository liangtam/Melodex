package com.musicmanagementsystem.service;

import com.musicmanagementsystem.repository.AlbumRepository;
import com.musicmanagementsystem.service.DTO.AlbumDTO;
import com.musicmanagementsystem.service.interfaces.AlbumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AlbumServiceImpl implements AlbumService {
    @Autowired
    private AlbumRepository albumRepository;


    @Override
    public List<AlbumDTO> getAllAlbums() {
        return albumRepository.getAllAlbums();
    }

}
