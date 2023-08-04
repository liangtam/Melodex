package com.musicmanagementsystem.service.interfaces;

import com.musicmanagementsystem.model.Discography_Main;

import java.util.List;

public interface Discography_MainService {
    public Discography_Main saveDiscography_Main(Discography_Main discography);
    public List<Discography_Main> getAllDiscography_Main();
    public void deleteDiscography_Main(int id);
}
