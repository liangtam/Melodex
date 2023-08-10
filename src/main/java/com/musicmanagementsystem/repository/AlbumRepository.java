package com.musicmanagementsystem.repository;

import com.musicmanagementsystem.model.Album;
import com.musicmanagementsystem.service.DTO.AlbumDTO;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.sql.Time;
import java.util.List;

@Repository
public interface AlbumRepository extends JpaRepository<Album, Integer> {

    String insertNewAlbum = "INSERT INTO Album (albumID, numOfSongs, totalDuration) VALUES (LAST_INSERT_ID(), :numOfSongs, :totalDuration);";
    String getAllAlbumsIncludingIDQuery = "SELECT * FROM Album A, Discography_Main D WHERE A.albumID = D.dID";
    String getAllAlbumsWithNameQuery = "SELECT * " +
                                        "FROM Album A, Discography_Main D " +
                                        "WHERE A.albumID = D.dID AND D.discoName = :discoName";

    @Query(value=getAllAlbumsIncludingIDQuery, nativeQuery = true)
    List<Album> getAllAlbums();

    @Modifying
    @Transactional
    @Query(value = insertNewAlbum, nativeQuery = true)
    void insertNewAlbum(@Param("numOfSongs") int numOfSongs, @Param("totalDuration") Time totalDuration);


    // JOIN OPERATION to submit
    @Query(value = getAllAlbumsWithNameQuery, nativeQuery = true)
    List<Album> getAllAlbumsWithName(@Param("discoName") String discoName);

    //
    @Query(name="Album.bloop", nativeQuery = true)
    List<AlbumDTO> getAllAlbumsNoId();


}


