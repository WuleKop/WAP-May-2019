/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.wule.dao;

import com.wule.model.Entries;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author wule
 */
public class DictionaryDao {

    static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
    static final String DB_URL = "jdbc:mysql://localhost:3306/entries?useSSL=false&serverTimezone=UTC";
    static final String USER = "root";
    static final String PASS = "@livger8";
    Connection conn;
    Statement stmt;

    public List<Entries> searchWord(String word) {

            List<Entries> entriesList=new ArrayList<>();
            try {
                // Register JDBC driver
                Class.forName("com.mysql.jdbc.Driver");

                // Open a connection
                conn = DriverManager.getConnection(DB_URL, USER, PASS);

                // Execute SQL query
                stmt = conn.createStatement();
                
                String sql;
                sql = "SELECT * FROM entries.entries where word = '" + word + "'";
                ResultSet rs = stmt.executeQuery(sql);

                // Extract data from result set
                while (rs.next()) {
                    //Retrieve by column name
                    Entries f = new Entries(rs.getString("word").trim(), rs.getString("wordtype").trim(),
                       rs.getString("definition").trim());
                       entriesList.add(f);

                }

                // Clean-up environment
                rs.close();
                stmt.close();
                conn.close();
            } catch (SQLException se) {
                //Handle errors for JDBC
                se.printStackTrace();
            } catch (Exception e) {
                //Handle errors for Class.forName
                e.printStackTrace();
            } finally {
                //finally block used to close resources
                try {
                    if (stmt != null) {
                        stmt.close();
                    }
                } catch (SQLException se2) {
                } // nothing we can do
                try {
                    if (conn != null) {
                        conn.close();
                    }
                } catch (SQLException se) {
                    se.printStackTrace();
                } //end finally try
            } //end try
       return entriesList;
        }
}
