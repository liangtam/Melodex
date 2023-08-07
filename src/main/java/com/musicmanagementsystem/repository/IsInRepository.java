package com.musicmanagementsystem.repository;

import com.musicmanagementsystem.model.IsIn;
import com.musicmanagementsystem.model.compositeKeys.IsIn_CompositeKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IsInRepository extends JpaRepository<IsIn, IsIn_CompositeKey> {
    public String getAllRelationshipsSQLScript = "SELECT * FROM IsIn";

    @Query(value=getAllRelationshipsSQLScript, nativeQuery = true)
    public List<IsIn> getAllIsInRelationships();
}