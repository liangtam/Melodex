package com.musicmanagementsystem.service;

import com.musicmanagementsystem.model.Artist_ContractedWith;
import com.musicmanagementsystem.repository.Artist_ContractedWithRepository;
import com.musicmanagementsystem.service.interfaces.Artist_ContractedWithService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Artist_ContractedWithServiceImpl implements Artist_ContractedWithService {

    @Autowired
    private Artist_ContractedWithRepository artist_contractedWithRepository;

    @Override
    public void insertNewArtist(String artistName, int age, String country, String biography, int numOfMembers, int labelID) {
        artist_contractedWithRepository.insertNewArtist(artistName, age, country, biography, numOfMembers, labelID);
    }

    @Override
    public List<Artist_ContractedWith> getAllArtists() {
        return artist_contractedWithRepository.getAllArtists();
    }
}
