// let page=JSON.parse(localStorage.getItem("both"))||[];
// let cont = document.getElementById("cont");
 
// console.log(page);

//  function display(data){
//     cont.innerText=null;
//   let total = document.getElementById("total");

//     page.forEach(element => {
      
//         let div = document.createElement("div");
    
//         let img = document.createElement("img");
//         img.setAttribute("src",element.img);
    
//         let type = document.createElement("p");
//         type.innerText="Mens Tshirt black";
    
//         let style = document.createElement("h5")
//         style.innerText = element.style;
    
//         let price = document.createElement("h4");
//         price.textContent = `₹${element.price}`;
    
//         let Delete = document.createElement("button");
//         Delete.innerText="Delete"

//         let inc= document.createElement("button");
//         inc.innerText="+";

//         let dec= document.createElement("button");
//         dec.innerText="-";
    
//         let Buy= document.createElement("button");
//         Buy.innerText="Buy Now";
    
//              Delete.addEventListener("click",()=>{
//                 page=page.filter((ele)=>{
//                     return ele.id!==element.id;
    
//                 })
//                 localStorage.setItem("both",JSON.stringify(page));
//               display();
//              }) 
          
//                 if (result.isConfirmed) {
//                   Swal.fire('Removed!', '', 'success')
//                 } else if (result.isDenied) {
//                   Swal.fire('Your Order Canceled', '', 'info')
//                 }
//               })
                
//             inc.addEventListener("click",()=>{
//               element=element.quantity++;
//               localStorage.setItem("both",JSON.stringify(page))
//               display();
//             })
//             dec.addEventListener("click",()=>{
//               if(product.quantity>1){
//                 element=element.quantity--;
//                 localStorage.setItem("both",JSON.stringify(page))
//                 display();
//               }
//             })
       
//         div.append(img,type,style,price,inc,dec,Buy,Delete)
//         cont.append(div);
          
    
//     });
//     let sum=0;
//     for(let i=0;i<page.length;i++){
//         sum+=page[i].price*page[i].quantity;
//     }
//     total.textContent=`₹${sum}`;
//  }
// display();

let logo = document.querySelector("#left2>img");

logo.addEventListener("click",function(){
  location.href="./home.html"
})

let cart=JSON.parse(localStorage.getItem("both"))//<-----
    let cont=document.getElementById("cont")
    function displayproduct(data){
      let total=document.getElementById("total")
      cont.innerHTML="";
        cart.forEach(( product )=>{//<----
        let card=document.createElement("div");
        let image=document.createElement("img");
        let name=document.createElement("h3");
        let company=document.createElement("p");
        let quantity=document.createElement("span");//<------
        let price=document.createElement("h4");
        let buy=document.createElement("button");
        let remove=document.createElement("button");//<------
        let increment=document.createElement("button");//<------
        let decrement=document.createElement("button");//<------
        
        quantity.textContent=product.quantity;//<------
        buy.textContent="Buy Now"
        remove.textContent="Remove";//<------
        increment.textContent="+";//<------
        decrement.textContent="-";//<------
        image.src=product.img;
        company.textContent=product.style
        name.textContent="Mens Tshirt black";
        price.textContent=`₹${product.price}`;
       

        //add to cart increment , decrement remove
        buy.addEventListener("click",()=>{
          Swal.fire({
            title: 'Thank you for Placing Order',
            
            showClass: {
              popup: 'animate_animated animate_fadeInDown'
            },
            hideClass: {
              popup: 'animate_animated animate_fadeOutUp'
            }
          })
          cart=cart.filter((el)=>{
            return el.id!==product.id
            
          })
          localStorage.setItem("cart",JSON.stringify(cart))
          displayproduct();
        })
        remove.addEventListener("click",()=>{
          Swal.fire({
            title: 'Do you want to remove from Cart',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `No`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            cart=cart.filter((el)=>{
              return el.id!==product.id
            })
            localStorage.setItem("cart",JSON.stringify(cart))
            displayproduct();
        })
            if (result.isConfirmed) {
              Swal.fire('Removed!', '', 'success')
            } else if (result.isDenied) {
              Swal.fire('Your Order Canceled', '', 'info')
            }
          })
            
        increment.addEventListener("click",()=>{
          product=product.quantity++;
          localStorage.setItem("cart",JSON.stringify(cart))
          displayproduct();
        })
        decrement.addEventListener("click",()=>{
          if(product.quantity>1){
            product=product.quantity--;
            localStorage.setItem("cart",JSON.stringify(cart))
            displayproduct();
          }
        })
          
        //put into main container
        card.append(image,name,price,company,increment,quantity,decrement,remove,buy);
        cont.append(card)
      })
      let sum=0;
      for (let i=0;i<cart.length;i++){
        sum+=cart[i].price*cart[i].quantity
      }
      total.textContent=`₹${sum}`;
    }
    displayproduct();