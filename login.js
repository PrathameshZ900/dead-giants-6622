let data = JSON.parse(localStorage.getItem("singUpData"));
let mobileNumber = document.getElementById("mobileNumber");
let password = document.getElementById("password");
let btn = document.getElementById("btn");
// console.log(data)
let flag=false;


btn.addEventListener("click",function(){
    data.forEach(element => {
        if(element.mobileNumber==mobileNumber.value && element.password==password.value){
            flag=true;
            console.log("ok")
        }else if(element.mobileNumber!=mobileNumber.value && element.password==password.value){
          flag="MobNo";
        }else if(element.mobileNumber==mobileNumber.value && element.password!=password.value){
            flag="pass";
        }else if(element.mobileNumber!=mobileNumber.value && element.password!=password.value){
            flag="both";
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