package com.musicmanagementsystem.service.DTO;

import lombok.Data;

@Data
public class AggHavingDTO {
    private String artistName;
    private String earliestReleaseDate;

    public AggHavingDTO(String artistName, String earliestReleaseDate) {
        this.artistName = artistName;
        this.earliestReleaseDate = earliestReleaseDate;
    }
}
