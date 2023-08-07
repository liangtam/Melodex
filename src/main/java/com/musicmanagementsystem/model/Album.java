package com.musicmanagementsystem.model;

import com.musicmanagementsystem.service.DTO.AlbumDTO;
import jakarta.persistence.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.sql.Time;
import java.util.List;

@NamedNativeQuery(name="Album.getAllAlbums",
        query="SELECT D.discoName, A.numOfSongs, A.totalDuration, D.releaseDate " +
                "FROM Album A, Discography_Main D WHERE A.albumID = D.dID",
        resultSetMapping="Mapping.AlbumDTO")

@SqlResultSetMapping(name="Mapping.AlbumDTO",
        classes = @ConstructorResult(targetClass = AlbumDTO.class,
                columns={@ColumnResult(name="discoName"),
                        @ColumnResult(name="numOfSongs"),
                        @ColumnResult(name="totalDuration"),
                        @ColumnResult(name="releaseDate")}))
@Entity
@CrossOrigin
@DiscriminatorValue("ALBUM")
@PrimaryKeyJoinColumn(name = "albumID")// this makes Album's primary key be "albumID" and it ref's Disco_Main's primary key, since Album extends Disco_Main
public class Album extends Discography_Main{


    //private int albumID;
    private int numOfSongs;
    private Time totalDuration;

    @OneToMany(mappedBy = "album")
    private List<IsIn> isInRelationships;

    public Album() {
    }

//    public int getAlbumID() {
//        return albumID;
//    }
//
//    public void setAlbumID(int albumID) {
//        this.albumID = albumID;
//    }

    public int getNumOfSongs() {
        return numOfSongs;
    }

    public void setNumOfSongs(int numOfSongs) {
        this.numOfSongs = numOfSongs;
    }

    public Time getDuration() {
        return totalDuration;
    }

    public void setDuration(Time duration) {
        this.totalDuration = duration;
    }
}