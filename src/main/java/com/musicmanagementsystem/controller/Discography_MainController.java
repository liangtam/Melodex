package com.musicmanagementsystem.controller;

import com.musicmanagementsystem.service.interfaces.Discography_MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/discography")
@CrossOrigin
public class Discography_MainController {
    @Autowired
    private Discography_MainService discography_mainService;


}
