package com.musicmanagementsystem.service.interfaces;

import com.musicmanagementsystem.model.Artist_ContractedWith;
import com.musicmanagementsystem.service.DTO.AggGroupByDTO;

import java.util.List;

public interface Artist_ContractedWithService {

    public void insertNewArtist(String artistName, int age, String country, String biography, int numOfMembers, int labelID);

    public List<Artist_ContractedWith> getAllArtists();

    public void updateArtist(int artistID, String artistName, int age, String country, String biography, int numOfMembers, int labelID);

    List<Object> getDynamicSelection(String table, String attributes);

    public void releaseDiscography(int artistID, int discoID);

    public List<Integer> nestedAggregation();

    public List<Integer> division();

    public List<AggGroupByDTO> aggregationGroupBy();
}
