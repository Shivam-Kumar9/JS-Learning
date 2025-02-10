 let input = document.getElementById("taskInput") 
 let ul = document.getElementById("taskList")

 const urlz = 'http://localhost:3001/tasks'
 
 async function fetched(){
    try {
        let res =await fetch(urlz)
        let data = await res.json()
        console.log(data);
        render(data)
    } catch (error) {
        console.log(error);
    }
 } 
 
 
 
function  render(data){
   const product = data.map((ele,i)=>{
          const {id,status,title} = ele
         const li = document.createElement('li')
         li.innerHTML=`${id} ${title} ${status}
                           <button onclick="edit(${id})">📋EDIT</button>
                           <button onclick="toggle(${id})">Toggle ${status}</button>
                           <button onclick="delete(${id})">🗑️Delete</button>
                      `
          return li            
   })
   ul.append(...product)
}
 
 
 
 
 function addTask(){
  
 }


 function edit(getid){
    console.log('edit',getid);
 }
 function toggle(getid){
    console.log('tog',getid)
 }
 
 function delete(getid){
    console.log(getid);
 }

 fetched()