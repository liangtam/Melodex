package com.musicmanagementsystem.model;

import com.musicmanagementsystem.model.compositeKeys.IsIn_CompositeKey;
import jakarta.persistence.*;
import org.springframework.web.bind.annotation.CrossOrigin;

// Relationship Set
@Entity
@CrossOrigin
public class IsIn {
    @EmbeddedId
    private IsIn_CompositeKey id;

    @ManyToOne
    @MapsId("albumID") // tie the object to part of the key
    @JoinColumn(name = "albumID")
    private Album album;

    @ManyToOne
    @MapsId("songID")
    @JoinColumn(name="songID")
    private Song song;


}
