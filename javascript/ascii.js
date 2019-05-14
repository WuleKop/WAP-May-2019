(function () {
    "use strict";
    let i = 0;
    /**Set the text area fontsize*/
    function fontsize() {
        let getFontSelect = document.getElementById("fontSelect").value;
        let getArea = document.getElementById("tArea");
        if (getFontSelect === "t") {
            getArea.style.fontSize = 7 + "pt";
        } else if (getFontSelect === "s") {
            getArea.style.fontSize = 10 + "pt";
        } else if (getFontSelect === "m") {

            getArea.style.fontSize = 12 + "pt";
        } else if (getFontSelect === "l") {
            getArea.style.fontSize = 16 + "pt";
        } else if (getFontSelect === "e") {
            getArea.style.fontSize = 24 + "pt";
        } else {
            getArea.style.fontSize = 32 + "pt";
        }
    }
    let timer = null;
    let time=250;
    /**Start the Animation*/
    function start() {
        document.getElementById("stp").disabled = false;
        document.getElementById("strt").disabled = true;
        document.getElementById("animSelect").disabled = true;
        if (timer !== null) {
            clearInterval(timer);
        }
        timer = setInterval(fieldAnimations, time);
    }
    /**Stop the animation*/
    function stop() {
        document.getElementById("stp").disabled = true;
        document.getElementById("strt").disabled = false;
        document.getElementById("animSelect").disabled = false;
        clearInterval(timer);
        timer = null;
        i = 0;
    }
    /**Speed up the animation*/
    function turbo() {
        let checkbx = document.getElementById("chkbox").checked;
        if (timer !== null) {
            if (checkbx === true) {
                time=50;
                start();
            } else {
                time=250;
                start();
            }
        }
    }
    /**Select animation types*/
    function fieldAnimations() {
        let getAnimSelect = document.getElementById("animSelect").value;
        let getArea2 = document.getElementById("tArea");

        if (getAnimSelect === "exercise") {
            let exercise = window.EXERCISE.split("=====\n");
            if (i < exercise.length) {
                getArea2.value = exercise[i];
                i++;
            } else {
                i = 0;
            }
        } else if (getAnimSelect === "juggler") {
            let juggler = window.JUGGLER.split("=====\n");
            if (i < juggler.length) {
                getArea2.value = juggler[i];
                i++;
            } else {
                i = 0;
            }
        } else if (getAnimSelect === "bike") {
            let bike = window.BIKE.split("=====\n");
            if (i < bike.length) {
                getArea2.value = bike[i];
                i++;
            } else {
                i = 0;
            }
        } else if (getAnimSelect === "dive") {
            let dive = window.DIVE.split("=====\n");
            if (i < dive.length) {
                getArea2.value = dive[i];
                i++;
            } else {
                i = 0;
            }
        }
    }
    document.getElementById("strt").onclick = start;
    document.getElementById("stp").onclick = stop;
    document.getElementById("animSelect").onchange = fieldAnimations;
    document.getElementById("fontSelect").onchange = fontsize;
    document.getElementById("chkbox").onclick = turbo;
})();


