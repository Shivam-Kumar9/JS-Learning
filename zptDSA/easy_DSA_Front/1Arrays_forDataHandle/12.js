// Write a function that rotates an array to the right by k steps. The array should be modified in-place without using extra space.
 
// Input: ([1, 2, 3, 4, 5, 6, 7], 3)
// Output: [5, 6, 7, 1, 2, 3, 4]
// Input: ([-1, -100, 3, 99], 2)
// Output: [3, 99, -1, -100]

// Constraints:
// Do not use built-in methods like .splice() or .slice().
// Use O(1) extra space.
// The function should modify the array in-place.
// Hint:
// Reverse the entire array.
// Reverse the first k elements.
// Reverse the remaining elements.

let ar = [-1, -100, 3, 99] ; k=2;

rotate(0,ar.length-1)

function rotate(st,en){
  let i = st;
  let j = en;
  while(i<j){
    let temp = ar[i]
        ar[i] = ar[j]
        ar[j]  = temp
    i++
    j--    
  } 
}


console.log(ar)


// const placeRev = (arr,run)=>{
//     //O(n × k)  // brutforce method🗃️
//    for (let times = 0; times < run; times++) {
//     let lastVal = arr[arr.length-1]
//     for(let i=arr.length-2; i>=0; i-- ){
//         arr[i+1] =  arr[i]
//     }
//     arr[0] = lastVal
//    }
//    return arr
// }
// console.log(placeRev([-1, -100, 3, 99],2))









//scraped my shit❌
// (function placeRev(arr,n){
//   for(let i=arr.length-1; i>=0; i--){
//     for(let k=i; k>=0; k--){
//         if(arr[i]<arr[k]){
//             let temp = arr[i]
//             arr[i] = arr[k]
//             arr[k] = temp
//         }
//     }
//   }
//   console.log(arr)
  
// })([-1, -100, 3, 99], 2)