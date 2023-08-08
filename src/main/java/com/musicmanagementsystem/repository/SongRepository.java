package com.musicmanagementsystem.repository;

import com.musicmanagementsystem.model.Song;
import com.musicmanagementsystem.service.DTO.SongDTO;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SongRepository extends JpaRepository<Song, Integer> {

    @Query(nativeQuery = true)
    public List<SongDTO> getAllSongs();

    @Modifying // for INSERT, UPDATE, DELETE queries
    @Transactional
    @Query(value = "INSERT INTO IsIn (albumID, songID) VALUES (:albumID, :songID)", nativeQuery = true)
    public void addSongToAlbum(@Param("albumID") Integer albumID, @Param("songID") Integer songID);
}

