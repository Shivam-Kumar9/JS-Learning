// Q4.b (Object) – Swap Keys and Values
// Problem Statement:
// Write a function that swaps the keys and values of an object.

// 📌 Example Input:

// js
// Copy
// Edit
// swapKeysValues({ a: "apple", b: "banana", c: "cherry" });
// 📌 Expected Output:

// js
// Copy
// Edit
// {
//   apple: "a",
//   banana: "b",
//   cherry: "c"
// }
// ✅ Constraints:

// Assume all values are unique (No duplicate values).
// Solve in O(n) time complexity (Iterate once).

(function swapKeysValues(obj){
    let entry = Object.entries(obj).map(([key,val])=>[val,key])
    let ne = {}
    for(let i=0; i<entry.length; i++){
        ne[entry[i][0]]=entry[i][1]
    }
     
    console.log(ne)
})({ a: "apple", b: "banana", c: "cherry" });

// //let fin = Object.fromEntries(entry)

 