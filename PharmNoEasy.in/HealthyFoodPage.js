document.querySelector(".search_sec").addEventListener("click", () => {
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
    document.querySelector(".searchInput").style.display = "inline";
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
let CurrentData;
// display
HFADdata = [];
fetch("PharmEasyData.json").then((res) => res.json()).then((data) => {
    HFADdata = data;
    Popular()
});

function display(data) {
    document.querySelector("#productSection").innerHTML = null;
    data.forEach((ele) => {
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
        span.innerText = "MRP ₹"
        strick.innerText = ele.price + Math.floor(Math.random() * (400 - 100) + 100);
        span.append(strick);

        discount = document.createElement("div");
        diff = +(strick.innerText) - ele.price;
        inOnepercent = +(strick.innerText) / 100;
        discount.innerText = Math.floor(diff / inOnepercent) + "% OFF";
        div2.append(span, discount);

        price = document.createElement("span");
        price.innerText = "₹" + ele.price + ".00";

        card.addEventListener("click",()=>{
            filteredlist = HFADdata.filter((elem)=>{
                return ele.Category == elem.Category;
            })

            obj = {
                element : ele,
                strick : strick.innerText,
                discount : discount.innerText,
                filtered : filteredlist
            }
            localStorage.setItem("choosenProduct",JSON.stringify(obj))
            window.open("ProductPagePharmNotEasy.html","_self")
        })
        card.append(div, Name, div2, price)
        document.querySelector("#productSection").append(card);
    })
    CurrentData = data;
}
document.querySelector("#PharmNotEasyLogo").addEventListener("click", () => {
    window.open("PharmNotEasy.html", "_self")
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

// sorting

document.querySelector("#sortItems").addEventListener("change",()=>{
    sortValue = document.querySelector("#sortItems").value;
    if(sortValue=="Popularity"){
        Popular();
    }
    if(sortValue=="LTH"){
        lowTohigh();
    }
    if(sortValue=="HTL"){
        highTolow();
    }
})

function Popular(){
    a = HFADdata.sort((a,b)=>{
        return (a.noOfRatings-b.noOfRatings);
    })
    display(a)
}
function lowTohigh(){
    a = HFADdata.sort((a,b)=>{
        return (a.price-b.price);
    })
    display(a)
}
function highTolow(){
    a = HFADdata.sort((a,b)=>{
        return (b.price-a.price);
    })
    display(a)
}

// filter by subCate
document.querySelector('#subCateopt1').addEventListener("click",(event)=>{
    document.querySelector("#demandName").innerText = document.querySelector('#subCateopt1').value;
    document.querySelector("#filter").style.display = "flex";
    filterMan(document.querySelector('#subCateopt1').value)
})

document.querySelector('#subCateopt2').addEventListener("click",(event)=>{
    filterMan(document.querySelector('#subCateopt2').value);document.querySelector("#demandName").innerText = document.querySelector('#subCateopt2').value;
    document.querySelector("#filter").style.display = "flex";
})

document.querySelector('#subCateopt3').addEventListener("click",(event)=>{
    document.querySelector("#demandName").innerText = document.querySelector('#subCateopt3').value;
    document.querySelector("#filter").style.display = "flex";
    filterMan(document.querySelector('#subCateopt3').value)
})

document.querySelector('#subCateopt4').addEventListener("click",(event)=>{
    document.querySelector("#demandName").innerText = document.querySelector('#subCateopt4').value;
    document.querySelector("#filter").style.display = "flex";
    filterMan("Beverages")
})

document.querySelector('#subCateopt5').addEventListener("click",(event)=>{
    document.querySelector("#demandName").innerText = document.querySelector('#subCateopt5').value;
    document.querySelector("#filter").style.display = "flex";
    filterMan(document.querySelector('#subCateopt5').value)
})



ifClicked = 0;
function filterMan(demand){
    filteredList = HFADdata.filter((ele)=>{
        return demand == ele.Category
    })
    display(filteredList)
}

document.querySelector("#filter").addEventListener("click", ()=>{
    document.querySelector('#subCateopt1').checked = false;
    document.querySelector('#subCateopt2').checked = false;
    document.querySelector('#subCateopt3').checked = false;
    document.querySelector('#subCateopt4').checked = false;
    document.querySelector('#subCateopt5').checked = false;
    document.querySelector("#filter").style.display = "none";
    display(HFADdata)
})

var cartList = JSON.parse(localStorage.getItem("cartList")) || [];
document.querySelector("#cart").addEventListener("click",()=>{
    window.open("CartOfPNE.html","_self")
})
BtnAlive();
function BtnAlive(){
    if(cartList.length!=0){
        document.querySelector("#cartCount>div").innerText=cartList.length;
        document.querySelector("#cartCount").style.display = "inline";
    }else{
        document.querySelector("#cartCount>div").innerText=cartList.length;
        document.querySelector("#cartCount").style.display = "none";
    }
}