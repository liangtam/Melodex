package com.musicmanagementsystem.controller;

import com.musicmanagementsystem.service.interfaces.SongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/songs")
@CrossOrigin
public class SongController {

    @Autowired
    public SongService songService;

    @PostMapping("/{id}")
    public void addSongToAlbum(@PathVariable Integer id, @RequestParam int albumID) {
        songService.addSongToAlbum(id, albumID);
        System.out.println("Added song to album!");
    }

}
