/*global $:false*/
($(document).ready(function() {
    "use strict";
    let i=false;
    let j=false;
    $("#start").click(function () {
        $("#maze").mouseleave(function () {
            if(!j) {
                $(".boundary").addClass("youlose");
                $("#status").text("Sorry, You are Cheating!");
                i = true;
                j=true;
            }
        });
        $(".boundary").mouseover(function () {
            if(!j) {
                $(".boundary").addClass("youlose");
                $("#status").text("Sorry, You Lost!");
                i = true;
                j=true;
            }
        });
        $("#end").click(function () {
            if(!i) {
                $("#status").text("You Win!" );
                j=true;
            }
        });
        $("#start").click(function () {
            $(".boundary").removeClass("youlose");
            $("#status").text("Here We go Again!");
            i=false;
            j=false;
        });
    });
})());
