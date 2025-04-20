// Q7.a (Array Problem) → Find the Intersection of Two Arrays
// Write a function that takes two arrays as input and returns a new array containing the common elements (intersection) between them.

// Example Input: [1, 2, 3, 4, 5], [3, 4, 5, 6, 7]

// Expected Output: [3, 4, 5]

(function commonNum(a,b){   ////      O(n)^2
 
    let common  = []
    for(let i=0; i<a.length;i++){
     for(let j=0; j<b.length;j++){
         if(a[i] === b[j]){
             common.push(a[i])
             console.log(a[i] )
         }
    } 
 }
 console.log(common)
 })([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])
 

   // miner sec loop
(function commonNum(a,b){
 
    let common  = []
    for(let i=0; i<a.length;i++){
     for(let j=0; j<a.length;j++){
         if(a[j] === b[i]){
             common.unshift(b[i])
         }
 console.log(a[j]  ,b[i])        
     }
    } 
 
 console.log(common)
 })([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])



 // best O(n)

 (function inter(a,b){
    let int = []
    const obj = {}
  for(let num of a) obj[num] = true ; 
  for(let bnum of b){
    if(obj[bnum]){
      int.push(bnum)
      obj[bnum] = false
    }
  }console.log(obj)
  console.log(int)
})([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]  )