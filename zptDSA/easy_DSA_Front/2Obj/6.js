// Q6.b: Object-Based Problem
// 🔹 Problem Statement:
// Given an object representing product prices, apply a 10% discount to all items and return the updated object.
// Example Input:{
//   laptop: 800,
//   phone: 500,
//   tablet: 600,
//   monitor: 300 }
// Example Output: {
//   laptop: 720,
//   phone: 450,
//   tablet: 540,
//   monitor: 270}
// Constraints:
// 1️⃣ The values in the object will always be numbers.
// 2️⃣ The discount percentage is fixed at 10%.
// 3️⃣ The function should return a new object (not modify the original).
(function discount(sPrice){
    let dis = {}
    for(let old in sPrice){
        dis[old] = sPrice[old]*0.90
    }
    console.log(dis)
     return  dis
})({
    laptop: 800,
    phone: 500,
    tablet: 600,
    monitor: 300
  })