package com.musicmanagementsystem.controller;

import com.musicmanagementsystem.controller.reqBodies.ArtistReleaseDiscoReqBody;
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

    // UPDATE OPERATION to submit
    @PatchMapping("/update/{id}")
    public void updateArtist(@PathVariable int id, @RequestBody Artist_ContractedWithBody reqBody) {
        artist_contractedWithService.updateArtist(id, reqBody.getArtistName(), reqBody.getAge(), reqBody.getCountry(),
                reqBody.getBiography(), reqBody.getNumOfMembers(), reqBody.getLabelID());
        System.out.println("Updated artist!");
    }

    @PostMapping("/releases")
    public void releaseDiscography(@RequestBody ArtistReleaseDiscoReqBody reqBody) {
        artist_contractedWithService.releaseDiscography(reqBody.getArtistID(), reqBody.getdID());
        System.out.println("Released discography!");
    }

    // finds ids of all artists whose avg num of songs released per album is the lowest among all artists
    @GetMapping("/nestedaggregation")
    public List<Integer> nestedAggregation() {
        return artist_contractedWithService.nestedAggregation();
    }

    // finds ids of all artists who have covered every single genre
    @GetMapping("/division")
    public List<Integer> division() {
        return artist_contractedWithService.division();
    }
}
