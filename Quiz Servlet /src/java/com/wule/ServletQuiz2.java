/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.wule;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author wule
 */
public class ServletQuiz2 extends HttpServlet {

    

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
       
    }

    
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html");
        HttpSession session=request.getSession();
        String next = (String)session.getAttribute("nextQuestion");  
        String r = (String)session.getAttribute("right"); 
        PrintWriter out=response.getWriter();
        out.println("<html>\n" +
"    <head>\n" +
"        <title>The Number Quiz</title>\n" +
"        <meta charset=\"UTF-8\">\n" +
"        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
"    </head>\n" +
"    <body>\n" +
"         <form method=\"post\" action=\"servletQuiz1\" name=\"frm\">\n" +
"        <div style=\"border: 2px darkblue solid; margin: 100px;width: 500px;padding: 50px\" ><h1>The Number Quiz</h1>\n" +
"            <p>Your Current Score is "+r+".</p>\n" +
"            <p>Guess the next number in the sequence.</p>\n" +
"            <p>"+next+"</p>           \n" +
"                <p>Your answer: <input type=\"text\" name=\"answer\"></p>\n" +
"                <input type=\"submit\" value=\"Submit\">    \n" +
"               \n" +
"        </div>\n" +
"      </form>\n" +
"    </body>\n" +
"</html>\n" 
               
        );
        
        
       
    }

    
  

}