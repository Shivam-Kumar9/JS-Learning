// Q6.a (Array) – Find Pairs with a Given Sum
// Problem Statement:
// Write a function that finds all pairs of numbers in an array whose sum is equal to a given target value.

// 📌 Example Input:

 
// findPairs([1, 2, 3, 4, 5, 6], 7);
// 📌 Expected Output:
 
// [[1, 6], [2, 5], [3, 4]]
// ✅ Constraints:

// Solve in O(n²) (brute force) or O(n) (optimized).

// Each pair should be unique (avoid duplicates).

// Order doesn’t matter, [2, 5] and [5, 2] are considered the same pair.


(function findPairs(arr,n){
    const  pairOfarr  =  []
    for(let i= 0; i<arr.length; i++){
         let  pair =[]
        for(let k= i+1; k<arr.length; k++){
            if(i+k === n){
                pair.unshift(i,k)
            }
        }
        if(pair.length) pairOfarr.push(pair)
    }
 console.log(pairOfarr)
 return pairOfarr
})([1, 2, 3, 4, 5, 6], 7);








// Issues in Your Code & Fixes
// 1️⃣ Pairs Are Not Unique

// Your inner loop starts from i, which means it includes duplicate pairs.

// Fix: Start inner loop from i + 1 to avoid counting the same element twice.

// 2️⃣ Pairs Are Being Added in Reverse Order

// pair.unshift(arr[i], arr[k]) adds elements in reverse order.

// Fix: Use [arr[i], arr[k]] directly.