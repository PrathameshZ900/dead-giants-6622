let left2=document.getElementById("left2");

left2.addEventListener("click",function(){
    location.href="./home.html"
})

let maindiv = document.getElementById("app");

let URL = "https://63f78042e40e087c95906c44.mockapi.io/mens";


let page=JSON.parse(localStorage.getItem("both"))||[];

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
  
      let sortby = document.getElementById("sort");

      sortby.addEventListener("change",()=>{
        let sortValue=sortby.value;
        if(sortValue==""){
          DisplayTable(data);
        }else{
          if(sortValue==="ase"){
          data = `${data}?sortBy=price&order=asc`;
          DisplayTable(data);
          }else if(sortValue==="dsc"){
             data= `${data}?sortBy=price&order=desc`;
          DisplayTable(data);
         
          }
        }
      })
    



    selectFilter.addEventListener("change", () => {
      if (selectFilter.value === "") {
        DisplayTable(fetchedData);
      }else {
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
          
                addcart.addEventListener("click",function(ele){
                  if (checkDuplicate(element)) {
                    alert("Product Already in Cart");
                  } else {
                    page.push({ ...element, quantity: 1 });
                    localStorage.setItem("both", JSON.stringify(page));
                    alert("Product Added To Cart");
                  }
               
                 })
           
               
                div.append(img,type,style,price,addcart);
                maindiv.append(div);
      });
    }
    function checkDuplicate(product) {
      for (let i = 0; i < page.length; i++) {
        if (page[i].id == product.id) {
          return true;
        }
      }
      return false;
    }

    