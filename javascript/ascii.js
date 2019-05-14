var i=0;
function fontsize() {
    let getFontSelect = document.getElementById("fontSelect").value;
    let getArea=document.getElementById("tArea");
    if(getFontSelect==="t"){
       getArea.style.fontSize=7+"pt";
   }
    else if(getFontSelect==="s"){
        getArea.style.fontSize=10+"pt";
    }
    else if(getFontSelect==="m"){

        getArea.style.fontSize=12+"pt";
    }
    else if(getFontSelect==="l"){
        getArea.style.fontSize=16+"pt";
    }
    else if(getFontSelect==="e"){
        getArea.style.fontSize=24+"pt"
    }
    else {
        getArea.style.fontSize=32+"pt";
    }
}

var timer=null;
function start(time=250) {
    document.getElementById("stp").disabled=false;
    document.getElementById("strt").disabled=true;
    document.getElementById("animSelect").disabled=true;
    if(timer!==null) {
        clearInterval(timer);
    }
    timer=setInterval(fieldAnimations,time);
}
function stop() {
    document.getElementById("stp").disabled=true;
    document.getElementById("strt").disabled=false;
    document.getElementById("animSelect").disabled=false;
    clearInterval(timer);
    timer=null;
    i=0;
}
function turbo() {
    var checkbx=document.getElementById("chkbox").checked;
    if(timer!==null) {
        if (checkbx === true) {
            start(50);
        } else {
            start(250);
        }
    }
}
function fieldAnimations() {
    let getAnimSelect = document.getElementById("animSelect").value;
    let getArea2=document.getElementById("tArea");

    if (getAnimSelect==="exercise") {
        let exercise=EXERCISE.split("=====\n");
        if(i<exercise.length) {
            getArea2.value=exercise[i];
            i++;
        }
        else {
            i=0;
        }
    }
    else if (getAnimSelect==="juggler") {
        let juggler=JUGGLER.split("=====\n");
        if(i<juggler.length) {
            getArea2.value=juggler[i];
            i++;
        }
        else {
            i=0;
        }
    }
    else if (getAnimSelect==="bike") {
        let bike=BIKE.split("=====\n");
        if(i<bike.length) {
            getArea2.value=bike[i];
            i++;
        }
        else {
            i=0;
        }
    }
    else if (getAnimSelect==="dive") {
        let dive=DIVE.split("=====\n");
        if(i<dive.length) {
            getArea2.value=dive[i];
            i++;
        }
        else {
            i=0;
        }
    }
    else if (getAnimSelect==="custom") {

    }
    else {
    }
}

