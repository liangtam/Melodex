package com.musicmanagementsystem.model;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;

import java.sql.Time;
import java.util.Set;

//@NamedNativeQuery(name="Song.getAllSongs",
//        query="SELECT D.discoName, S.duration, D.releaseDate " +
//                "FROM Song S, Discography_Main D WHERE S.songID = D.dID",
//        resultSetMapping="Mapping.SongDTO")
//
//@SqlResultSetMapping(name="Mapping.SongDTO",
//        classes = @ConstructorResult(targetClass = SongDTO.class,
//                columns={@ColumnResult(name="discoName"),
//                        @ColumnResult(name="duration"),
//                        @ColumnResult(name="releaseDate")}))

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
