let data = JSON.parse(localStorage.getItem("singUpData"));
let mobileNumber = document.getElementById("mobileNumber");
let password = document.getElementById("password");
let btn = document.getElementById("btn");
// console.log(data)
let flag=false;


btn.addEventListener("click",function(){
    data.forEach(element => {
        if(element.mobileNumber==mobileNumber.value && element.password==password.value && element.password.length>0){
            flag=true;
            console.log("ok")
        }else if(element.mobileNumber!=mobileNumber.value && element.password==password.value && element.password.length>0){
          flag="MobNo";
        }else if(element.mobileNumber==mobileNumber.value && element.password!=password.value && element.password.length>0) {
        }else if(element.mobileNumber==mobileNumber.value && element.password!=password.value && element.password.length>0) {
            flag="pass";
        }else if(element.mobileNumber!=mobileNumber.value && element.password!=password.value  && element.password.length>0){
            flag="both";
        }
        if(element.password.length==0){
            alert("Please Make biger Password")
        }
    });
    
    
    if(flag==true){
        location.href="./home.html"
        alert("LogIn Success Full")
    }else if(flag=="MobNo"){
        alert("Incorrect Mobile Number. Please Inter Valid Mobile Number");
    }else if(flag=="pass"){
        alert("Incorrect Password Number. Please Inter Valid Password");
    }else if(flag=="both"){
        alert("incorrect data")
    }
})

let left2=document.getElementById("left2");

left2.addEventListener("click",function(){
    location.href="./home.html"
})