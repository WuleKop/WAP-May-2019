/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package wule.calc;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author wule
 */
public class Calculator extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
       PrintWriter out=response.getWriter();
       String n1 = request.getParameter("add1");
       String n2 = request.getParameter("add2");
       String n3 = request.getParameter("mult1");
       String n4 = request.getParameter("mult2");
       int a1 = Integer.parseInt(n1);
       int a2=  Integer.parseInt(n2);
       int a3 = Integer.parseInt(n3);
       int a4=  Integer.parseInt(n4);
       out.write("<html>");
       out.write("<head>");
       out.write("<title>Simple Calculator</title>"); 
       out.write("</head>");    
       out.write("<body>");
       out.write("<form >"); 
       out.write("<div><input type=\"text\" value=\""+a1+"\"> + <input type=\"text\" value=\""+a2+"\"> = <input type=\"text\" value=\""+(a1+a2)+"\"><br>");   
       out.write("<div><input type=\"text\" value=\""+a3+"\"> * <input type=\"text\" value=\""+a4+"\"> = <input type=\"text\" value=\""+(a3*a4)+"\"><br>");    
       out.write("<input type=\"submit\" value=\"Submit\">");      
       out.write("</div>");
       out.write("</form>");
       out.write("</body>");
       out.write("</html>");      
       
    }
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        doPost(request,response);
    }

    
 

}
