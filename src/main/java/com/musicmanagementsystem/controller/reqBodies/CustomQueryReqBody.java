package com.musicmanagementsystem.controller.reqBodies;

import java.util.List;

public class CustomQueryReqBody {
    private String table;
    private List<String> attributes;

    public CustomQueryReqBody() {

    }

    public String getTable() {
        return table;
    }

    public void setTable(String table) {
        this.table = table;
    }

    public List<String> getAttributes() {
        return attributes;
    }

    public void setAttributes(List<String> attributes) {
        this.attributes = attributes;
    }
}
