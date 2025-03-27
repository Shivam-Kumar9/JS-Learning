// Q7.b (Object Problem) → Merge Two Objects with Sum of Values
// Given two objects, merge them into a single object. If a key appears in both objects, sum their values; otherwise, keep the key-value pair as is.

// Example Input:

//  let obj1 = { a: 10, b: 20, c: 30 };
// let obj2 = { b: 15, c: 25, d: 40 };

// Expected Output: 

// { a: 10, b: 35, c: 55, d: 40 }

let obj1 = { a: 10, b: 20, c: 30 };
let obj2 = { b: 15, c: 25, d: 40 };

(function combo(o1,o2){
  let obj = {...o1}
  for(let k in o2){
    obj[k] = (obj[k] || 0 ) + o2[k]
  }
  console.log(obj)
})(obj1,obj2)

 (function combineObj(obj1,obj2){
let obj = {}
 for(let key in obj1){
    if(!obj2[key]){
        obj[key]= obj1[key]
    }
    for(let kb in obj2){
      if(!obj1[kb])    obj[kb]= obj2[kb]
      else{
        obj[kb] = obj1[kb]+obj2[kb]
    }
    }
 }
 console.log(obj)
 
 })(obj1,obj2)