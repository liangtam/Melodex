package com.musicmanagementsystem.service.interfaces;

import com.musicmanagementsystem.model.Album;

import java.util.List;

public interface AlbumService {
    public Album saveAlbum(Album album);
    public List<Album> getAllAlbums();
    public void deleteAlbum(int id);
}
