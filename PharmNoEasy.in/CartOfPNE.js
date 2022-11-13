document.querySelector("#logo_sec").addEventListener("click", () => {
    window.open("PharmNotEasy.html", "_self")
})
// login functionality
ifLoggedIn = JSON.parse(localStorage.getItem("ifLoggedIn")) || 0;
loginNuser()
function loginNuser() {
    if (ifLoggedIn == 0) {
        document.querySelector("#LoginOrSignin").style.display = "inline"
        document.querySelector("#user_already").style.display = "none"
    } else if (ifLoggedIn == 1) {
        document.querySelector("#LoginOrSignin").style.display = "none"
        document.querySelector("#user_already").style.display = "inline"
    }
}
document.querySelector("#LogOutBtn").addEventListener("click", () => {
    localStorage.setItem("ifLoggedIn", 0);
    loginNuser();
    document.querySelector("#AddAddressBtn").style.display = "flex";
    document.querySelector("#SelectAdressBtn").style.display = "none";
    document.querySelector("#LogOutBtn").style.display = "none";
    document.querySelector("#LoginOrSignin").style.display = "inline"
    document.querySelector("#user_already").style.display = "none";

    document.querySelector("#alert2msg>span").innerText = "Log Out Successfully!"
    document.querySelector("#alert2msg").style.marginTop = "0px";
    setTimeout(() => {
        document.querySelector("#alert2msg").style.marginTop = "100px";
    }, 3700);
})
document.querySelector("#LoginOrSignin").addEventListener("click", () => {
    document.querySelector("#LogIn_SignUp-background").style.display = "flex";
    document.querySelector("#LogIn_SignUp").style.display = "flex";
})
document.querySelector("#AddAddressBtn").addEventListener("click", () => {
    document.querySelector("#LogIn_SignUp-background").style.display = "flex";
    document.querySelector("#LogIn_SignUp").style.display = "flex";
})
document.querySelector("#SelectAdressBtn").addEventListener("click", () => {
    document.querySelector("#Address_Page-background").style.display = "flex";
    document.querySelector("#Address_Page").style.display = "flex";
})
document.querySelector("#logInClose").addEventListener("click", () => {
    document.querySelector("#LogIn_SignUp-background").style.display = "none";
    document.querySelector("#LogIn_SignUp").style.display = "none";
})
document.querySelector("#AddressClose").addEventListener("click", () => {
    document.querySelector("#Address_Page-background").style.display = "none";
    document.querySelector("#Address_Page").style.display = "none";
})
document.querySelector("#Save_Address").addEventListener("click", () => {
    document.querySelector("#SelectAdressBtn").style.display = "none";
    document.querySelector("#ProceedToBuyBtn").style.display = "flex";
    document.querySelector("#Address_Page-background").style.display = "none";
    document.querySelector("#Address_Page").style.display = "none";
    document.querySelector("#alert2msg>span").innerText = "Address Got Selected"
    document.querySelector("#alert2msg").style.marginTop = "0px";
    setTimeout(() => {
        document.querySelector("#alert2msg").style.marginTop = "100px";
    }, 3700);
})
document.querySelector("#ProceedToBuyBtn").addEventListener("click", () => {
    document.querySelector("#loding").style.display = "inline-block";
    setTimeout(() => {
        document.querySelector("#loding").style.display = "none";
        window.open("PaymentPagePNE.html", "_self")
    }, 700)
})


