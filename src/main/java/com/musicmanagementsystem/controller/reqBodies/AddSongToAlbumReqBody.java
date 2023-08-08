package com.musicmanagementsystem.controller.reqBodies;

public class AddSongToAlbumReqBody {
    private int albumID;
    private int songID;

    public  AddSongToAlbumReqBody(){

    }

    public int getAlbumID() {
        return albumID;
    }

    public void setAlbumID(int albumID) {
        this.albumID = albumID;
    }

    public int getSongID() {
        return songID;
    }

    public void setSongID(int songID) {
        this.songID = songID;
    }
}
