// Next Question (Array Based - Easy Level for Frontend Development)
// 👉 Find the Union of Two Arrays

// Problem Statement:
// Given two arrays, return a new array containing the union of elements (all unique elements from both arrays).

// Input: ([1, 2, 3, 4], [3, 4, 5, 6])  
// Output: [1, 2, 3, 4, 5, 6]



(function union(a,b){
    let o1 = {}
     let  length  = a.length >b.length ? a.length : b.length  
    for(let i=0; i<length;  i++){
        if(a[i] !== undefined)o1[a[i]] =  true 
        if(b[i] !== undefined)o1[b[i]] =  true
    } 
    console.log(o1)
 let arr = []
   for(let k in o1){
     
       arr.push(+(k))
    
   }              
 
  console.log(arr)
})([1, 2, 3, 4], [3, 4, 5, 6, 8,9,10]) 

// O()

function union (a,b){
    let unions = []
    let obj = {}
     for(let i = 0 ; i<a.length;i++){
        obj[a[i]] = true
        unions.push(a[i])
     }
     for(let i = 0;i<b.length;i++ ){
        if(!obj[b[i]]){
            obj[b[i]] = true;
            unions.push(b[i])
        }
     }
     console.log(unions)
    
    }
    union([1, 2, 3, 4], [3, 4, 5, 6,6])


    // O(n+m)


//     Your second approach (using two separate loops) is better because:

// ✅ Time Complexity:

// The second method runs in O(n + m) (linear time) since it iterates through both arrays once.

// The first method (O(n + m) worst-case but inefficient due to extra loop and object lookup costs).

// ✅ Space Complexity:

// Both methods use O(n + m) extra space for the hashmap (obj) and result array.

// However, the second approach doesn't store undefined values in the hashmap, making it more efficient.