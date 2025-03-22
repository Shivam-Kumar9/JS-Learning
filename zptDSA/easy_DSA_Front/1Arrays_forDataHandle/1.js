// Find the maximum/minimum element in an array.
    //method 1
(function findMinMax(arr){
 let incre = [...arr]
 let extream = {} 
  for(let i=0; i<incre.length; i++){
    for(let k=i; k<incre.length; k++){
         if(incre[i]>incre[k]){
            let temp = incre[i]
            incre[i] = incre[k]
            incre[k] = temp
         }
    }
  }
 extream.max = incre[incre.length-1]
 extream.min = incre[0]
 console.log(extream)
 return extream
})([3, 7, 1, 9, 4])

      //meth -2
(function secMethod(arr){
 let obj = {min : Infinity , max : -Infinity}
  for(let num of arr){
    if(obj.min > num ) obj.min = num
    else if(obj.max < num ) obj.max = num
  }
  console.log( obj)
})([3, 7, 1, 9, 4])


// Final Verdict
// ✅ Best Approach: Method 2 (O(n) time, O(1) space)
// ❌ Avoid sorting-based approach (Method 1) for this problem.