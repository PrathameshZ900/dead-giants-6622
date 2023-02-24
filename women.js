let left2=document.getElementById("left2");

left2.addEventListener("click",function(){
    location.href="./home.html"
})

let maindiv = document.getElementById("app");

let URL = "https://63f78042e40e087c95906c44.mockapi.io/mens";


// fetch(URL)
// .then(function(res){
//   return res.json();
// })

// .then(function (data){
//   console.log(data);
//   display(data);
// })
// .catch(function(err){
//   console.log(err);
//  })

// function display(data){
  
//     data.forEach(element => {
    
//         let div = document.createElement("div");

//         let img = document.createElement("img");
//         img.setAttribute("src",element.img);

//         let type = document.createElement("p");
//         type.innerText="Mens Tshirt black";

//         let style = document.createElement("h5")
//         style.innerText = element.style;

//         let price = document.createElement("h4");
//         price.innerText = `₹${element.price}`;

//         let addcart = document.createElement("button");
//         addcart.innerText="AddCart"

       
//         div.append(img,type,style,price,addcart);
//         maindiv.append(div);
//     });


// }

// let filter = document.getElementById("filter");

// filter.addEventListener("change", () => {
//     if (filter.value === "") {
//       display(data);
//     } else {
//       let filtered = data.filter((element) => {
//         return "" + element.completed === selectFilter.value;
//       });
//       display(filtered);
//     }
//   });



//   const APIURL = `https://jsonplaceholder.typicode.com/todos`;
  

    let fetchedData = [];
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        fetchedData = data;
        DisplayTable(data);
      })
      .catch((err) => {
        console.log(err);
      });

      let selectFilter = document.getElementById("filter")

    selectFilter.addEventListener("change", () => {
      if (selectFilter.value === "") {
        DisplayTable(fetchedData);
      }
      
      else {
        let filtered = fetchedData.filter((element) => {
          return "" + element.style == selectFilter.value;
        });
        DisplayTable(filtered);
      }
    });
    function DisplayTable(data) {
     maindiv.innerHTML = null;
      data.forEach((element) => {
        let div = document.createElement("div");

                let img = document.createElement("img");
                img.setAttribute("src",element.img);
        
                let type = document.createElement("p");
                type.innerText="Mens Tshirt black";
        
                let style = document.createElement("h5")
                style.innerText = element.style;
        
                let price = document.createElement("h4");
                price.innerText = `₹${element.price}`;
        
                let addcart = document.createElement("button");
                addcart.innerText="AddCart"
        
               
                div.append(img,type,style,price,addcart);
                maindiv.append(div);
      });
    }