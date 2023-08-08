package com.musicmanagementsystem.controller;

import com.musicmanagementsystem.controller.reqBodies.AddSongToAlbumReqBody;
import com.musicmanagementsystem.service.DTO.SongDTO;
import com.musicmanagementsystem.service.interfaces.SongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/songs")
@CrossOrigin
public class SongController {

    @Autowired
    public SongService songService;

    @GetMapping("/all")
    public List<SongDTO> getAllSongs() {
        System.out.println("Fetched all songs!");
        return songService.getAllSongs();
    }

    @PostMapping("/isIn")
    public void addSongToAlbum(@RequestBody AddSongToAlbumReqBody request) {
        songService.addSongToAlbum(request.getAlbumID(), request.getSongID());
        System.out.println("Added song to album!");
    }

}
