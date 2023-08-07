package com.musicmanagementsystem.model;

import jakarta.persistence.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.sql.Time;
import java.util.Set;

@Entity
@Table(name = "Song")
@DiscriminatorValue("SONG")
@PrimaryKeyJoinColumn(name = "songID")
@CrossOrigin

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
