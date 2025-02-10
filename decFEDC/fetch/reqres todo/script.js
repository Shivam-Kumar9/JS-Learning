const body = document.body;
const display = document.getElementById('display')
const pagginationdiv =document.getElementById('paggination') 
let fechedData  

 

async function fetchedData(){
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    const data = await response.json()
    //render(data);
    fechedData =data
}

let currentpage = 1
fetchedData().then(()=>{
    
    let limit = 10
    const initalRender = fechedData.slice(0,limit)
    render(initalRender)
    let totalPages = Math.floor(fechedData.length/limit)
    
    console.log(totalPages);

    for(let i =1; i<=totalPages; i++ ){
        let singediv = document.createElement('span')
        singediv.className='pagediv'
        singediv.innerText=`${i}`
        pagginationdiv.appendChild(singediv)
        //  page data 
         
        
        singediv.addEventListener('click',()=>{
            let currentpage = singediv.innerText
            console.log(currentpage);
    
            let startIndex = (currentpage -1)*limit-1
            let endingIndex = (startIndex+limit-1)
            
            let singlepageData = fechedData.slice(startIndex,endingIndex+1)
            display.innerHTML=''

             render(singlepageData)
        })
    }

})


const render =(todo)=>{
     display.innerHTML=''
     const allList = todo.map(ele=>{
        console.log(ele);
        const  listdiv = document.createElement('div')
        listdiv.className='card'
 
        const Ischecked = document.createElement('input')
        Ischecked.type='checkbox'
        
        //console.log(ele.title);
        const task = document.createElement('span')
         task.innerText=`${ele.title}`

         // this if conditon for that which are already done  
         if(ele.completed){
            Ischecked.checked=true;
            task.style.textDecoration= "line-through";
            task.style.color='gray'
        }
    
        // appended in dom div
        listdiv.append(Ischecked,task)
        return listdiv
     })
    display.append(...allList)
 } 
   
 

 