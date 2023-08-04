package com.musicmanagementsystem.service;

import com.musicmanagementsystem.model.Song;
import com.musicmanagementsystem.repository.SongRepository;
import com.musicmanagementsystem.service.interfaces.SongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SongServiceImpl implements SongService {
    @Autowired
    private SongRepository songRepository;

    @Override
    public Song saveSong(Song song) {
        return songRepository.save(song);
    }

    @Override
    public List<Song> getAllSongs() {
        return songRepository.findAll();
    }

    @Override
    public void deleteSong(int id) {
        songRepository.deleteById(id);
        System.out.println("Deleted song with id: " + id);
    }
}
