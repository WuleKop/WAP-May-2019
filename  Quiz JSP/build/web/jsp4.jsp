<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <title>The Number Quiz</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>  
        <form method="post" action="servletQuiz1"  name="frm">
            <div style="border: 2px darkblue solid; margin: 100px;width: 500px;padding: 50px" ><h1>The Number Quiz</h1>  
                <p>Age <input type="text" name="age"> <span style="color: red"> the age should be between 4 and 100</span></p>
                <p>Your Current Score is 0.</p>
                <p>Guess the next number in the sequence </p>
                <p>3,1,4,1,5.</p>
                <p>Your Answer <input type="text" name="answer"> </p>
                <p><input type="submit" value="Submit">  </p>                   
            </div>
        </form>      
    </body>
</html>
