const root = document.getElementById("root");
// console.log(root);
const paginationDiv= document.getElementById("pagination");

let globalFetchData 
let currentPage = 1
let limit= 6
const fetchData = async (url) => {
  try {
    let res = await fetch(url)
    let data =await res.json()
    globalFetchData = data
     render(data)
    pages()
  } 
  catch (error) {
    console.log(error);}
};

fetchData(`https://jsonplaceholder.typicode.com/users?_page=1&_limit=6`)


function pages(){
 
for(let i=1; i<=2; i++){
    const pagebtn = document.createElement('button')
    pagebtn.innerText=i
    pagebtn.className='btn'

    pagebtn.addEventListener('click',()=>{
        paginationDiv.innerHTML=''
        currentPage= Number(pagebtn.innerText)
        fetchData(`https://jsonplaceholder.typicode.com/users?_page=${currentPage}&_limit=${limit}`)
    })
    paginationDiv.appendChild(pagebtn)
}
}

const render = (data)=>{
    root.innerHTML=''
    const postNode = data.map(({name,email,phone})=>{
 
        const  card = document.createElement('div')
        card.className='card'

        const Name = document.createElement('div')
        Name.innerHTML=` <p><span><b>Name :</b></span>${name}</p>`

        const Email = document.createElement('div')
        Email.innerHTML=` <p><span><b>Email :</b></span>${email}</p>`

        const Phone  = document.createElement('div')
        Phone.innerHTML=` <p><span><b>Phone No. :</b></span>${phone}</p>`

        card.append(Name,Email,Phone)
        return card
    })
    root.append(...postNode)
}


