package com.musicmanagementsystem.controller.reqBodies;

public class RecordLabelReqBody {
    private String websiteURL;
    private String labelName;

    public RecordLabelReqBody() {

    }

    public String getWebsiteURL() {
        return websiteURL;
    }

    public void setWebsiteURL(String websiteURL) {
        this.websiteURL = websiteURL;
    }

    public String getLabelName() {
        return labelName;
    }

    public void setLabelName(String labelName) {
        this.labelName = labelName;
    }
}
