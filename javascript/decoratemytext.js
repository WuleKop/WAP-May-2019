var timer = null;
function delayMessage() {
    if (timer === null) {
        timer = setInterval(myDecoration, 500);
    } else {
        clearInterval(timer);
        timer = null;
    }
}
function myDecoration() {
    var size=parseInt(window.getComputedStyle(document.getElementById("area")).fontSize);
    size+=2;
    document.getElementById("area").style.fontSize=size+"pt";
}
function myDecoration2() {
    var checkbox=document.getElementById("checkbx");
    if(checkbox.checked==true){
      document.getElementById("area").style.fontWeight="bold";
      document.getElementById("area").style.color="green";
      document.getElementById("area").style.textDecoration="underline";
      document.getElementById("body").style.backgroundImage='url("hundred-dollar-bill.jpg")';
    }
    else{
        document.getElementById("area").style.fontWeight="normal";
        document.getElementById("area").style.color="";
        document.getElementById("area").style.textDecoration="none";
        document.getElementById("body").style.backgroundImage='none';
    }
}
function malkovich() {
    var text=document.getElementById("area").value;
    var textArray=text.split(" ");
    var result=textArray[0];
    for (let i = 1; i < textArray.length; i++) {
            if(textArray[i].length>=5){
                textArray[i]="Malkovitch";
            }
            result+=(" "+textArray[i]);

        }
    document.getElementById("area").value=result;
}


