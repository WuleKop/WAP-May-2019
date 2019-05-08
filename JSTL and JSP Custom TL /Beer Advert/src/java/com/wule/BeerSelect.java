/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.wule;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.util.List;

public class BeerSelect extends HttpServlet {

    @Override
    public void doPost(HttpServletRequest request,
            HttpServletResponse response)
            throws IOException, ServletException {
        String c = request.getParameter("color");
        BeerExpert be = new BeerExpert();
        List result = be.getBrands(c);
        request.setAttribute("styles", result);
        RequestDispatcher view
                = request.getRequestDispatcher("result.jsp");
        view.forward(request, response);

    }
}

