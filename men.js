let left2=document.getElementById("left2");

left2.addEventListener("click",function(){
    location.href="./home.html"
})

// let maindiv = document.getElementById("app");

// let URL = "https://63f78042e40e087c95906c44.mockapi.io/mens";


// fetch(URL)
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         fetchedData = data;
//         display(data);
//         console.log(data)
//       })
//       .catch((err) => {
//         console.log(err);
//       });

// let filter = document.getElementById("filter");


// filter.addEventListener("change",()=>{
//   fetch()
// })
// function filterdata(data){
//   let filterValue = filter.value;
//   if(filterValue===""){
//     display(data);
//   }else{
//     data=data.filter((ele)=>{
     
//    return ele.style==filterValue;

//     })
//     display(data)
//   }
// }
//       function display(data){
  
//     data.forEach(element => {
//        let div = document.createElement("div");

//        let img = document.createElement("img");
//       img.setAttribute("src",element.img)

//        let style = document.createElement("h3");
//        style.innerText=element.style;

//        let price = document.createElement("h2");
//        price.innerText=element.price;

//        let addcart = document.createElement("button");
//        addcart.innerText="Add To Cart";
    

//   div.append(img,style,price,addcart)
//    maindiv.append(div);
//     });


//       }


/************************************ */



async function fetchdata(){
  try{
    let api=await fetch("https://63f78042e40e087c95906c44.mockapi.io/women")
        api=await api.json();
        console.log(api)
        filterdata(api)
        
  }catch(error){
    console.log(error)
  }
  
}
fetchdata();

let filterby=document.getElementById("filter");
    filterby.addEventListener("change",()=>{
      fetchdata()
    })
function filterdata(data){
  let filterValue=filterby.value
    if(filterValue===""){
      displayproduct(data)
    }else{
      data=data.filter((product)=>{
        return product.style==filterValue
      })
      displayproduct(data)
    }

}


let cont=document.getElementById("app")
let cartArr=JSON.parse(localStorage.getItem("cart"))||[];
//dispaly data on browser
function displayproduct(data){
  cont.innerHTML=""
  data.forEach(( product )=>{
    let card=document.createElement("div");
    let image=document.createElement("img");
    let style=document.createElement("h3");
    let price=document.createElement("h4");
    let addcard=document.createElement("button");

    addcard.textContent="Add To Card";
    image.src=product.img;
    style.textContent=product.style;
    price.textContent=`Price:- ₹${product.price}`;

    //add to cart
    addcard.addEventListener("click",()=>{
      if(checkduplicate(product)){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Already Added Try Another one',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }else{
        
        cartArr.push({...product,quantity:1})
        localStorage.setItem("cart",JSON.stringify(cartArr))
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Product added to cart',
          showConfirmButton: false,
          timer: 0
        })

      }

    })

    card.append(image,style,price,addcard);
    cont.append(card)
  })
}

function checkduplicate(product){
  for(let i=0;i<cartArr.length;i++){
    if(cartArr[i].id===product.id){
      return true;
    }
  }
  return false;
  }
