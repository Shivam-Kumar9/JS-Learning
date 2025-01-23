let shapes = [
    {sides: 4, color: 'red'},
    {sides: 3, color: 'blue'},
    {sides: 4, color: 'blue'},
    {sides: 3, color: 'red'}
  ];

  let sha= [
    {si: 10 },
    {si: 3 },
    {si: 1},
    {si: 9},
    {si: 6}
  ];
   

 
let long = sha.sort((a, b) => {
 return   a.si > b.si ? 1 : a.si < b.si ? -1 :  0
});
//console.log(long); // turnerry operator  ---- return use 




  let print = shapes.sort((a,b)=>{
  return  a.color.localeCompare(b.color)}) 

 // console.log(print);

 let num = shapes.sort((a, b) => a.sides - b.sides); // very short code of com  return 1 ,-1 , 0 by subtract
 //console.log(num);
        

  
 let a = 'clue'
let b = 'brange'
let c = 'aaaa'
let d = 'âaaa'


console.log(a.localeCompare(b));    
console.log(a.localeCompare(b));
  