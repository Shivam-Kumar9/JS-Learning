// Q4.a (Array) – Separate Even and Odd Numbers
// Problem Statement:
// Write a function that takes an array of numbers and separates even and odd numbers into an object with two arrays.

// 📌 Example Input:

// js
// Copy
// Edit
// separateEvenOdd([1, 2, 3, 4, 5, 6]);
// 📌 Expected Output:

// js
// Copy
// Edit
// {
//   even: [2, 4, 6],
//   odd: [1, 3, 5]
// }
// ✅ Constraints:

// Solve in O(n) time complexity (Single loop).
// Use an object to store even and odd numbers separately.


(function separateEvenOdd(array){
    const divider ={
        even : [],
        odd : []
    }
    for(let num  of array){
        num%2===0 ? divider.even.push(num) : divider.odd.push(num)
    }
    console.log(divider)
})([1, 2, 3, 4, 5, 6]);


