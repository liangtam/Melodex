package com.musicmanagementsystem.service;

import com.musicmanagementsystem.model.RecordLabel;
import com.musicmanagementsystem.repository.RecordLabelRepository;
import com.musicmanagementsystem.service.interfaces.RecordLabelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecordLabelServiceImpl implements RecordLabelService {

    @Autowired
    private RecordLabelRepository recordLabelRepository;

    @Override
    public List<RecordLabel> getAllRecordLabels() {
        return null;
    }

    @Override
    public void insertNewRecordLabel(String websiteURL, String labelName) {
        recordLabelRepository.insertNewRecordLabel(websiteURL, labelName);
        System.out.println("Inserted new record label " + labelName + " !");
    }
}
