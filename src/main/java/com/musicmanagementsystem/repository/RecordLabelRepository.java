package com.musicmanagementsystem.repository;

import com.musicmanagementsystem.model.RecordLabel;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface RecordLabelRepository extends JpaRepository<RecordLabel, Integer> {

    String insertNewRecordLabelQuery = "INSERT INTO RecordLabel (websiteURL, labelName) VALUES (:websiteURL, :labelName);";

    @Modifying
    @Transactional
    @Query(value=insertNewRecordLabelQuery, nativeQuery = true)
    public void insertNewRecordLabel(@Param("websiteURL") String websiteURL, @Param("labelName") String labelName);
}
