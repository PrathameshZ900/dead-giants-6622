let data=JSON.parse(localStorage.getItem("singUpData"))||[];
let mobileNumber=document.getElementById("mobileNumber");
let singUp=document.getElementById("singUp");
let password=document.getElementById("password");


singUp.addEventListener("click",function(){
    let obj={
        mobileNumber:mobileNumber.value,
        password:password.value
    }

    data.push(obj);
    console.log(data)

    localStorage.setItem("singUpData",JSON.stringify(data));

    alert("Please Click On The LogIn Button for Log In ")
    
//   setTimeout(function(){
//     alert("Your Sing Up Succesfull",onclick=gotoLogin())
//   },1000)

})
// function gotoLogin(){
//     location.href="./login.html"
// }

let left2=document.getElementById("left2");

left2.addEventListener("click",function(){
    location.href="./home.html"
})