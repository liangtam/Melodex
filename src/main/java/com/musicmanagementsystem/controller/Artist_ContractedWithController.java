package com.musicmanagementsystem.controller;

import com.musicmanagementsystem.controller.reqBodies.Artist_ContractedWithBody;
import com.musicmanagementsystem.model.Artist_ContractedWith;
import com.musicmanagementsystem.service.interfaces.Artist_ContractedWithService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/artists")
@CrossOrigin
public class Artist_ContractedWithController {
    @Autowired
    public Artist_ContractedWithService artist_contractedWithService;

    @PostMapping("/add")
    public void addNewArtist(@RequestBody Artist_ContractedWithBody reqBody) {
        artist_contractedWithService.insertNewArtist(reqBody.getArtistName(), reqBody.getAge(), reqBody.getCountry(),
                reqBody.getBiography(), reqBody.getNumOfMembers(), reqBody.getLabelID());
        System.out.println("Added new artist!");
    }

    @GetMapping("/all")
    public List<Artist_ContractedWith> getAllArtists() {
        return artist_contractedWithService.getAllArtists();
    }
}
