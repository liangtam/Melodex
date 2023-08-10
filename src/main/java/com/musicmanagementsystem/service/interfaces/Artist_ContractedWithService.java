package com.musicmanagementsystem.service.interfaces;

import com.musicmanagementsystem.model.Artist_ContractedWith;
import com.musicmanagementsystem.service.DTO.AggGroupByDTO;
import com.musicmanagementsystem.service.DTO.AggHavingDTO;

import java.util.List;
import java.util.Optional;

public interface Artist_ContractedWithService {

    public void insertNewArtist(String artistName, int age, String country, String biography, int numOfMembers, Integer labelID);

    public List<Artist_ContractedWith> getAllArtists();

    public void updateArtist(int artistID, String artistName, int age, String country, String biography, int numOfMembers, Integer labelID);

    List<Object> getDynamicSelection(String table, String attributes);

    public void releaseDiscography(int artistID, int discoID);

    public List<Integer> nestedAggregation();

    public List<Integer> division();

    public List<AggGroupByDTO> aggregationGroupBy();

    public List<AggHavingDTO> aggregationHaving();

    public void deleteArtistById(Integer artistID);

    public Optional<Artist_ContractedWith> findArtistById(int id);
}