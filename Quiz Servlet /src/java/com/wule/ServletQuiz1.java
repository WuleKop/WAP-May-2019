/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.wule;

import java.io.IOException;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author wule
 */
public class ServletQuiz1 extends HttpServlet {
    
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html");
        String ans = request.getParameter("answer");
        HttpSession session = request.getSession();
       
        if (session.getAttribute("quiz") == null) {
            session.setAttribute("quiz", new Quiz());
        }
        Quiz q = (Quiz) session.getAttribute("quiz");
        int r = q.getI();
        if (r <= 4) {
            session.setAttribute("nextQuestion", q.getQuestion(r));
            session.setAttribute("right", Integer.toString(q.rightAnswer(ans)));
            RequestDispatcher rd = request.getRequestDispatcher("servletQuiz2");
            rd.forward(request, response);
        }
      
        else {
            session.setAttribute("right", Integer.toString(q.rightAnswer(ans)));
            q.reset();
            RequestDispatcher rd = request.getRequestDispatcher("servletQuiz3");
            rd.forward(request, response);     
            
            
        }

    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
       

    }

}