package com.musicmanagementsystem.controller.reqBodies;

public class AlbumDisco {
    private String discoName;
    private String genre;
    private String releaseDate;
    //private int numOfLikes;
    private int numOfSongs;
    private String totalDuration;

    public AlbumDisco() {

    }

    public int getNumOfSongs() {
        return numOfSongs;
    }

    public void setNumOfSongs(int numOfSongs) {
        this.numOfSongs = numOfSongs;
    }

    public String getTotalDuration() {
        return totalDuration;
    }

    public void setTotalDuration(String totalDuration) {
        this.totalDuration = totalDuration;
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

//    public int getNumOfLikes() {
//        return numOfLikes;
//    }
//
//    public void setNumOfLikes(int numOfLikes) {
//        this.numOfLikes = numOfLikes;
//    }
}
