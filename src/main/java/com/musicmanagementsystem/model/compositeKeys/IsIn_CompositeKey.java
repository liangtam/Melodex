package com.musicmanagementsystem.model.compositeKeys;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Data;

import java.io.Serializable;
@Data

@Embeddable
public class IsIn_CompositeKey implements Serializable {
    @Column(name="albumID")
    private int albumID;
    @Column(name="songID")
    private int songID;
}
