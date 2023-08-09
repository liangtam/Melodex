package com.musicmanagementsystem.controller.reqBodies;

public class Artist_ContractedWithBody {
    private String artistName;
    private int age;
    private String country;
    private String biography;
    private int numOfMembers;
    private Integer labelID;

    public Artist_ContractedWithBody() {

    }

    public String getArtistName() {
        return artistName;
    }

    public void setArtistName(String artistName) {
        this.artistName = artistName;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getBiography() {
        return biography;
    }

    public void setBiography(String biography) {
        this.biography = biography;
    }

    public int getNumOfMembers() {
        return numOfMembers;
    }

    public void setNumOfMembers(int numOfMembers) {
        this.numOfMembers = numOfMembers;
    }

    public Integer getLabelID() {
        return labelID;
    }

    public void setRecordLabel(Integer labelID) {
        this.labelID = labelID;
    }
}
