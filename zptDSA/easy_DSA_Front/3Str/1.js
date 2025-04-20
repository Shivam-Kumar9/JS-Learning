// Problem: Find the First Non-Repeating Character in a String
// 🔹 Description:
// Given a string, find the first character that does not repeat anywhere in the string.

// 🔹 Example:
 
// Input: "swiss"
// Output: "w"
// 🔹 Constraints:

// The string contains only lowercase letters.
// If all characters repeat, return null.

(function nonRepStr(st){
  let obj={}
  for(let char of st) obj[char] =(obj[char] ||0)+1
  for(let ch in st){ 
    if(obj[ch] === 1 ){
         console.log(k)
         return
        }
    }
   console.log(null) 
})("swiss")

// ✔ Ensures the correct order is maintained.
// ✔ Still runs in O(n) time complexity.

// ✅ Try it out and let me know if you need more explanation! 🚀
