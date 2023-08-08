package com.musicmanagementsystem.controller;

import com.musicmanagementsystem.service.interfaces.Discography_MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/discography")
@CrossOrigin
public class Discography_MainController {
    @Autowired
    private Discography_MainService discography_mainService;

    // DELETE OPERATION to submit
    @DeleteMapping("/{id}")
    public void deleteDiscoById(@PathVariable int id) {
        discography_mainService.deleteDiscoByID(id);
        System.out.println("Deleted discography with id " + id + " !");
    }
}
