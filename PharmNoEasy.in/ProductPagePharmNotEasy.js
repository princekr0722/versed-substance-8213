document.querySelector("#PharmNotEasyLogo").addEventListener("click", () => {
    window.open("PharmNotEasy.html", "_self")
})
document.querySelector(".search_sec").addEventListener("click", () => {
    console.log(1)
    console.log(1)
    document.querySelector(".searchInput").style.display = "inline"; document.querySelector(".searchBtn").style.display = "none";
    document.querySelector("#search_nav").style.borderRadius = "20px 20px 0 0";
    document.querySelector("#searchSuggest").style.display = "flex";
    document.querySelector("#search_nav").style.zIndex = "500";
    document.querySelector("#searchSuggestBG").style.display = "inline-block";
})
document.querySelector("#searchSuggestBG").addEventListener("click", () => {
    document.querySelector(".searchBtn").style.display = "flex";
    document.querySelector("#search_nav").style.borderRadius = "100px";
    document.querySelector("#searchSuggest").style.display = "none";
    document.querySelector("#search_nav").style.zIndex = "500";
    document.querySelector("#searchSuggest").style.zIndex = "500";
    document.querySelector("#searchSuggestBG").style.display = "none";
})
document.querySelector(".searchBtn").addEventListener("click", () => {
    console.log("Ready to Search")
})
document.querySelector("#homePageLogInSignUp").addEventListener("click", () => {
    document.querySelector("#LogIn_SignUp-background").style.display = "flex";
    document.querySelector("#LogIn_SignUp").style.display = "flex";
})
document.querySelector("#logInClose").addEventListener("click", () => {
    document.querySelector("#LogIn_SignUp-background").style.display = "none";
    document.querySelector("#LogIn_SignUp").style.display = "none";
})
document.querySelector(".search_sec").addEventListener("click", () => {
    console.log(1)
    document.querySelector(".searchInput").style.display = "inline";
    console.log(1)
    document.querySelector(".searchInput").style.display = "inline"; document.querySelector(".searchBtn").style.display = "none";
    document.querySelector("#search_nav").style.borderRadius = "20px 20px 0 0";
    document.querySelector("#searchSuggest").style.display = "flex";
    document.querySelector("#search_nav").style.zIndex = "500";
    document.querySelector("#searchSuggestBG").style.display = "inline-block";
})
document.querySelector("#searchSuggestBG").addEventListener("click", () => {
    document.querySelector(".searchBtn").style.display = "flex";
    document.querySelector("#search_nav").style.borderRadius = "100px";
    document.querySelector("#searchSuggest").style.display = "none";
    document.querySelector("#search_nav").style.zIndex = "500";
    document.querySelector("#searchSuggest").style.zIndex = "500";
    document.querySelector("#searchSuggestBG").style.display = "none";
})

// login functionality
ifLoggedIn = JSON.parse(localStorage.getItem("ifLoggedIn")) || 0;
loginNuser()
function loginNuser() {
    if (ifLoggedIn == 0) {
        document.querySelector("#homePageLogInSignUp-text").innerText = "Hello, Log in";
    } else if (ifLoggedIn == 1) {
        document.querySelector("#homePageLogInSignUp").innerText = "User";
    }
}
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
                    localStorage.setItem("ifLoggedIn", ifLoggedIn);
                    loginNuser();
                    window.location.reload();
                } else {
                    document.querySelector("#InvailidOTP").style.display = "inline";
                }
            }
        })
    } else {
        document.querySelector("#InvailidMob").style.display = "inline";
    }
})

// list the product choosen
var choosenItem = JSON.parse(localStorage.getItem("choosenProduct")) || {};
MainItem(choosenItem);

var cartList = JSON.parse(localStorage.getItem("cartList")) || [];
var itemAleardyInCart = false;
for (let i = 0; i < cartList.length; i++) {
    if (cartList[i].title == choosenItem.element.title) {
        document.querySelector("#addToCartBtn").innerText = "In Cart"
        document.querySelector("#addToCartBtn").style.backgroundColor = "#f2fff8";
        document.querySelector("#addToCartBtn").style.color = "#10847E";
        document.querySelector("#addToCartBtn").style.border = "2px solid #10847E";
        document.querySelector("#addToCartBtn").setAttribute("id", "MrUnknown");
        itemAleardyInCart = true;
        break;
    }
}
document.querySelector("#cart").addEventListener("click", () => {
    window.open("CartOfPNE.html", "_self")
})
BtnAlive();
function BtnAlive() {
    if (cartList.length != 0) {
        if (cartList.length == 1) {
            document.querySelector("#viewCartBtnHeading").innerText = cartList.length + " item in cart";

        } else {
            document.querySelector("#viewCartBtnHeading").innerText = cartList.length + " items in cart"
        }
        document.querySelector("#viewCartBtn").style.backgroundColor = "#10847E";
        document.querySelector("#viewCartBtn").style.cursor = "pointer";

        document.querySelector("#viewCartBtn").addEventListener("click", () => {
            window.open("CartOfPNE.html", "_self")
        })

        document.querySelector("#cartCount>div").innerText = cartList.length;
        document.querySelector("#cartCount").style.display = "inline";
    } else {
        document.querySelector("#viewCartBtnHeading").removeAttribute("onclick");

        document.querySelector("#cartCount>div").innerText = cartList.length;
        document.querySelector("#cartCount").style.display = "none";
    }
}
function MainItem(data) {
    document.querySelector("#mainImage").setAttribute("src", data.element.imageMain);

    document.querySelector("#sImg0").setAttribute("src", data.element.imageMain);
    document.querySelector("#sImg1").setAttribute("src", data.element.morePhoto[0]);
    document.querySelector("#sImg2").setAttribute("src", data.element.morePhoto[1]);
    document.querySelector("#sImg3").setAttribute("src", data.element.morePhoto[2]);

    document.querySelector("#sImgDiv0").addEventListener("click", () => {
        document.querySelector("#mainImage").setAttribute("src", data.element.imageMain);
    })
    document.querySelector("#sImgDiv1").addEventListener("click", () => {
        document.querySelector("#mainImage").setAttribute("src", data.element.morePhoto[0]);
    })
    document.querySelector("#sImgDiv2").addEventListener("click", () => {
        document.querySelector("#mainImage").setAttribute("src", data.element.morePhoto[1]);
    })
    document.querySelector("#sImgDiv3").addEventListener("click", () => {
        document.querySelector("#mainImage").setAttribute("src", data.element.morePhoto[2]);
    })

    document.querySelector("#itemName").innerText = data.element.title;
    document.querySelector("#price").innerText = "₹" + data.element.price + ".00";
    document.querySelector("#maxPrice").innerText = "₹" + data.strick;
    document.querySelector("#discount").innerText = data.discount;
    document.querySelector("#noOfPeopleRated").innerText = "(" + data.element.noOfRatings + " ratings)";

    start = new Date(2022, 11, 20);
    end = new Date();
    deliveryDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

    var dd = String(deliveryDate.getDate()).padStart(2, '0');
    var mm = String(deliveryDate.getMonth() + 1).padStart(2, '0');
    var yyyy = deliveryDate.getFullYear();

    document.querySelector("#deliveryDate").innerText = dd + ' /' + mm + ' /' + yyyy;
}


