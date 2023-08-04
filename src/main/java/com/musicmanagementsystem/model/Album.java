package com.musicmanagementsystem.model;

import jakarta.persistence.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.sql.Time;

@Entity
@CrossOrigin
@PrimaryKeyJoinColumn(name = "albumID")
public class Album extends Discography_Main{


    //private int albumID;
    private int numOfSongs;
    private Time totalDuration;
//
//    @OneToOne
//    @JoinColumn(name = "dID")
//    private Discography_Main discographyMain;

    public Album() {
    }

//    public int getAlbumID() {
//        return albumID;
//    }
//
//    public void setAlbumID(int albumID) {
//        this.albumID = albumID;
//    }

    public int getNumOfSongs() {
        return numOfSongs;
    }

    public void setNumOfSongs(int numOfSongs) {
        this.numOfSongs = numOfSongs;
    }

    public Time getDuration() {
        return totalDuration;
    }

    public void setDuration(Time duration) {
        this.totalDuration = duration;
    }
}
