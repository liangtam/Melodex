package com.musicmanagementsystem.controller;

import com.musicmanagementsystem.controller.reqBodies.RecordLabelReqBody;
import com.musicmanagementsystem.service.interfaces.RecordLabelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/recordlabels/")
@CrossOrigin
public class RecordLabelController {

    @Autowired
    public RecordLabelService recordLabelService;

    @PostMapping("/add")
    public void addNewRecordLabel(@RequestBody RecordLabelReqBody reqBody) {
        recordLabelService.insertNewRecordLabel(reqBody.getWebsiteURL(), reqBody.getLabelName());
    }

}