HFADdata = [];
fetch("PharmEasyData.json").then((res) => res.json()).then((data) => {
    HFADdata = data;
    FBlisting();
});
dataToShow = JSON.parse(localStorage.getItem("choosenProduct")) || {};

dataToShow.filtered.forEach((ele) => {
    if (ele.title != document.querySelector("#itemName").innerText) {
        card = document.createElement("div")

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

            obj = {
                element: ele,
                strick: strick.innerText,
                discount: discount.innerText,
                filtered: filteredlist
            }
            localStorage.setItem("choosenProduct", JSON.stringify(obj))
            window.open("ProductPagePharmNotEasy.html", "_self")
        })
        button = document.createElement("button");
        button.setAttribute("class", "buttonOfSP")
        button.innerText = "Go To"
        card.append(div, Name, weigth_details, div2, price, button)
        document.querySelector("#similarProducts").append(card);
    }
})
function FBlisting() {
    console.log(HFADdata)
    HFADdata.forEach((ele, index) => {
        console.log(1)

        var ranNum = Math.floor(Math.random() * (8 - 3) + 3);
        if (index % ranNum == 0) {

            if (ele.title != document.querySelector("#itemName").innerText) {
                card = document.createElement("div")

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

                    obj = {
                        element: ele,
                        strick: strick.innerText,
                        discount: discount.innerText,
                        filtered: filteredlist
                    }
                    localStorage.setItem("choosenProduct", JSON.stringify(obj))
                    window.open("ProductPagePharmNotEasy.html", "_self")
                })
                button = document.createElement("button");
                button.setAttribute("class", "buttonOfFB")
                button.innerText = "Go To"
                card.append(div, Name, weigth_details, div2, price, button)
                document.querySelector("#Frequently_Bought").append(card);
            }
        }
    })
}


cartList = JSON.parse(localStorage.getItem("cartList")) || [];
if (itemAleardyInCart == false) {
    document.querySelector("#addToCartBtn").addEventListener("click", (event) => {
        HFADdata.forEach((ele) => {
            if (event.target.parentNode.parentElement.childNodes[1].innerText == ele.title) {
                contains = 0;
                for (let i = 0; i < cartList.length; i++) {
                    if (cartList[i].title == event.target.parentNode.parentElement.childNodes[1].innerText) {
                        contains = 1;
                        break;
                    }
                }
                if (contains == 0) {
                    cartList.push(ele);
                    localStorage.setItem("cartList", JSON.stringify(cartList));
                    // alert for got added to the cart
                    document.querySelector("#alert2msg>span").innerText = "Added To Cart"
                    document.querySelector("#alert2msg").style.marginTop = "0px";
                    setTimeout(() => {
                        document.querySelector("#alert2msg").style.marginTop = "100px";
                    }, 3700);
                    document.querySelector("#addToCartBtn").innerText = "In Cart"
                    document.querySelector("#addToCartBtn").style.backgroundColor = "#f2fff8";
                    document.querySelector("#addToCartBtn").style.color = "#10847E";
                    document.querySelector("#addToCartBtn").style.border = "2px solid #10847E";
                    document.querySelector("#addToCartBtn").setAttribute("id", "MrUnknown");

                    BtnAlive();
                } else {
                    // give aleart that is is already present
                    document.querySelector("#alert2msg>span").innerText = "Item's Already In Your Cart"
                    document.querySelector("#alert2msg").style.marginTop = "0px";
                    setTimeout(() => {
                        document.querySelector("#alert2msg").style.marginTop = "100px";
                    }, 3700)
                }
            }
        })
    })
} else {
    document.querySelector("#MrUnknown").addEventListener("click", (event) => {
        // give aleart that is is already present
        document.querySelector("#alert2msg>span").innerText = "Item's Already In Your Cart"
        document.querySelector("#alert2msg").style.marginTop = "0px";
        setTimeout(() => {
            document.querySelector("#alert2msg").style.marginTop = "100px";
        }, 3700)

    })
}
