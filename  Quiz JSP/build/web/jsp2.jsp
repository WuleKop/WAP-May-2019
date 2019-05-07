<%-- 
    Document   : jsp2
    Created on : May 6, 2019, 7:44:42 PM
    Author     : wule
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>The Number Quiz</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>  
        <form method="post" action="servletQuiz1"  name="frm">
            <div style="border: 2px darkblue solid; margin: 100px;width: 500px;padding: 50px" ><h1>The Number Quiz</h1>  

                <%  String r = (String) session.getAttribute("right");%>  
                <p>Your Current Score is <%=r%>.</p>
                <p>You have completed the Number Quiz, with a score of <%=r%> out of 5. </p>

            </div>
        </form>      
    </body>
</html>