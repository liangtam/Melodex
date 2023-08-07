package com.musicmanagementsystem.service;

import com.musicmanagementsystem.model.Discography_Main;
import com.musicmanagementsystem.repository.Discography_MainRepository;
import com.musicmanagementsystem.service.interfaces.Discography_MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Discography_MainServiceImplementation implements Discography_MainService {

    @Autowired
    public Discography_MainRepository discography_mainRepository;

}
