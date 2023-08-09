package com.musicmanagementsystem.repository;

import com.musicmanagementsystem.model.Discography_Main;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface Discography_MainRepository extends JpaRepository<Discography_Main, Integer> {
    String insertNewDiscoQuery = "INSERT INTO Discography_Main (discoName, genre, releaseDate) VALUES (:discoName, :genre, :releaseDate)";
    String deleteDiscoByIDQuery = "DELETE FROM Discography_Main WHERE dID = :dID";


    // INSERT OPERATION submitted
    @Modifying
    @Transactional
    @Query(value = insertNewDiscoQuery, nativeQuery = true)
    void insertNewDisco(@Param("discoName") String discoName,
                        @Param("genre") String genre, @Param("releaseDate") String releaseDate);

    // DELETE OPERATION submitted
    @Modifying
    @Transactional
    @Query(value = deleteDiscoByIDQuery, nativeQuery = true)
    void deleteDiscoByID(@Param("dID") int dID);
}
