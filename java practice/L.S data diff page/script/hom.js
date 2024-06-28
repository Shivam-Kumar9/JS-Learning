let authBox = document.querySelector("#aut")
let login = document.querySelector("#login")
let signup = document.querySelector("#signup")

let loggedStatus = JSON.parse(localStorage.getItem("loggedStatus")) 

if(loggedStatus){
    login.innerHTML=`Hi , ${loggedStatus.username}`
}

login.addEventListener("click",function(){
    window.location.href="login.html"
})

signup.addEventListener("click",function(){
    window.location.href="signUp.html"
})