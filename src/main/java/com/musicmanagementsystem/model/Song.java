package com.musicmanagementsystem.model;

import jakarta.persistence.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.sql.Time;

@Entity
@Table(name = "Song")
@PrimaryKeyJoinColumn(name = "songID")
@CrossOrigin

public class Song extends Discography_Main{

    //private int songID;
    private Time duration;
//
//    @OneToOne
//    @JoinColumn(name = "songID")
//    private Discography_Main discographyMain;

    public Song() {

    }

//    public int getSongID() {
//        return songID;
//    }
//
//    public void setSongID(int songID) {
//        this.songID = songID;
//    }

    public Time getDuration() {
        return duration;
    }

    public void setDuration(Time duration) {
        this.duration = duration;
    }
}
