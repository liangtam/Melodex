package com.musicmanagementsystem.repository;

import com.musicmanagementsystem.model.Artist_ContractedWith;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface Artist_ContractedWithRepository extends JpaRepository<Artist_ContractedWith, Integer> {

    String insertNewArtistQuery = "INSERT INTO Artist_ContractedWith (artistName, age, country, biography, numOfMembers, labelID) " +
            "VALUES (:artistName, :age, :country, :biography, :numOfMembers, :labelID)";

    @Modifying
    @Transactional
    @Query(value=insertNewArtistQuery, nativeQuery = true)
    public void insertNewArtist(@Param("artistName") String artistName, @Param("age") int age, @Param("country")String country,
                                @Param("biography") String biography, @Param("numOfMembers") int numOfMembers, @Param("labelID") int labelID);
}
