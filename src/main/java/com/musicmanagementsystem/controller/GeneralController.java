package com.musicmanagementsystem.controller;

import com.musicmanagementsystem.service.interfaces.Artist_ContractedWithService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/general")
@CrossOrigin

public class GeneralController {
    @Autowired
    public Artist_ContractedWithService artist_contractedWithService;

    @Autowired
    private JdbcTemplate jdbcTemplate; // Autowire the JdbcTemplate

    @GetMapping("/")
    public String getDynamicSelection(@RequestParam String table, @RequestParam String attributes,
                                      @RequestParam String field1, @RequestParam String field2,
                                      @RequestParam String val1, @RequestParam Integer val2) {
//        if (reqBody.getAttributes().isEmpty() || reqBody.getVal1() == "" || reqBody.getVal2() == "") {
//            return null;
//        }
//
//        String attributesString = "";
//        for (int i = 0; i < reqBody.getAttributes().size(); i++) {
//            if (i == reqBody.getAttributes().size() - 1) {
//                attributesString += reqBody.getAttributes().get(i);
//            } else {
//                attributesString += (reqBody.getAttributes().get(i) + ", ");
//            }
//        }
//        System.out.println(attributesString);
//        System.out.println(reqBody.getTable());
//
//
//
//        String dynamicQuery = "SELECT " + attributesString + " FROM " + reqBody.getTable() + " WHERE " +
//        reqBody.getField1() + "=" + "'" + reqBody.getVal1() + "'" + " AND " + reqBody.getField2() + ">=" + reqBody.getVal2();

        if (table == "" || attributes == "" || field1 == "" || field2 == "" || val1 == "" || val2 == null) {
            return null;
        }

        String dynamicQuery = "SELECT DISTINCT " + attributes + " FROM " + table + " WHERE " +
        field1 + "=" + "'" + val1 + "'" + " AND " + field2 + ">=" + val2;
        System.out.println("Dynamic query: " + dynamicQuery); // this is just for me debugging

        List<Map<String, Object>> queryResult = jdbcTemplate.queryForList(dynamicQuery);

        List<JSONObject> jsonObjects = new ArrayList<>();
        for (Map<String, Object> row : queryResult) {
            JSONObject jsonObject = new JSONObject();
            for (Map.Entry<String, Object> entry : row.entrySet()) {
                System.out.println("Key: " + entry.getKey() + " Val: " + entry.getValue()); // this is just for me debugging
                jsonObject.put(entry.getKey(), entry.getValue());
            }
            jsonObjects.add(jsonObject);

        }
        System.out.println("JsonObjects: " + jsonObjects);


        return JSONObject.valueToString(jsonObjects);

    }

//    public List<JSONObject> parseObjsToJSON (List<Object> objects, List<String> attributes){
//        List<JSONObject> jsonObjects = new ArrayList<>();
//
//        for (int i = 0; i < objects.size(); i++) {
//            JSONObject jsonObj = new JSONObject();
//            jsonObj.put(attributes.get(i), objects.get(i));
//        }
//    }


}