document.querySelector("#send_otp").addEventListener("click", (event) => {
    event.preventDefault();
    inpt = document.querySelector("#mobileNoInpt").value
    if (inpt != "" && inpt.length == 10) {
        document.querySelector("#InvailidMob").style.display = "none";
        OTP = Math.floor(Math.random() * (9999 - 1000) + 1000)
        document.querySelector("#alertMessage").innerText = "Your OTP is " + OTP;
        document.querySelector("#alert").style.height = "120px";
        setTimeout(() => {
            setTimeout(() => {
                document.querySelector("#alert").style.height = "20px";
            }, 5000)
        }, 1000)
        document.querySelector("#mobNumHead").innerText = " " + inpt;
        document.querySelector("#logInForm").style.display = "none";
        document.querySelector("#OTPform").style.display = "block";

        //OTP CHecker
        document.querySelector("#Continue").addEventListener("click", (event) => {
            event.preventDefault();
            int1 = document.querySelector("#OTPinput1").value;
            int2 = document.querySelector("#OTPinput2").value;
            int3 = document.querySelector("#OTPinput3").value;
            int4 = document.querySelector("#OTPinput4").value;

            if (int1 != "" && int2 != "" && int3 != "" && int4 != "") {
                enterned_OTP = int1 + int2 + int3 + int4;
                if (enterned_OTP == OTP) {
                    document.querySelector("#InvailidOTP").style.display = "none";
                    ifLoggedIn = 1;
                    aliveBtn();
                    localStorage.setItem("ifLoggedIn", ifLoggedIn);
                    loginNuser();
                    document.querySelector("#alert2msg>span").innerText = "Log In Successfully!"
                    document.querySelector("#alert2msg").style.marginTop = "0px";
                    setTimeout(() => {
                        document.querySelector("#alert2msg").style.marginTop = "100px";
                    }, 3700);
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000)
                } else {
                    document.querySelector("#InvailidOTP").style.display = "inline";
                }
            }
        })
    } else {
        document.querySelector("#InvailidMob").style.display = "inline";
    }
})

aliveBtn();
function aliveBtn() {
    if (ifLoggedIn == 0) {
        document.querySelector("#AddAddressBtn").style.display = "flex";
        document.querySelector("#SelectAdressBtn").style.display = "none";
    } else {
        console.log(ifLoggedIn)
        document.querySelector("#AddAddressBtn").style.display = "none";
        document.querySelector("#SelectAdressBtn").style.display = "flex";
    }
}

