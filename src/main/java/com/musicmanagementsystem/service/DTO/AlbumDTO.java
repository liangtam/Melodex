
package com.musicmanagementsystem.service.DTO;

import lombok.Data;

import java.sql.Time;

@Data
public class AlbumDTO {

    private String discoName;
    private String genre;
    private Integer numOfSongs;
    private Time totalDuration;
    private String releaseDate;

    public AlbumDTO(String discoName, String genre, Integer numOfSongs, Time totalDuration, String releaseDate) {
        this.discoName = discoName;
        this.genre = genre;
        this.numOfSongs = numOfSongs;
        this.totalDuration = totalDuration;
        this.releaseDate = releaseDate;
    }

}
