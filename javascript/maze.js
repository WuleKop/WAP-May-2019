/*global $:false*/
($(document).ready(function() {
    "use strict";
    $("#start").click(function () {
        let i=0;
        $("#maze").mouseleave(function () {
            $(".boundary").addClass("youlose");
            $("#status").text("Sorry, You are Cheating!");
            i=1;
        });
        $(".boundary").mouseover(function () {
            $(".boundary").addClass("youlose");
            $("#status").text("Sorry, You Lost!");
            i=1;
        });
        $("#end").click(function () {
            if(i===0) {
                $("#status").text("You Win!" );
            }
        });
        $("#start").click(function () {
            $(".boundary").removeClass("youlose");
            $("#status").text("Here We go Again!");
        });
    });
})());
