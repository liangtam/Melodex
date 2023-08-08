package com.musicmanagementsystem.model;

import jakarta.persistence.*;

import java.sql.Time;
import java.util.Set;

@Entity
@Table(name = "Song")
@PrimaryKeyJoinColumn(name = "songID")

public class Song extends Discography_Main{


    private Time duration;


    @ManyToMany(mappedBy = "songsInAlbum")
    Set<Album> albums;

    public Song() {

    }

    public Time getDuration() {
        return duration;
    }

    public void setDuration(Time duration) {
        this.duration = duration;
    }
}