//list cart items from LS to web
cartList = JSON.parse(localStorage.getItem("cartList")) || [];
countCart();
function countCart() {
    if (cartList.length != 0) {
        document.querySelector("#FI>span").innerText = "Customers who bought above items also bought";
        if (cartList.length <= 1) {
            document.querySelector("#noOfItems>span:nth-child(1)").innerText = cartList.length + " Item In Cart"
        } else {
            document.querySelector("#noOfItems>span:nth-child(1)").innerText = cartList.length + " Items In Cart"
        }
    } else {
        document.querySelector("#noOfItems>span:nth-child(1)").innerText = "Your Cart Smells Empty !"
        document.querySelector("#FI>span").innerText = "Products which will suit your cart";
    } aliveBtn
}
display(cartList);
billing();
function display(data) {
    document.querySelector("#cartItemHere").innerHTML = null;
    data.forEach((ele, index) => {
        if (ele.TotalAmount == undefined) {
            TotalAmount = ele.price;
        } else {
            TotalAmount = ele.TotalAmount;
        }
        var Quantity;
        if (ele.Quantity == undefined) {
            Quantity = 1;
        } else {
            Quantity = ele.Quantity;
        }
        card = document.createElement("div");

        imageDiv = document.createElement("div");
        image = document.createElement("img");
        image.setAttribute("src", ele.imageMain);
        imageDiv.append(image);

        deatilsDiv = document.createElement("div");
        titleDiv = document.createElement("div");
        titleP = document.createElement("h1");
        titleP.innerText = ele.title;
        deleteDiv = document.createElement("div");
        deleteIcon = document.createElement("img");
        deleteIcon.setAttribute("src", "https://assets.pharmeasy.in/web-assets/dist/2fb50086.svg");
        deleteIcon.addEventListener("click", () => {
            removal(ele.ID);
        })
        deleteDiv.append(deleteIcon);
        titleDiv.append(titleP, deleteDiv);
        companyName = document.createElement("div");
        companyName.innerText = "By The Parent Company";
        weigthInfo = document.createElement("div");
        weigthInfo.innerText = "500g Of Weigth";
        quantityNprice = document.createElement("div");
        selectQuantityDiv = document.createElement("div");
        selectTag = document.createElement("select");
        selectTag.setAttribute("id", "quantitySelect");
        opt0 = document.createElement("option");
        opt0.setAttribute("value", Quantity);
        opt0.innerText = "Oty " + Quantity;
        opt1 = document.createElement("option");
        opt1.setAttribute("value", "1");
        opt1.innerText = "Oty 1";
        opt2 = document.createElement("option");
        opt2.setAttribute("value", "2");
        opt2.innerText = "Oty 2";
        opt3 = document.createElement("option");
        opt3.setAttribute("value", "3");
        opt3.innerText = "Oty 3";
        opt4 = document.createElement("option");
        opt4.setAttribute("value", "4");
        opt4.innerText = "Oty 4";
        opt5 = document.createElement("option");
        opt5.setAttribute("value", "5");
        opt5.innerText = "Oty 5";
        opt6 = document.createElement("option");
        opt6.setAttribute("value", "6");
        opt6.innerText = "Oty 6";
        opt7 = document.createElement("option");
        opt7.setAttribute("value", "7");
        opt7.innerText = "Oty 7";
        opt8 = document.createElement("option");
        opt8.setAttribute("value", "8");
        opt8.innerText = "Oty 8";
        opt9 = document.createElement("option");
        opt9.setAttribute("value", "9");
        opt9.innerText = "Oty 9";
        opt10 = document.createElement("option");
        opt10.setAttribute("value", "10");
        opt10.innerText = "Oty 10";
        selectTag.append(opt0, opt1, opt2, opt3, opt4, opt5, opt6, opt7, opt8, opt9, opt10);

        //line of nearest lower comment
        var randomNum = Math.floor(Math.random() * (500 - 200) + 200);
        span1 = document.createElement("span");
        OnePerVal = (TotalAmount + randomNum) / 100
        span1.innerText = Math.floor(randomNum / OnePerVal) + "% OFF";
        selectTag.addEventListener("change", (event) => {
            newPrice = ele.price * event.target.value;

            event.target.parentElement.parentElement.children[1].children[1].children[1].innerText = "₹" + newPrice + ".00";

            cartList[index].TotalAmount = newPrice;
            cartList[index].MaxTotalAmount = newPrice + randomNum;
            cartList[index].Quantity = event.target.value;
            opt0.setAttribute("value", event.target.value);
            opt0.innerText = "Oty " + event.target.value;
            billing()
            localStorage.setItem("cartList", JSON.stringify(cartList));
        })
        selectQuantityDiv.append(selectTag);
        pricingDiv = document.createElement("div");
        maxPriceDiv = document.createElement("div");

        maxPriceDiv.innerText = "₹" + (TotalAmount + randomNum) + ".00*";
        cartList[index].MaxTotalAmount = TotalAmount + randomNum;
        disNPrice = document.createElement("div");
        //line is on nearest upper comment
        span2 = document.createElement("span");
        span2.innerText = "₹" + TotalAmount + ".00";
        span2.setAttribute("id", "product_Price")
        disNPrice.append(span1, span2);
        pricingDiv.append(maxPriceDiv, disNPrice);
        quantityNprice.append(selectQuantityDiv, pricingDiv);
        deliveryDateDiv = document.createElement("div");
        textDeliv1 = document.createElement("span");
        textDeliv1.innerText = "Delivery By ";
        textDeliv2 = document.createElement("span");
        start = new Date(2022, 11, 20);
        end = new Date();
        deliveryDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

        var dd = String(deliveryDate.getDate()).padStart(2, '0');
        var mm = String(deliveryDate.getMonth() + 1).padStart(2, '0');
        var yyyy = deliveryDate.getFullYear();
        textDeliv2.innerText = dd + "/" + mm + "/" + yyyy;
        deliveryDateDiv.append(textDeliv1, textDeliv2);
        deatilsDiv.append(titleDiv, companyName, weigthInfo, quantityNprice, deliveryDateDiv);
        card.append(imageDiv, deatilsDiv);
        document.querySelector("#cartItemHere").append(card)
    })
}
function billing() {
    var totalMin = 0;
    var totalMax = 0;
    cartList.forEach((ele) => {
        if (ele.TotalAmount != undefined) {
            totalMin += +ele.TotalAmount;
        } else {
            totalMin += ele.price;
        }
        totalMax += ele.MaxTotalAmount;
    })
    document.querySelector("#maxPriceTotal").innerText = "₹" + totalMax + ".00";
    document.querySelector("#PriceTotal").innerText = "₹" + totalMin + ".00";
    freeDelivery = false;
    if (totalMin >= 500) {
        freeDelivery = true;
        document.querySelector("#GrandTotal").innerText = "₹" + (totalMin) + ".00";
        document.querySelector("#deliveryOfferBtn").style.display = "none";
        document.querySelector("#maxDeliPrice").style.display = "none";
        document.querySelector("#deliPrice").style.display = "none";
        document.querySelector("#freeDelivery").style.display = "inline";
    } else {
        freeDelivery = false;
        document.querySelector("#GrandTotal").innerText = "₹" + (totalMin + 49) + ".00";
        document.querySelector("#deliveryOfferBtn").style.display = "flex";
        document.querySelector("#deliPrice").style.display = "inline";
        document.querySelector("#maxDeliPrice").style.display = "inline";
        document.querySelector("#freeDelivery").style.display = "none";
    }

    obj = {
        totalMax,
        totalMin,
        freeDelivery,
    }
    localStorage.setItem("Bill", JSON.stringify(obj))
}
function removal(ID) {
    for (let i = 0; i < cartList.length; i++) {
        if (cartList[i].ID == ID) {
            cartList.splice(i, 1);
            localStorage.setItem("cartList", JSON.stringify(cartList));
            display(cartList);
            // alert for got Deleted to the cart
            countCart();
            billing()
            document.querySelector("#alert2msg>span").innerText = "Removed from your cart"
            document.querySelector("#alert2msg").style.marginTop = "0px";
            setTimeout(() => {
                document.querySelector("#alert2msg").style.marginTop = "100px";
            }, 3700);
            break;
        }
    }
}










