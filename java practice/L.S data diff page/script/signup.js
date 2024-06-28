let form = document.querySelector("form")

let data = [];

// function saveData( key , arr){
//     localStorage.setItem("key",JSON.stringify(arr))
// }
// function loadData(key){
//     let savedData=JSON.parse(localStorage.getItem(key))
    
//     if(savedData){
//         data =savedData 
//     }
// } 
function saveData(){
         localStorage.setItem("Data",JSON.stringify(data))
 }
 function loadData(){     
    let savedData=JSON.parse(localStorage.getItem("Data"))
        
    if(savedData){
        data =savedData 
    }
} 

function handleFormSumbit(e){
    e.preventDefault()
     let values = e.target
     console.log(values)

    let username = values[0].value;
    let email = values[1].value;
    let password = values[2].value;
    let confirm = values[3].value;

      if(password == confirm){
        let narr =data.filter(function(ele,i){
            return ele.user === username
        })
        console.log(narr)
        if(narr.length>0){
            alert("Username is taken")
        }
        else{

        let obj = {
            user : username,
            email : email,
            password : password,
          }

         data.push(obj)  
         //saveData("Data",data)
         console.log(data) 
         saveData()
         alert("Registration sucessfull")
         window.location.href="login.html"
     }
    }
     else{
        alert("Pasword not same")
     }
 }
 //localStorage.removeItem("Data")
form.addEventListener("submit",function(event){
   handleFormSumbit(event)
 })

//loadData("Data")
loadData()