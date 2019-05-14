window.rudyTimer=(function () {
    "use strict";
    let timer = null; // stores ID of interval timer
    /** function to display message */
    function delayMsg2() {
        if (timer === null) {
            timer = setInterval(rudy, 1000);
        } else {
            clearInterval(timer);
            timer = null;
        }
    }
    /**called each time the timer goes off*/
    function rudy() {
        document.getElementById("pr").innerHTML += "Rudy!";
    }
    return {
        delayMsg2
    };
   // document.getElementById("click").onclick = delayMsg2;
}());