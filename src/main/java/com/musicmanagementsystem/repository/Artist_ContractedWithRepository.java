package com.musicmanagementsystem.repository;

import com.musicmanagementsystem.model.Artist_ContractedWith;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface Artist_ContractedWithRepository extends JpaRepository<Artist_ContractedWith, Integer> {

    String insertNewArtistQuery = "INSERT INTO Artist_ContractedWith (artistName, age, country, biography, numOfMembers, labelID) " +
            "VALUES (:artistName, :age, :country, :biography, :numOfMembers, :labelID)";
    String getAllArtistsQuery = "SELECT * FROM Artist_ContractedWith";
    String updateArtistQuery = "UPDATE Artist_ContractedWith " +
            "SET artistName= :artistName, age=:age, country=:country, biography=:biography, numOfMembers=:numOfMembers, labelID=:labelID " +
            "WHERE Artist_ContractedWith.artistID= :artistID";
    String dynamicSelection = "SELECT :attributes FROM :table ";


    @Modifying
    @Transactional
    @Query(value=insertNewArtistQuery, nativeQuery = true)
    public void insertNewArtist(@Param("artistName") String artistName, @Param("age") int age, @Param("country")String country,
                                @Param("biography") String biography, @Param("numOfMembers") int numOfMembers, @Param("labelID") int labelID);

    @Query(value=getAllArtistsQuery, nativeQuery = true)
    public List<Artist_ContractedWith> getAllArtists();

    @Modifying
    @Transactional
    @Query(value=updateArtistQuery, nativeQuery = true)
    public void updateArtist(@Param("artistID") int artistID, @Param("artistName") String artistName, @Param("age") int age, @Param("country")String country,
                             @Param("biography") String biography, @Param("numOfMembers") int numOfMembers, @Param("labelID") int labelID);

    // SELECTION OPERATION to submit
    @Query(value = dynamicSelection, nativeQuery = true)
    List<Object> getDynamicSelection(@Param("table") String table, @Param("attributes") String attributes);


}
