// Next Question: Find the Missing Numbers in an Unsorted Array
// Problem Statement:
// Given an unsorted array of numbers from 1 to N with some numbers missing, find all the missing numbers.
// Example:
// Input: [3, 7, 1, 9, 5]  (N = 9)
// Output: [2, 4, 6, 8]

// Constraints:
// The input array contains distinct numbers.
// The missing numbers should be returned in sorted order.


(function find(arr,N){
    ///time complexity of O(N²)
    let lost = []
 
    for(let i=1; i<=N; i++){
  
        let isAvilable = false; 
        for(let k=0; k<arr.length; k++){
            if(i === arr[k] ){
            isAvilable = true
            break;
        }}
        if(!isAvilable) lost.push(i)
        }  
        console.log(lost)
})([3, 7, 1, 9, 5],9)
 

// (function Unsorted(sorted_missing,N){
//     let arr  = [...sorted_missing]
//     const obj = {} 
//     let min_total = 0
//     let na_sum = 0
//     let misNum= []
//     for (let i = 0; i < arr.length; i++) {
//          obj[arr[i]] = arr[i]
//     }
    
//     for(let k in obj){
//         min_total+=obj[k]
//         na_sum =Math.floor( (obj[k]*(obj[k]+1) )/2)
//         console.log(na_sum)
//         if(na_sum !== min_total){
//           misNum.push(na_sum-min_total)
//         }
//     }
//     console.log(misNum)
// })([3, 7, 1, 9, 5] ,9)


// (function Unsorted(sorted_missing,N){
//     let arr  = [...sorted_missing]
//     for(let i =0; i<arr.length; i++){
//         for(let k=i; k<arr.length; k++){
//              if(arr[i]>arr[k]){
//                 // let temp = arr[i] ; arr[i] = arr[k]; arr[k] =temp ;
//                  arr[i]  = arr[i] +arr[k] ; arr[k] = arr[i]-arr[k] ; arr[i]= arr[i] - arr[k]
//              }    
//         }
//     }
//     let lost =[];
     
//     for(let ck= 1; ck<arr.length;ck++){
//         let miss_sum = 0;
//         let natrual_sum = 0;
//         if(arr[i+1] <= N  && (arr[i+1] !== arr[i]+1)){
//             natrual_sum = (arr[ck]*(arr[ck]+1))/2
//             for(let i=0; i<ck; i++){
//                 miss_sum += arr[i] 
//             }
//             lost.push(natrual_sum-miss_sum)
//         }
//     }

//   console.log(arr)
// })([3, 7, 1, 9, 5] , 9)



// Issues in Your Code:

// First Function (obj approach)

// You are storing numbers in an object but then using for...in on an object, which doesn't guarantee sorted order.
// You're calculating the sum inside a loop but missing a proper check for missing numbers.
// na_sum (natural sum) calculation is incorrectly placed inside the loop. It should be based on N, not on each element.
// This approach fails if multiple numbers are missing because it only checks pairwise differences.

// Second Function (Sorting approach)

// Sorting is correctly implemented using swap without a temp variable, but nested loops increase time complexity to O(N²).
// The loop condition for(let ck= 1; ck<arr.length; i++) has an incorrect increment (i++ instead of ck++), causing an infinite loop.
// Missing numbers are checked incorrectly:
// Instead of comparing arr[i+1] with arr[i] + 1, it should loop through the expected range and check missing ones.


(function findMissing(arr, N) {
//     ✅ O(N) Time Complexity → No nested loops, just two passes over the array.
// ✅ O(N) Space Complexity → Uses an extra N+1 array, but no brute force
    let present = []; // Boolean array to track numbers
    for (let i = 0; i <= N; i++) {
        present[i] = false; // Initialize all to false
    }

    for (let i = 0; i < arr.length; i++) {
        present[arr[i]] = true; // Mark existing numbers
    }

    let missingNums = [];
    for (let i = 1; i <= N; i++) {
        if (!present[i]) {
            missingNums.push(i); // Collect missing numbers
        }
    }

    console.log(missingNums);
})([3, 7, 1, 9, 5], 9);
