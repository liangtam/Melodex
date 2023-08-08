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
    String insertNewDisco = "INSERT INTO Discography_Main (discoName, genre, releaseDate, numOfLikes) VALUES (:discoName, :genre, :releaseDate, :numOfLikes)";

    @Modifying
    @Transactional
    @Query(value = insertNewDisco, nativeQuery = true)
    void insertNewDisco(@Param("discoName") String discoName,
                        @Param("genre") String genre, @Param("releaseDate") String releaseDate, @Param("numOfLikes") int numOfLikes);
}