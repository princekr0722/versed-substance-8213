document.querySelector("#logo_sec").addEventListener("click",()=>{
    window.location.replace("PharmNotEasy.html");
})
billing();
function billing() {
    bill = JSON.parse(localStorage.getItem("Bill"));
    var totalMin = bill.totalMin;
    var totalMax = bill.totalMax;

    document.querySelector("#maxPriceTotal").innerText = "₹" + totalMax + ".00";
    document.querySelector("#PriceTotal").innerText = "₹" + totalMin + ".00";
    freeDelivery = false;
    if (totalMin >= 500) {
        freeDelivery = true;
        document.querySelector("#confirmPay").setAttribute("value", "Place Order & Pay ₹" + totalMin)
        document.querySelector("#CODPay").innerText = "Place Order & Pay ₹" + (totalMin + 49);
        document.querySelector("#GrandTotal").innerText = "₹" + (totalMin) + ".00";
        document.querySelector("#maxDeliPrice").style.display = "none";
        document.querySelector("#deliPrice").style.display = "none";
        document.querySelector("#freeDelivery").style.display = "inline";
    } else {
        freeDelivery = false;
        document.querySelector("#confirmPay").setAttribute("value", "Place Order & Pay ₹" + (totalMin + 49))
        document.querySelector("#CODPay").innerText = "Place Order & Pay ₹" + (totalMin + 49);
        document.querySelector("#GrandTotal").innerText = "₹" + (totalMin + 49) + ".00";
        document.querySelector("#deliPrice").style.display = "inline";
        document.querySelector("#maxDeliPrice").style.display = "inline";
        document.querySelector("#freeDelivery").style.display = "none";
    }
}
document.querySelector("#cardOption").addEventListener("click", () => {
    document.querySelector("#Address_Page-background").style.display = "flex";
    document.querySelector("#Address_Page").style.display = "flex";
})
document.querySelector("#AddressClose").addEventListener("click", () => {
    document.querySelector("#Address_Page-background").style.display = "none";
    document.querySelector("#Address_Page").style.display = "none";
})

document.querySelector("#confirmPay").addEventListener("click", (event) => {
    event.preventDefault();
    count = 0;
    var cardNumb = document.querySelector("#CardNum").value;
    var validation = document.querySelector("#validation").value;
    var CVV = document.querySelector("#CVV").value;
    var Name = document.querySelector("#Name").value;
    console.log("All " + cardNumb, validation, CVV, Name)
    ifNum1 = Number(cardNumb);
    if (cardNumb.length != 16) {
        console.log(Number(cardNumb))
        document.querySelector("#cardNum_error").innerText = "Invalid Card Number"
    } else {
        count++;
        document.querySelector("#cardNum_error").innerText = ""
    }
    enteredDate = new Date(validation)
    today = new Date();
    if (enteredDate < today) {
        document.querySelector("#validation_error").innerText = "Card is't valid"
    } else {
        count++;
        document.querySelector("#validation_error").innerText = ""
    }
    ifNum2 = Number(CVV);
    if (CVV.length != 3) {
        document.querySelector("#CVV_error").innerText = "CVV Invalid"
    } else {
        count++;
        document.querySelector("#CVV_error").innerText = ""
    }
    if (Name.length < 3) {
        document.querySelector("#Name_error").innerText = "Too Short"
    } else {
        count++;
        document.querySelector("#Name_error").innerText = ""
    }
    if (count == 4) {
        document.querySelector("#alert2msg>span").innerText = "Order Placed!"
        document.querySelector("#alert2msg").style.marginTop = "0px";
        setTimeout(() => {
            document.querySelector("#alert2msg").style.marginTop = "100px";
            
        }, 3700);
        var cartList = [];
        setTimeout(()=>{
            localStorage.setItem("cartList",JSON.stringify(cartList))
            window.location.replace("CartOfPNE.html");
            // window.open("CartOfPNE.html", "_self")
        },1000)
    }
})

document.querySelector("#COD").addEventListener("click",()=>{
    document.querySelector("#CODPay").style.display = "flex"

})
document.querySelector("#CODPay").addEventListener("click",()=>{

    document.querySelector("#alert2msg>span").innerText = "Order Placed!"
    document.querySelector("#alert2msg").style.marginTop = "0px";
    setTimeout(() => {
        document.querySelector("#alert2msg").style.marginTop = "100px";
        
    }, 3700);
    var cartList = [];
    setTimeout(()=>{
        localStorage.setItem("cartList",JSON.stringify(cartList))
        window.location.replace("CartOfPNE.html");
        // window.open("CartOfPNE.html", "_self")
    },1000)
})