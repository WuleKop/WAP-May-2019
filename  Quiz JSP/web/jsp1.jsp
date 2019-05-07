<%-- 
    Document   : jsp1
    Created on : May 6, 2019, 7:44:30 PM
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
                <p>Age <input type="text" name="age" value=<%=session.getAttribute("Age")%> ></p>
                <% String next = (String) session.getAttribute("nextQuestion");
                String r = (String) session.getAttribute("right");%>  
                <p>Your Current Score is <%=r%>.</p>
                <p>Guess the next number in the sequence </p>
                <p><%=next%></p>
                <p>Your Answer <input type="text" name="answer"> </p>
                <p><input type="submit" value="Submit">  </p>                   
            </div>
        </form>      
    </body>
</html>
