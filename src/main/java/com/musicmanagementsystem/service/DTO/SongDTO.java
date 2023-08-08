package com.musicmanagementsystem.service.DTO;

import lombok.Data;

import java.sql.Time;

@Data
public class SongDTO {
    private String songName;
    private Time duration;
    private String releaseDate;

    public SongDTO(String discoName, Time duration, String releaseDate) {
        songName = discoName;
        this.duration = duration;
        this.releaseDate = releaseDate;
    }
}
