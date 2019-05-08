<%-- 
    Document   : result
    Created on : May 7, 2019, 5:39:33 PM
    Author     : wule
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"  import="java.util.*" %>
<%@ taglib prefix='c' uri='http://java.sun.com/jsp/jstl/core' %>
<!DOCTYPE html>
<html>
    <body>
        <h1 align="center">Beer Recommendations JSP</h1>
        <p>
            
            <c:forEach var="style" items="${styles}">                                    
                    <br>try: ${style}
                </c:forEach>       
                
                
                    
                </p>
    </body>
</html>



