/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* 
    Created on : May 20, 2019, 4:03:26 PM
    Author     : wule
*/
$(document).ready(function () {
     $('#loading').hide();
     $("#mydiv").hide();   
     
    $("#mysubmit").click(function () {        
        $('#loading').show();
        event.preventDefault();
        var word = $("#mytext").val();
        $.ajax({
            type: "GET",
            url: 'dictionaryServlet',
            data: {'search': word},
            success: function (resp) {
                $("#mydiv").html("");
                var result = "";
                if (resp.length === 0) {
                    $("#mydiv").html("<section> Sorry no result found :</section>");
                    $('#loading').hide();
                    $("#mydiv").show();                  
                   
                } else {
                    $.each(resp, function (key, value) {
                        $('#loading').hide();
                        if (value['wordtype'] === "") {
                            result = result + '<section><span class="word">' + (key+1) + ' </span> : <span class="desc">' + value['definition'] + '</span></section>';
                        } else
                            result = result + '<section><span class="word">' + (key+1) + ' </span><span class="grammer"> (' + value['wordtype'] + ' )</span> : <span class="desc">' + value['definition'] + '</span></section>';
                         $("#mydiv").show();
                    });
                   
                    $("#mydiv").html(result);
                }
            }

        });
    });
});

