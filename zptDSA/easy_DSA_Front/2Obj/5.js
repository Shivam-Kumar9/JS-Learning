// Q5.b (Object) – Find the Most Frequent Character in a String
// Problem Statement:
// Write a function that finds the most frequent character in a given string. Ignore spaces.
// opy
// 📌 Example Input:

 
// findMostFrequentChar("javascript is fun");
// 📌 Expected Output:

 
// { character: "a", frequency: 2 }
// ✅ Constraints:

// Solve in O(n) time complexity.

// Use an object to store frequency.

// Ignore spaces.

(function findMostFrequentChar(str){
   const obj = {}
   const res = {character: null, frequency: -Infinity }
   for(let char of str.trim()){
      obj[char] = (obj[char]  || 0)+1
   }
   for(let k of obj){
     if(res.frequency <obj[k]){
        res.frequency = obj[k]
        res.character = k
     }
   }
})("javascript is fun");
