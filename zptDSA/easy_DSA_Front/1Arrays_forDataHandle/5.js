// Q5.a (Array) – Find the Second Largest Number
// Problem Statement:
// Write a function that finds the second largest number in an array of unique numbers.

// 📌 Example Input:
// findSecondLargest([10, 5, 20, 8, 15]);

// 📌 Expected Output:
// 15

// ✅ Constraints:

// Solve in O(n) time complexity (Single loop).
// Do not use .sort().

(function findSecondLargest(arr){
  let fir = -Infinity , sec = -Infinity
   for(let num of arr){
    if(num>fir){
        sec = fir
        fir = num
    }
    else if(num>sec){
        sec= num
    }
   }
   console.log(sec)
})([10, 5, 20, 8, 15]);


// Minor Issue & Fix
// ❌ Edge Case Issue:

// Your else if condition (num > sec) is missing num !== fir.
// This can cause problems if the largest number appears multiple times.