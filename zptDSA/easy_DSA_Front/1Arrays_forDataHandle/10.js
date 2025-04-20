// Next Problem: Find the Difference Between Two Arrays
// Problem Statement:
// Given two arrays, return an array that contains elements that are present in one of the arrays but not in both.

// Example Input & Output:
// js
// Copy
// Edit
// findDifference([1, 2, 3, 4], [3, 4, 5, 6]);  
// // Output: [1, 2, 5, 6]

(function arrUni(a,b){
    let obj = {}
    let arr = []
    let maxlength = b.length > a.length ? b.length :a.length
 
    for(let i=0; i<maxlength; i++){
     if(a[i] !== undefined)   obj[a[i]] =( obj[a[i]] || 0)+1
     if(b[i] !== undefined)   obj[b[i]] = (obj[b[i]] || 0)+1
    }
   console.log(obj)
    for(let k in obj){
       if(obj[k] === 1)arr.push(+(k))
    }
  console.log(arr)
 })([1, 2, 3, 4], [3, 4, 5, 6])
 
 
 (function uncomon(a,b){
       let arr= []
     let o = {}
     let j =  {}
     let maxlength = b.length > a.length ? b.length :a.length
     for(let i=0; i<b.length; i++){
         if(a[i] == undefined)   o[a[i]] = true
           if(b[i] == undefined)  j[b[i]] = true
     }
     for(let k1 in o){
         if(!j[k1]) arr.push(+(k1)) 
     }
     for(let k2 in j){
         if(!o[k2]) arr.push(+(k2))   
     }
     console.log(arr)
 })([1, 2, 3, 4], [3, 4, 5, 6])


//  Comparison of Both Approaches
// Approach 1 (arrUni function)
// ✅ Uses an object to track occurrences.
// ✅ Iterates through the longer array, ensuring all elements are processed.
// ✅ Efficiently identifies unique elements by checking occurrences.
// ✅ Time Complexity: O(n + m)

// Approach 2 (uncomon function)
// ❌ The condition if(a[i] == undefined) o[a[i]] = true doesn't make sense because undefined keys shouldn't be stored.
// ❌ Uses two separate objects, making it more complex than necessary.
// ❌ Incorrect handling of missing elements when iterating.
// ❌ Time Complexity: O(n + m) but with unnecessary complexity.