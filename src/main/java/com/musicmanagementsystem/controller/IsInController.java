package com.musicmanagementsystem.controller;

import com.musicmanagementsystem.model.IsIn;
import com.musicmanagementsystem.service.interfaces.IsInService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/isin")
public class IsInController {
    @Autowired
    public IsInService isInService;

    @GetMapping("/all")
    public List<IsIn> getAllIsInRelationships() {
        return isInService.getAllIsInRelationships();
    }
}
