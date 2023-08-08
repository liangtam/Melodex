package com.musicmanagementsystem.service.interfaces;

import com.musicmanagementsystem.model.Artist_ContractedWith;

import java.util.List;

public interface Artist_ContractedWithService {

    public void insertNewArtist(String artistName, int age, String country, String biography, int numOfMembers, int labelID);

    public List<Artist_ContractedWith> getAllArtists();
}
