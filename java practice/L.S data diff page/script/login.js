let form = document.querySelector("form")

let data ;
function loadData(){     
    let savedData=JSON.parse(localStorage.getItem("Data"))
        
    if(savedData){
        data =savedData 
    }
} 
function handleFormSubmit(e){
    e.preventDefault()
  
    let formEle = e.target
    console.log(formEle)

    let email = formEle[0].value;
    let password = formEle[1].value;
    console.log(email,password)
  //   console.log(data)
     let narr = data.filter(function(ele,i){
        return  ele.email === email && ele.password === password
     })
    // console.log(narr)
     if(narr.length>0){ 
        localStorage.setItem("loggedStatus",JSON.stringify({status : true , username : narr[0].user}))
        alert("welcome user" )
        window.location.href="home.html"
     }
     else{
        alert("wrong credentials !!") 
     }
} 

form.addEventListener("submit",function(event){
    handleFormSubmit(event)
})
loadData()