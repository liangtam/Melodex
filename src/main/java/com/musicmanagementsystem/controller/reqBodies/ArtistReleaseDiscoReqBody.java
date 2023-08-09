package com.musicmanagementsystem.controller.reqBodies;

public class ArtistReleaseDiscoReqBody {
    private int artistID;
    private int dID;

    public ArtistReleaseDiscoReqBody() {

    }

    public int getArtistID() {
        return artistID;
    }

    public void setArtistID(int artistID) {
        this.artistID = artistID;
    }

    public int getdID() {
        return dID;
    }

    public void setdID(int dID) {
        this.dID = dID;
    }
}
