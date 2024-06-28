let div = document.querySelector("#box")
let inputbox = document.querySelector("#nav>div>input")
let serbtn = document.querySelector("#nav-search")   
let selectPrice = document.querySelector("#nav-select") 
let form = document.querySelector("form")

let Products = [
    
{
    title : "Mobile",
    description : "16 GB RAM | 64 MP Camera",
    img : "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/d/1/-original-imagz6tzjgggzygu.jpeg?q=70",
    price : 4899
  },
  {
    title : "Refrigerator",
    description : "4 Star | Instant ICE",
    img : "https://rukminim2.flixcart.com/image/312/312/xif0q/refrigerator-new/y/d/k/-original-imagwnkacu6rgagg.jpeg?q=70",
    price : 8000
  },
  {
    title : "Laptop",
    description : "32 GB RAM | RTX 3060",
    img : "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/f/o/t/-original-imaguyhz7cyftguh.jpeg?q=70",
    price : 9059
  },
  {
    title : "Television",
    description : "32 inch LED Display",
    img : "https://rukminim2.flixcart.com/image/312/312/xif0q/television/r/8/t/-original-imagzmeygvkvmzah.jpeg?q=70",
    price : 4899
  },
  {
    title : "Shoes",
    description : "Running support | Memory Foam",
    img : "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/w/j/7/-original-imagyrahgtfzwxbg.jpeg?q=70",
    price : 399
  },
  {
    title : "Watch",
    description : "Stainless steel build",
    img : "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/s/a/8/-original-imagpzjfpydjvh6k.jpeg?q=70",
    price : 899
  },
  {
    title : "Air Conditioner",
    description : "5 star , instant cooling",
    img : "https://rukminim2.flixcart.com/image/312/312/xif0q/air-conditioner-new/0/x/u/-original-imagxuycz3jynfzn.jpeg?q=70",
    price : 6299
  },
  {
    title : "Television",
    description : "32 inch LED Display",
    img : "https://rukminim2.flixcart.com/image/312/312/xif0q/television/r/8/t/-original-imagzmeygvkvmzah.jpeg?q=70",
    price : 4899
  },
  {
    title : "Shoes",
    description : "Running support | Memory Foam",
    img : "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/w/j/7/-original-imagyrahgtfzwxbg.jpeg?q=70",
    price : 399
  },
  {
    title : "Watch",
    description : "Stainless steel build",
    img : "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/s/a/8/-original-imagpzjfpydjvh6k.jpeg?q=70",
    price : 899
  },
  {
    title : "Air Conditioner",
    description : "5 star , instant cooling",
    img : "https://rukminim2.flixcart.com/image/312/312/xif0q/air-conditioner-new/0/x/u/-original-imagxuycz3jynfzn.jpeg?q=70",
    price : 6299
  },
  ]

function showData(arr){
     
    div.innerHTML=""

    arr.forEach(function(ele,i){
    
        let card = document.createElement("div")
        
        let title = document.createElement("h3")
           title.innerText=ele.title
        
        let img = document.createElement("img")
           img.src= ele.img
         
        let desx =document.createElement("p")
         desx.innerText = ele.description 
         
        let price = document.createElement("p")
        price.innerText=ele.price

        let deleteBtn = document.createElement("button")
        deleteBtn.innerHTML = "Delete 🗑️"
        deleteBtn.addEventListener("click",function(){deleteData(i)} )
        
        card.append(img,title,desx,price, deleteBtn)
        div.append(card)
        })
}
  
function deleteData(index){
   Products.splice(index,1)
   showData(Products)
}

function searchData(){
     
   let value =  inputbox.value;
  let narr = Products.filter(function(ele,i){
    return value.toLowerCase()==ele.title.toLowerCase()
   })
   
   if(narr.length>0){
    showData(narr)
   }
   else{
    div.innerHTML = "<h2>Product not found...</h2>"
   }
}

function sortData(){
    value = selectPrice.value
     let narr;

     if(value === "asc"){
        narr = Products.sort(function(a,b){
            return a.price - b.price
        })
     }
     else if (value === "dec"){
        narr = Products.sort(function(a,b){
            return b.price - a.price
        })
     }
     showData(narr)
}
function handleSubmit(e){
    e.preventDefault()
   let inputs =  e.target
   let title = inputs[0].value
   let img = inputs[1].value
   let desc = inputs[2].value
   let price = inputs[3].value
      
   let obj ={
    title : title,
    description : desc,
    img : img,
    price : price
   }
   Products.push(obj)
   showData(Products)
}


serbtn.addEventListener("click",searchData)
selectPrice.addEventListener("change",sortData)
form.addEventListener("submit",function(event){
    handleSubmit(event)
})

showData(Products)