package com.musicmanagementsystem.model;

import jakarta.persistence.*;

@Entity
public class Artist_ContractedWith {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private int artistID;
    private String artistName;
    private int age;
    private String country;
    private String biography;
    private int numOfMembers;

    @ManyToOne
    @JoinColumn(name = "labelID", referencedColumnName = "labelID")
    private RecordLabel recordLabel;

    public int getArtistID() {
        return artistID;
    }

    public void setArtistID(int artistID) {
        this.artistID = artistID;
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

    public RecordLabel getRecordLabel() {
        return recordLabel;
    }

    public void setRecordLabel(RecordLabel recordLabel) {
        this.recordLabel = recordLabel;
    }
}
