
function calcTip() {
    var totalElem = document.getElementById('total');
    var subtotal =parseFloat(document.getElementById('subtotal').value);
    var tip =parseFloat(document.getElementById('tip').value);
    var total = subtotal+subtotal*tip/100;
    totalElem.innerHTML = '$' + total;
}

