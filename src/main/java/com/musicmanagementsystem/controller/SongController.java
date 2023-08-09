package com.musicmanagementsystem.controller;

import com.musicmanagementsystem.controller.reqBodies.AddSongToAlbumReqBody;
import com.musicmanagementsystem.controller.reqBodies.SongDisco;
import com.musicmanagementsystem.model.Song;
import com.musicmanagementsystem.service.interfaces.SongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Time;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;

@RestController
@RequestMapping("/api/songs")
@CrossOrigin
public class SongController {

    @Autowired
    public SongService songService;

    @GetMapping("/all")
    public List<Song> getAllSongs() {
        System.out.println("Fetched all songs!");
        return songService.getAllSongs();
    }

    @PostMapping("/add")
    public void insertNewAlbum(@RequestBody SongDisco reqBody) throws ParseException {
        String timeString = reqBody.getDuration();
        SimpleDateFormat sdf = new SimpleDateFormat("HH:mm:ss");
        long ms = sdf.parse(timeString).getTime();
        Time t = new Time(ms);

        songService.insertNewSong(reqBody.getDiscoName(), reqBody.getGenre(), reqBody.getReleaseDate(), t);
    }



    @PostMapping("/isin")
    public void addSongToAlbum(@RequestBody AddSongToAlbumReqBody request) {
        songService.addSongToAlbum(request.getAlbumID(), request.getSongID());
        System.out.println("Added song to album!");
    }

}
