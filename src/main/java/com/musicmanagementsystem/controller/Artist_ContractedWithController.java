package com.musicmanagementsystem.controller;

import com.musicmanagementsystem.controller.reqBodies.ArtistReleaseDiscoReqBody;
import com.musicmanagementsystem.controller.reqBodies.Artist_ContractedWithBody;
import com.musicmanagementsystem.model.Artist_ContractedWith;
import com.musicmanagementsystem.service.DTO.AggGroupByDTO;
import com.musicmanagementsystem.service.DTO.AggHavingDTO;
import com.musicmanagementsystem.service.interfaces.Artist_ContractedWithService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/artists")
@CrossOrigin
public class Artist_ContractedWithController {
    @Autowired
    public Artist_ContractedWithService artist_contractedWithService;

    @Autowired
    public JdbcTemplate jdbcTemplate;

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

    @DeleteMapping("/{id}")
    public void deleteArtistById(@PathVariable Integer id) {
        artist_contractedWithService.deleteArtistById(id);
        System.out.println("Deleted artist!");
    }

    @GetMapping("/{id}")
    public Optional<Artist_ContractedWith> findArtistById(@PathVariable Integer id) {
        return artist_contractedWithService.findArtistById(id);
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

    // Find the number of discographies released by each artist (count)
    @GetMapping("/aggregationgroupby")
    public List<AggGroupByDTO> aggregationGroupBy() {
        return artist_contractedWithService.aggregationGroupBy();
    }

    // For each artist who have released more than 1 discographies, find the earliest release date
    @GetMapping("/aggregationhaving")
    public List<AggHavingDTO> aggregationHaving() {
        return artist_contractedWithService.aggregationHaving();
    }

    @GetMapping("/projection/")
    public String projection(@RequestParam String attributes) {

        if (attributes == "") {
            return null;
        }

//        String attributesString = "";
//        for (int i = 0; i < attributes.size(); i++) {
//            if (i == attributes.size() - 1) {
//                attributesString += attributes.get(i);
//            } else {
//                attributesString += (attributes.get(i) + ", ");
//            }
//        }
//        System.out.println("Attributes string: " + attributesString);

        String dynamicQuery = "SELECT " + attributes + " FROM Artist_ContractedWith";
        System.out.println("Dynamic query: " + dynamicQuery); // this is just for me debugging

        List<Map<String, Object>> queryResult = jdbcTemplate.queryForList(dynamicQuery);

        List<JSONObject> jsonObjects = new ArrayList<>();
        for (Map<String, Object> row : queryResult) {
            JSONObject jsonObject = new JSONObject();
            for (Map.Entry<String, Object> entry : row.entrySet()) {
                System.out.println("Key: " + entry.getKey() + " Val: " + entry.getValue()); // this is just for me debugging
                jsonObject.put(entry.getKey(), entry.getValue());
            }
            jsonObjects.add(jsonObject);

        }
        System.out.println("JsonObjects: " + jsonObjects);


        return JSONObject.valueToString(jsonObjects);

    }
}
