package com.musicmanagementsystem.controller;

import com.musicmanagementsystem.model.Album;
import com.musicmanagementsystem.service.interfaces.AlbumService;
import com.musicmanagementsystem.service.interfaces.Discography_MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/albums")
@CrossOrigin
public class AlbumController {
    @Autowired
    public AlbumService albumService;

    @Autowired
    public Discography_MainService discography_mainService;

    @PostMapping("/add")
    public String addAlbum(@RequestBody Album album) {
        albumService.saveAlbum(album);

        return "Saved album!";
    }
}
