package com.musicmanagementsystem.repository;

import com.musicmanagementsystem.model.Album;
import com.musicmanagementsystem.service.DTO.AlbumDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AlbumRepository extends JpaRepository<Album, Integer> {
//    String sqlAllAlbumName = "SELECT NEW com.musicmanagementsystem.service.DTO.AlbumDTO(A.discoName, A.numOfSongs, A.totalDuration, A.releaseDate) " +
//            "FROM Album A";

    @Query(nativeQuery = true)
    List<AlbumDTO> getAllAlbums();
}


