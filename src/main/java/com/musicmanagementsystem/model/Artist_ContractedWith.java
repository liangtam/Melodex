package com.musicmanagementsystem.model;

import com.musicmanagementsystem.service.DTO.AggGroupByDTO;
import com.musicmanagementsystem.service.DTO.AggHavingDTO;
import jakarta.persistence.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Set;


@NamedNativeQuery(name="Artist_ContractedWith.aggregationGroupBy",
        query="SELECT R.artistID, COUNT(dID) AS numOfDiscography\n" +
                "FROM Releases R\n" +
                "GROUP BY R.artistID;",
        resultSetMapping="Mapping.AggGroupByDTO")
@NamedNativeQuery(name="Artist_ContractedWith.aggregationHaving",
        query="SELECT A.artistName, MIN(D.releaseDate) as earliestReleaseDate\n" +
                "FROM Artist_ContractedWith A, Discography_Main D, Releases R\n" +
                "GROUP BY A.artistName\n" +
                "HAVING COUNT(D.dID) > 1;",
        resultSetMapping="Mapping.AggHavingDTO")
@SqlResultSetMapping(name="Mapping.AggGroupByDTO",
                classes = @ConstructorResult(targetClass = AggGroupByDTO.class,
                columns={@ColumnResult(name="artistID", type=Integer.class),
                        @ColumnResult(name="numOfDiscography", type=Integer.class)}))
@SqlResultSetMapping(name="Mapping.AggHavingDTO",
        classes = @ConstructorResult(targetClass = AggHavingDTO.class,
                columns={@ColumnResult(name="artistName"),
                        @ColumnResult(name="earliestReleaseDate")}))
@Entity
@CrossOrigin
public class Artist_ContractedWith {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private int artistID;
    private String artistName;
    private int age;
    private String country;
    private String biography;
    private int numOfMembers;

    @ManyToOne
    @JoinColumn(name = "labelID", referencedColumnName = "labelID", nullable = true)
    private RecordLabel recordLabel;

    @ManyToMany
    @JoinTable(
            name="Releases",
            joinColumns = @JoinColumn(name="artistID"), // connects to owner side of relationship. We chose artist to be owner in this case
            inverseJoinColumns = @JoinColumn(name="dID") // connects to the other side of the relationship
    )
    Set<Discography_Main> discographyReleases;

    public int getArtistID() {
        return artistID;
    }

    public void setArtistID(int artistID) {
        this.artistID = artistID;
    }

    public String getArtistName() {
        return artistName;
    }

    public void setArtistName(String artistName) {
        this.artistName = artistName;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getBiography() {
        return biography;
    }

    public void setBiography(String biography) {
        this.biography = biography;
    }

    public int getNumOfMembers() {
        return numOfMembers;
    }

    public void setNumOfMembers(int numOfMembers) {
        this.numOfMembers = numOfMembers;
    }

    public RecordLabel getRecordLabel() {
        return recordLabel;
    }

    public void setRecordLabel(RecordLabel recordLabel) {
        this.recordLabel = recordLabel;
    }
}
