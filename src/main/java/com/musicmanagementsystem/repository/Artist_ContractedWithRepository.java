package com.musicmanagementsystem.repository;

import com.musicmanagementsystem.model.Artist_ContractedWith;
import com.musicmanagementsystem.service.DTO.AggGroupByDTO;
import com.musicmanagementsystem.service.DTO.AggHavingDTO;
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
    String deleteArtistByIdQuery = " DELETE FROM Artist_ContractedWith WHERE artistID = :artistID";
    String nestAggregationQuery = "SELECT artistID\n" +
            "FROM Artist_ContractedWith A\n" +
            "WHERE (\n" +
            "    SELECT AVG(songCount)\n" +
            "    FROM (\n" +
            "        SELECT albumID,\n" +
            "               (SELECT COUNT(*) FROM Song S WHERE S.songID = Album.albumID) AS songCount\n" +
            "        FROM Album\n" +
            "        WHERE A.artistID = Album.albumID\n" +
            "    ) AS inner_query\n" +
            ") = \n" +
            "(\n" +
            "    SELECT MIN(avgSongs)\n" +
            "    FROM (\n" +
            "        SELECT artistID,\n" +
            "               AVG(\n" +
            "                   (SELECT COUNT(*) FROM Song S WHERE S.songID = Album.albumID)\n" +
            "               ) AS avgSongs\n" +
            "        FROM Album\n" +
            "        GROUP BY artistID\n" +
            "    ) AS overall_avg_query\n" +
            ");";
    String divisionQuery ="SELECT artistID \n" +
            "FROM Artist_ContractedWith A \n" +
            "WHERE NOT EXISTS (\n" +
            "    SELECT DISTINCT genre \n" +
            "    FROM Discography_Main D\n" +
            "    WHERE D.genre NOT IN (\n" +
            "        SELECT DISTINCT Dm.genre\n" +
            "        FROM Discography_Main Dm, Song S, Releases R\n" +
            "        WHERE Dm.dID = R.dID AND S.songID = R.dID AND R.artistID = A.artistID\n" +
            "    )\n" +
            ");\n";
//    String aggregationGroupByQuery = "SELECT R.artistID, COUNT(dID) AS numDiscography\n" +
//            "FROM Releases R\n" +
//            "GROUP BY R.artistID;";


    @Modifying
    @Transactional
    @Query(value=insertNewArtistQuery, nativeQuery = true)
    public void insertNewArtist(@Param("artistName") String artistName, @Param("age") int age, @Param("country")String country,
                                @Param("biography") String biography, @Param("numOfMembers") int numOfMembers, @Param("labelID") Integer labelID);

    @Query(value=getAllArtistsQuery, nativeQuery = true)
    public List<Artist_ContractedWith> getAllArtists();

    @Modifying
    @Transactional
    @Query(value=updateArtistQuery, nativeQuery = true)
    public void updateArtist(@Param("artistID") int artistID, @Param("artistName") String artistName, @Param("age") int age, @Param("country")String country,
                             @Param("biography") String biography, @Param("numOfMembers") int numOfMembers, @Param("labelID") Integer labelID);

    // SELECTION OPERATION to submit
    @Query(value = dynamicSelection, nativeQuery = true)
    List<Object> getDynamicSelection(@Param("table") String table, @Param("attributes") String attributes);

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO Releases (artistID, dID) VALUES (:artistID, :dID)", nativeQuery = true)
    public void releaseDiscography(@Param("artistID") Integer albumID, @Param("dID") Integer discoID);

    @Modifying
    @Transactional
    @Query(value=deleteArtistByIdQuery, nativeQuery = true)
    public void deleteArtistById(@Param("artistID") Integer artistID);



    // NESTED AGGRE
    @Query(value = nestAggregationQuery, nativeQuery = true)
    public List<Integer> nestedAggregation();

    // DIVISION
    @Query(value = divisionQuery, nativeQuery = true)
    public List<Integer> division();

    // AGGRE GROUP BY
    //@Query(value = aggregationGroupByQuery, nativeQuery = true)
    @Query(name="Artist_ContractedWith.aggregationGroupBy", nativeQuery = true)
    public List<AggGroupByDTO> aggregationGroupBy();

    // AGGRE HAVING
    @Query(name="Artist_ContractedWith.aggregationHaving", nativeQuery = true)
    public List<AggHavingDTO> aggregationHaving();



}
