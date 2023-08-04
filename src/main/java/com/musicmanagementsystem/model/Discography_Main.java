package com.musicmanagementsystem.model;

import jakarta.persistence.*;
import org.springframework.web.bind.annotation.CrossOrigin;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Table(name = "Discography_Main")
@CrossOrigin

public class Discography_Main {

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private int dID;
    private String discoName;
    private String genre;
    private String releaseDate;
    private int numOfLikes;

    public Discography_Main() {

    }

    public int getdID() {
        return dID;
    }

    public void setdID(int dID) {
        this.dID = dID;
    }

    public String getDiscoName() {
        return discoName;
    }

    public void setDiscoName(String discoName) {
        this.discoName = discoName;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(String releaseDate) {
        this.releaseDate = releaseDate;
    }

    public int getNumOfLikes() {
        return numOfLikes;
    }

    public void setNumOfLikes(int numOfLikes) {
        this.numOfLikes = numOfLikes;
    }
}
