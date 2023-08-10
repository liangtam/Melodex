package com.musicmanagementsystem.service;

import com.musicmanagementsystem.model.Artist_ContractedWith;
import com.musicmanagementsystem.repository.Artist_ContractedWithRepository;
import com.musicmanagementsystem.service.DTO.AggGroupByDTO;
import com.musicmanagementsystem.service.DTO.AggHavingDTO;
import com.musicmanagementsystem.service.interfaces.Artist_ContractedWithService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class Artist_ContractedWithServiceImpl implements Artist_ContractedWithService {

    @Autowired
    private Artist_ContractedWithRepository artist_contractedWithRepository;

    @Override
    public void insertNewArtist(String artistName, int age, String country, String biography, int numOfMembers, Integer labelID) {
        artist_contractedWithRepository.insertNewArtist(artistName, age, country, biography, numOfMembers, labelID);
    }

    @Override
    public List<Artist_ContractedWith> getAllArtists() {
        return artist_contractedWithRepository.getAllArtists();
    }

    @Override
    public void updateArtist(int artistID, String artistName, int age, String country, String biography, int numOfMembers, Integer labelID) {
        artist_contractedWithRepository.updateArtist(artistID, artistName, age, country, biography, numOfMembers, labelID);
    }

    @Override
    public List<Object> getDynamicSelection(String table, String attributes) {
        return artist_contractedWithRepository.getDynamicSelection(table, attributes);
    }

    @Override
    public void releaseDiscography(int artistID, int discoID) {
        artist_contractedWithRepository.releaseDiscography(artistID, discoID);
    }

    @Override
    public List<Integer> nestedAggregation() {
        return artist_contractedWithRepository.nestedAggregation();
    }

    @Override
    public List<Integer> division() {
        return artist_contractedWithRepository.division();
    }

    @Override
    public List<AggGroupByDTO> aggregationGroupBy() {
        return artist_contractedWithRepository.aggregationGroupBy();
    }

    @Override
    public List<AggHavingDTO> aggregationHaving() {
        return artist_contractedWithRepository.aggregationHaving();
    }

    @Override
    public void deleteArtistById(Integer artistID) {
        artist_contractedWithRepository.deleteArtistById(artistID);
    }

    @Override
    public Optional<Artist_ContractedWith> findArtistById(int id) {
        return artist_contractedWithRepository.findById(id);
    }
}
