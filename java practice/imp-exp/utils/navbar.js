 let Navbar =()=>{
    let body = document.querySelector("body")
    let div = document.createElement("div")

    let btn1 = document.createElement("button")
    btn1.innerHTML="one"

    let btn2 = document.createElement("button")
    btn2.innerHTML="two"

    div.append(btn1,btn2)
    body.append(div)
}

// for single export OR one function 
 export default Navbar 

 // reciving end 
 //  import  Navbar from  "./navbar.js"