package com.musicmanagementsystem.repository;

import com.musicmanagementsystem.model.Discography_Main;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Discography_MainRepository extends JpaRepository<Discography_Main, Integer> {
}
