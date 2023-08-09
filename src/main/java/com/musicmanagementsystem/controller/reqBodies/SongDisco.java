package com.musicmanagementsystem.controller.reqBodies;

public class SongDisco {
    private String discoName;
    private String genre;
    private String releaseDate;
    //private int numOfLikes;
    private int numOfSongs;
    private String duration;

    public SongDisco() {

    }

    public int getNumOfSongs() {
        return numOfSongs;
    }

    public void setNumOfSongs(int numOfSongs) {
        this.numOfSongs = numOfSongs;
    }

    public String getDuration() {
        return duration;
    }

    public void setTotalDuration(String duration) {
        this.duration = duration;
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
}
