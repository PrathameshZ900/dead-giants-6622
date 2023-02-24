let data = JSON.parse(localStorage.getItem("singUpData"))||[];

let mobileNumber=document.getElementById("mobileNumber");
let btn = document.getElementById("btn");
console.log(data);



btn.addEventListener("click",function(){
    data.forEach(element => {
        if(element.mobileNumber==mobileNumber.value){
            alert(element.password);
           location.href="./login.html"
        }
    });
})
let left2=document.getElementById("left2");

left2.addEventListener("click",function(){
    location.href="./home.html"
})