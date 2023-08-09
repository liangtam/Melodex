package com.musicmanagementsystem.service.DTO;

import lombok.Data;

@Data
public class AggGroupByDTO {
    private int artistID;
    private int numOfDiscography;

    public AggGroupByDTO(int artistID, int numOfDiscography) {
        this.artistID = artistID;
        this.numOfDiscography = numOfDiscography;
    }
}
