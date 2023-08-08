package com.musicmanagementsystem.controller;

import com.musicmanagementsystem.controller.reqBodies.AlbumDisco;
import com.musicmanagementsystem.service.DTO.AlbumDTO;
import com.musicmanagementsystem.service.interfaces.AlbumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Time;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;

@RestController
@RequestMapping("/api/albums")
@CrossOrigin
public class AlbumController {
    @Autowired
    public AlbumService albumService;

//    @Autowired
//    public Discography_MainService discography_mainService;


    @GetMapping("/all")
    public List<AlbumDTO> getAllAlbums() {
        return albumService.getAllAlbums();
    }

    @PostMapping("/add")
    public void insertNewAlbum(@RequestBody AlbumDisco reqBody) throws ParseException {
        String timeString = reqBody.getTotalDuration();
        SimpleDateFormat sdf = new SimpleDateFormat("HH:mm:ss");
        long ms = sdf.parse(timeString).getTime();
        Time t = new Time(ms);

        albumService.insertNewAlbum(reqBody.getDiscoName(), reqBody.getGenre(), reqBody.getReleaseDate(), reqBody.getNumOfLikes(),
                reqBody.getNumOfSongs(), t);
    }
}
