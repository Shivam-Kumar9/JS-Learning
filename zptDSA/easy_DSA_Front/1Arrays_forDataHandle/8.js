// Q8: Find the Missing Number in an Array
// Problem Statement:
// Given an array containing n distinct numbers from 1 to n+1, find the missing number.

// Example Input: [1, 2, 4, 5, 6]
// 3


(function miss(arr){
    let n = arr.length;
    let tsum = n (n+1)/2
  let tmis =0
    for(let num of arr){
        tmis+=num 
    }
    console.log(Math.abs(tsum-tmis))

})(([1, 2, 4, 5, 6]))

