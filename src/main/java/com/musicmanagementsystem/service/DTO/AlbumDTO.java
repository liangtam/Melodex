
package com.musicmanagementsystem.service.DTO;

import lombok.Data;

import java.sql.Time;

@Data
public class AlbumDTO {

    private String albumName;
    private Integer numOfSongs;
    private Time totalDuration;
    private String releaseDate;

    public AlbumDTO(String discoName, Integer numOfSongs, Time totalDuration, String releaseDate) {
        albumName = discoName;
        this.numOfSongs = numOfSongs;
        this.totalDuration = totalDuration;
        this.releaseDate = releaseDate;
    }

}
