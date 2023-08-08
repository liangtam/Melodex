package com.musicmanagementsystem.service.interfaces;

import com.musicmanagementsystem.model.RecordLabel;

import java.util.List;

public interface RecordLabelService {

    public List<RecordLabel> getAllRecordLabels();

    public void insertNewRecordLabel(String labelName, String websiteURL);
}
