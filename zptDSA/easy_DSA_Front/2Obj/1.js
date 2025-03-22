
// (function findOldestYoungest(obj){

//    let res = obj.


// })( {  
//     John: 25,  
//     Alice: 30,  
//     Bob: 22,  
//     Charlie: 35  
//   })




(function findOldestYoungest(obj){

const fin =  { oldest: {name : '' , age : -Infinity},
                youngest : {name : '' , age : Infinity}}
     
    for(let key in obj){
      if(obj[key] >fin.oldest.age){
        fin.oldest.name = key ;
        fin.oldest.age = obj[key]
      }
      if(obj[key] < fin.youngest.age){
        fin.youngest.name = key ;
        fin.youngest.age = obj[key]
      }
    }


})( {  
    John: 25,  
    Alice: 30,  
    Bob: 22,  
    Charlie: 35  
  })