HFADdata = [];
fetch("PharmEasyData.json").then((res) => res.json()).then((data) => {
    HFADdata = [...data];
    FIlisting(data);
}).catch((err) => { console.log(err) });

function FIlisting() {
    HFADdata.forEach((ele, index) => {

        var ranNum = Math.floor(Math.random() * (8 - 3) + 3);
        if (index % ranNum == 0 && index != 0) {

            // ele.title != document.querySelector("#itemName").innerText
            if (1) {
                card = document.createElement("div")
                card.addEventListener("click", () => {

                })
                div = document.createElement("div");
                image = document.createElement("img");
                image.setAttribute("src", ele.imageMain)
                div.append(image)

                Name = document.createElement("div");
                Name.innerText = ele.title;

                div2 = document.createElement("div")
                span = document.createElement("span");
                strick = document.createElement("span");
                span.innerText = "MRP "
                strick.innerText = "₹" + (ele.price + Math.floor(Math.random() * (400 - 100) + 100));
                span.append(strick);
                div2.append(span);

                weigth_details = document.createElement("div");
                weigth_details.innerText = "500g of weight"

                price = document.createElement("span");
                price.innerText = "₹" + ele.price + ".00";

                card.addEventListener("click", () => {
                    filteredlist = HFADdata.filter((elem) => {
                        return ele.Category == elem.Category;
                    })
                    var randomNum = Math.floor(Math.random() * (500 - 200) + 200);
                    OnePerVal = (ele.price + randomNum) / 100
                    console.log(ele)
                    discount = Math.floor(randomNum / OnePerVal) + "% OFF";
                    obj = {
                        element: ele,
                        strick: strick.innerText,
                        discount: discount,
                        filtered: filteredlist
                    }
                    localStorage.setItem("choosenProduct", JSON.stringify(obj))
                    window.open("ProductPagePharmNotEasy.html", "_self")
                })
                button = document.createElement("button");
                button.setAttribute("class", "buttonOfFI")
                button.innerText = "Go To"
                card.append(div, Name, weigth_details, div2, price, button)
                document.querySelector("#Featured_Items").append(card);
            }
        }
    })
}
