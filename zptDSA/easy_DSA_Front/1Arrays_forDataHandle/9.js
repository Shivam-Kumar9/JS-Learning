// Next Question (Array Based - Easy Level for Frontend Development)
// 👉 Find the Union of Two Arrays

// Problem Statement:
// Given two arrays, return a new array containing the union of elements (all unique elements from both arrays).

// Input: ([1, 2, 3, 4], [3, 4, 5, 6])  
// Output: [1, 2, 3, 4, 5, 6]


(function union(a,b){
     let arr = [...a]
     for( let i=0; i<arr.length; i++){
        for(let k =0 ;k<b.length; k++){
            if(!(arr[i] !== b[k])){
                arr.push(b[k])
            }
        }
     }
     console.log(arr)
})([1, 2, 3, 4], [3, 4, 5, 6]) 