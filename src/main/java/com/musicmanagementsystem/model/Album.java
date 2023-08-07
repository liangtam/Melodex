package com.musicmanagementsystem.model;

import jakarta.persistence.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.sql.Time;
import java.util.List;

@Entity
@CrossOrigin
@DiscriminatorValue("ALBUM")
@PrimaryKeyJoinColumn(name = "albumID")// this makes Album's primary key be "albumID" and it ref's Disco_Main's primary key, since Album extends Disco_Main
public class Album extends Discography_Main{


    //private int albumID;
    private int numOfSongs;
    private Time totalDuration;

    @OneToMany(mappedBy = "album")
    private List<IsIn> isInRelationships;

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
