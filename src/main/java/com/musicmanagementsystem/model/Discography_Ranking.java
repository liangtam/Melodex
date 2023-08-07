package com.musicmanagementsystem.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import org.springframework.web.bind.annotation.CrossOrigin;

@Entity
@CrossOrigin
public class Discography_Ranking {
    @Id
    private int numOfLikes;
    private int ranking;

    public Discography_Ranking() {

    }

    public int getNumOfLikes() {
        return numOfLikes;
    }

    public void setNumOfLikes(int numOfLikes) {
        this.numOfLikes = numOfLikes;
    }

    public int getRanking() {
        return ranking;
    }

    public void setRanking(int ranking) {
        this.ranking = ranking;
    }
}
