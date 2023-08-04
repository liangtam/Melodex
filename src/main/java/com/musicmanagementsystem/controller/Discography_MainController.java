package com.musicmanagementsystem.controller;

import com.musicmanagementsystem.model.Discography_Main;
import com.musicmanagementsystem.service.interfaces.Discography_MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/discography")
@CrossOrigin
public class Discography_MainController {
    @Autowired
    private Discography_MainService discography_mainService;

    @PostMapping("/add")
    public String addDiscography_Main(@RequestBody Discography_Main discography_main) {
        discography_mainService.saveDiscography_Main(discography_main);
        return "New discography added!";
    }

    @GetMapping("/all")
    public List<Discography_Main> getAllDiscography_Mains() {
        return discography_mainService.getAllDiscography_Main();
    }

    @DeleteMapping("/{id}")
    public String deleteDiscography_Main(@PathVariable int id) {
        discography_mainService.deleteDiscography_Main(id);
        return "Deleted discography with id: " + id;
    }
}
