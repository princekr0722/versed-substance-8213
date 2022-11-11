document.querySelector("#PharmNotEasyLogo").addEventListener("click", () => {
    window.open("PharmNotEasy.html", "_self")
})

document.querySelector("#download_app").addEventListener("click", () => {
    window.open("https://apps.apple.com/IN/app/id982432643?mt=8")
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
    document.querySelector(".searchInputDummy").style.display = "none";
    document.querySelector(".searchInput").style.display = "inline";
    console.log(1)
    document.querySelector(".searchInputDummy").style.display = "none";
    document.querySelector(".searchInput").style.display = "inline"; document.querySelector(".searchBtn").style.display = "none";
    document.querySelector("#search_nav").style.borderRadius = "20px 20px 0 0";
    document.querySelector("#searchSuggest").style.display = "flex";
    document.querySelector("#search_nav").style.zIndex = "500";
    document.querySelector("#searchSuggestBG").style.display = "inline-block";
})
document.querySelector(".search_sec2").addEventListener("click", () => {
    document.querySelector(".searchInputDummy2").style.display = "none";
    document.querySelector(".searchInput2").style.display = "inline";
    document.querySelector(".searchBtn2").style.display = "none";
    document.querySelector("#search_nav2").style.width = "55%";
    document.querySelector("#search_nav2").style.borderRadius = "20px 20px 0 0";
    document.querySelector("#searchSuggest2").style.display = "flex";
    document.querySelector("#search_nav2").style.zIndex = "500";
    document.querySelector("#searchSuggest2").style.zIndex = "500";
    document.querySelector("#searchSuggestBG2").style.display = "inline-block";
})
document.querySelector("#searchSuggestBG2").addEventListener("click", () => {
    document.querySelector(".searchInputDummy2").style.display = "flex";
    document.querySelector(".searchInput2").style.display = "none";
    document.querySelector(".searchBtn2").style.display = "flex";
    document.querySelector("#search_nav2").style.width = "65%";
    document.querySelector("#search_nav2").style.borderRadius = "100px";
    document.querySelector("#searchSuggest2").style.display = "none";
    document.querySelector("#search_nav2").style.zIndex = "500";
    document.querySelector("#searchSuggest2").style.zIndex = "500";
    document.querySelector("#searchSuggestBG2").style.display = "none";
})
document.querySelector("#searchSuggestBG").addEventListener("click", () => {
    document.querySelector(".searchInputDummy").style.display = "flex";
    document.querySelector(".searchInput").style.display = "none";
    document.querySelector(".searchBtn").style.display = "flex";
    document.querySelector("#search_nav").style.borderRadius = "100px";
    document.querySelector("#searchSuggest").style.display = "none";
    document.querySelector("#search_nav").style.zIndex = "500";
    document.querySelector("#searchSuggest").style.zIndex = "500";
    document.querySelector("#searchSuggestBG").style.display = "none";
})
//login luctionality
ifLoggedIn = JSON.parse(localStorage.getItem("ifLoggedIn")) || 0;
loginNuser()
function loginNuser() {
    if (ifLoggedIn == 0) {
        document.querySelector("#homePageLogInSignUp-text").innerText = "Hello, Log in";
        document.querySelector("#redDOT").style.display = "inline-block"
    } else if (ifLoggedIn == 1) {
        document.querySelector("#homePageLogInSignUp").innerText = "User";
        // document.querySelector("#redDOT").style.display = "none"
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
//Move to Healthy Food and Drinks Page
document.querySelector("#HFnDpage").addEventListener("click", () => {
    window.open("HealthyFoodPage.html", "_self")
})

function TakeMetoCat() {
    const element = document.getElementById("Categories");
    element.scrollIntoView({behavior: "smooth"});
}
function TakeMetoSBC() {
    const element = document.getElementById("ShopByCons");
    element.scrollIntoView({behavior: "smooth"});
}
function TakeMetoDOD() {
    const element = document.getElementById("DotD");
    element.scrollIntoView({behavior: "smooth"});
}
function TakeMetoFB() {
    const element = document.getElementById("FeaturedBrands");
    element.scrollIntoView({behavior: "smooth"});
}
function TakeMetoLTBC() {
    const element = document.getElementById("LabTest");
    element.scrollIntoView({behavior: "smooth"});
}

slideNav = document.getElementById("slideNav");
var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 200) {
        slideNav.style.display = "inline";
        setTimeout(()=>{
            document.getElementById("child_nav2").style.display = "flex";
        },200)
        document.getElementById("search_nav").style.display = "flex";
        document.getElementById("download_app").style.display = "none";
    } else {
        slideNav.style.display = "none";
        document.getElementById("child_nav2").style.display = "none";
        document.getElementById("search_nav").style.display = "none";
        document.getElementById("download_app").style.display = "flex";
    }
};
window.addEventListener("scroll", myScrollFunc);

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