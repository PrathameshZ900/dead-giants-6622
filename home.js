let arr=[

     "https://images.bewakoof.com/uploads/grid/app/category-box-new-Printed-Tshirt--1--1675842429.png"  ,
     "https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-ovrszd-1676537032.jpg" ,
     "https://images.bewakoof.com/uploads/grid/app/category-box-Sweatshirt---Hoodies-1672915219.png" ,
     "https://images.bewakoof.com/uploads/grid/app/category-box-new-joggers-1668772677.jpg" ,
     "https://images.bewakoof.com/uploads/grid/app/vests-category-icon-1675844905.jpg",
     "https://images.bewakoof.com/uploads/grid/app/category-box-Full-Sleeve-Tshirt-1673010261-1676129954.jpg",
     "https://images.bewakoof.com/uploads/grid/app/category-box-new-printed-tshirts-1668773246.jpg",
     "https://images.bewakoof.com/uploads/grid/app/category-box-new-ovrszd-w-1676463439.jpg",
     "https://images.bewakoof.com/uploads/grid/app/category-box-Sweatshirt---Hoodies-women-1673010262.png",
     "https://images.bewakoof.com/uploads/grid/app/category-box-new-joggers-1668773245.jpg",
     "https://images.bewakoof.com/uploads/grid/app/category-box-w-dresses-1675144062.jpg",
     "https://images.bewakoof.com/uploads/grid/app/category-box-boyfriend-tees-1675319582.jpg",
    
 
];

let trenCat = document.getElementById("trenCat");

arr.forEach((ele)=>{
    let img= document.createElement("img");
    img.setAttribute("src",ele);


trenCat.append(img)
   
});



let URL ="https://63f5e8a059c944921f68f900.mockapi.io/e-com";

fetch(URL)
.then(function(res){
  return res.json();
})

.then(function (data){
  console.log(data);
  display(data);
})
.catch(function(err){
  console.log(err);

})

let bigDeal=document.getElementById("bigDeal");
function display(data){

  data.forEach((ele)=>{
    
    let div=document.createElement("div");
    
    let img = document.createElement("img");
    img.setAttribute("src",ele.img);




   div.append(img);
  bigDeal.append(div);
  })

}



//   let main =[
//     {
//         img: "https://images.bewakoof.com/t320/men-s-black-metallica-oversized-fit-t-shirt-564902-1671801834-1.jpg",
//         name: "Mens Black",
//         price: "699.00",
//         id: "1"
//     },
//   {
//         img: "https://images.bewakoof.com/t320/men-s-ginger-root-solid-oversized-fit-t-shirt-552870-1672295637-1.jpg",
//         name: "Mens Brown",
//         price: "906.00",
//         id: "2"
//     }
//     {
//         img: "https://images.bewakoof.com/t320/men-s-black-web-slinger-oversized-t-shirt-568920-1673610952-1.jpg",
//         name: "Mens Black",
//         price: "599.00",
//         id: "3"
//     },
//      {
//         img: "https://images.bewakoof.com/t320/women-pink-oversized-printed-dress-554162-1671775633-1.jpg",
//         name: "Women White",
//         price: "713.00",
//         id: "4"
//     },
//      {
//          img: "https://images.bewakoof.com/t320/men-s-white-metallica-oversized-fit-t-shirt-564903-1671801755-1.jpg",
//          name: "Mens White",
//          price: "543.00",
//          id: "5"
//         },
//         {
//             img: "https://images.bewakoof.com/t320/men-s-blackdeathnote-ryuk-oversized-full-sleeve-t-shirt-568917-1673597329-1.jpg",
//         name: "Mens Black",
//         price: "529.00",
//         id: "6"
//     },
//      {
//         img: "https://images.bewakoof.com/t320/men-s-whiteweb-slinger-full-sleeve-t-shirt-568913-1673610792-1.jpg",
//         name: "Mans White",
//         price: "535.00",
//         id: "7"
//     },
//     {
//         img: "https://images.bewakoof.com/t320/women-s-purple-harry-s-house-graphic-printed-oversized-t-shirt-565913-1672383811-1.jpg",
//         name: "Women Purple",
//         price: "590.00",
//         id: "8"
//     },
//     {
//         img: "https://images.bewakoof.com/t320/men-s-black-riot-xxxtentican-oversized-t-shirt-568930-1673612996-1.jpg",
//         name: "Mens Black",
//         price: "169.00",
//         id: "9"
//     },
//     {
//         img: "https://images.bewakoof.com/t320/men-s-black-deathnote-ryuk-oversized-t-shirt-568923-1673597452-1.jpg",
//         name: "Mans Black",
//         price: "323.00",
//         id: "10"
//     },
//     {
//         img: "https://images.bewakoof.com/t320/men-s-black-riot-xxx-tentican-oversized-full-sleeve-t-shirt-569063-1673612954-1.jpg",
//         name: "Mans Black",
//         price: "844.00",
//         id: "11"
//     },
//      {
//         img: "https://images.bewakoof.com/t320/men-s-black-riot-xxx-tentacion-graphic-printed-oversized-zipper-hoodie-568931-1673943796-1.jpg",
//         name: "Mans Black",
//         price: "662.00",
//         id: "12"
//     },
//     {
//         img: "https://images.bewakoof.com/t320/women-s-black-killer-queen-oversized-hoodie-568951-1673613723-1.jpg",
//         name: "Women Black",
//         price: "344.00",
//         id: "13"
//     },
//     {
//         img: "https://images.bewakoof.com/t320/men-s-purple-the-warrior-king-graphic-printed-oversized-t-shirt-565902-1672377608-1.jpg",
//         name: "Mens Purple",
//         price: "319.00",
//         id: "14"
//     },
//      {
//         img: "https://images.bewakoof.com/t320/men-s-purple-the-warrior-king-graphic-printed-oversized-t-shirt-565902-1672377608-1.jpg",
//         name: "Mens Purple",
//         price: "595.00",
//         id: "15"
//     },
   
// ]
// let bigDeal=document.getElementById("bigDeal");

//   main.forEach((ele)=>{
    
//     let div=document.createElement("div");
    
//     let img = document.createElement("img");
//     img.setAttribute("src",ele.img);




//    div.append(img);
//   bigDeal.append(div);
//   })