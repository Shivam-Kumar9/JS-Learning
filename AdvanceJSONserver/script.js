const display = document.getElementById('display');
const pagination = document.getElementById('pagination');
const time = document.getElementById('time');
let global
// const addBtn = document.getElementById('AddID');
//console.log(root);

let itemsLimitOnPage = 10
 const fetched = async ()=>{
     let res = await fetch('http://localhost:3000/tickets')
     let data = await res.json()
     let initalrendering= data.slice(0,itemsLimitOnPage)
      render(initalrendering)
      pages(data)
      arrange(data)
     global=data
}


const pages = (data)=>{ 
  let totalPage = Math.ceil(data.length/itemsLimitOnPage)
   
 
  for(let pagePannel=1; pagePannel<=totalPage; pagePannel++ ){
    
    const page = document.createElement('span')
    page.classList.add('pageBlock')
    page.innerText=pagePannel
    pagination.appendChild(page)
    
   /// console.log(currentPage);
    
   
    
    
   let   currentPage= Number(page.innerText)  
   let inital = (currentPage-1)*itemsLimitOnPage
   let ending = inital+itemsLimitOnPage
    page.addEventListener('click',()=>{

      console.log('startItem',inital,"----endingItem",ending);

      let onePageData =  data.slice(inital,ending)
      console.log(onePageData);
      render(onePageData)
    })
  }
   
}


// time.addEventListener('change',(e)=>{
//   let value = Number(e.target.value)
//   let sorted
//    if (value === 0) {
    
//       sorted = global.sort((a,b)=>{
//         let first =  new Date(a.dueDate).getTime() 
//         let second =  new Date(b.dueDate).getTime() 
//        return first-second
//         //console.log('this is a :',a.dueDate,'this is b :',b.dueDate  )
//       })
//       console.log(sorted);
//    }
//   if (value === 1) {
   
//        sorted = global.sort((a,b)=>{
//         let first =  new Date(a.dueDate).getTime() 
//         let second =  new Date(b.dueDate).getTime() 
//        return second-first
//         //console.log('this is a :',a.dueDate,'this is b :',b.dueDate  )
//       })
//       console.log(sorted);
//    }
//     render(sorted.slice(0,itemsLimitOnPage))
// })

function arrange(data){
  let proirty = { high : 3, medium : 1, low : 0}
   
  let filter = data.filter
  
}









































const  render  = (data)=>{
  display.innerHTML=''
    const card = document.createElement('div')
      card.classList.add('card')
      
      const table = document.createElement('table')
      const tr = document.createElement('tr')

      let Headers = ['Serial No.','Title','Description','Status','End']
      for( let head  of  Headers){
          const th = document.createElement('th')
          th.innerText=head
          tr.appendChild(th)
      }  
      table.appendChild(tr)
     
      card.appendChild(table)

 data.forEach((ele,i)=>{
          let {id,title,description,status,dueDate} = ele
    const tr = document.createElement('tr')
          
    const td1 = document.createElement('td')
    td1.innerText=id;
    const td2 = document.createElement('td')
    td2.innerText=title;
    const td3 = document.createElement('td')
    td3.innerText=description;
    const td4 = document.createElement('td')
    td4.innerText=status;
    const td5 = document.createElement('td')
    let readable = new Date(dueDate).getTime()
    td5.innerText=readable;
    
    tr.append(td1,td2,td3,td4,td5)     
    table.appendChild(tr)
  })
   
  display.append(card)
}
fetched()