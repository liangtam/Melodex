package com.musicmanagementsystem.service;

import com.musicmanagementsystem.repository.Discography_MainRepository;
import com.musicmanagementsystem.service.interfaces.Discography_MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Discography_MainServiceImplementation implements Discography_MainService {

    @Autowired
    private Discography_MainRepository discography_mainRepository;

    @Override
    public void deleteDiscoByID(int dID) {
        discography_mainRepository.deleteDiscoByID(dID);
    }

}
