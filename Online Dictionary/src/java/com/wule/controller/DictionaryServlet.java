/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.wule.controller;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.wule.dao.DictionaryDao;
import com.wule.model.Entries;
import java.io.IOException;
import java.util.List;
import com.google.gson.Gson;

/**
 *
 * @author wule
 */
public class DictionaryServlet extends HttpServlet {

    DictionaryDao dao = new DictionaryDao();
    

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String d = request.getParameter("search");
        List<Entries> entriesList = dao.searchWord(d);
        String json = new Gson().toJson(entriesList);
        System.out.println(json);        
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        System.out.println(json);
        response.getWriter().write(json);       
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

    }

}
