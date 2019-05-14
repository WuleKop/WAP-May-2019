let create=(function () {
    "use strict";
   let name;
   let deposit;
    /**
     * Set the local variables.
     * @param {int} n name.
     * @param {int} d deposit.
     */
    function setValues(n,d) {
        name=n;
        deposit=d;
    }
    return {
        createAccount:function () {
            setValues(document.getElementById("text1").value,
                deposit=document.getElementById("text2").value);},
        getName: function() {
                return name;
            },
        getDeposit: function () {
            return deposit;
         }

        };
}());
let accountInfoList={
        AccountInfo:function () {
            "use strict";
        document.getElementById("area").value += ("Account Name: "+create.getName()+
            " Balance: "+create.getDeposit()+"\n");
    }
};
document.getElementById("butt").onclick=function() {
    "use strict";
    create.createAccount();
    accountInfoList.AccountInfo();
};