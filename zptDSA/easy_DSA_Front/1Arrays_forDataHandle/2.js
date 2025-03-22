(function findSecondLargest(arr){
    let order = [...arr]
    for(let i=0; i<order.length; i++){
       for(let k=i; k<order.length; k++){
           if(order[i]>order[k]){
             [order[i] ,order[k]  ] = [order[k] ,order[i] ]
           }
       }
     
    }
       console.log( order)
   
   })([10, 5, 20, 8, 15])

(function findSecondLargest(arr){
    let first = -Infinity , second = -Infinity;

    for(let num of arr ){
        if(num>first){
            second = first
            first = num
        }
        //&& num !==first
        else if(num>second ){
            second = num
        }
    }
    console.log(second)
   })([10, 5, 20, 8, 15])


//    let temp = order[i]
//    order[i] = order[k]
//    order[k] = temp

  //                
              // order[i] = order[k]+order[i]
              // order[k] = order[i]-order[k]
              // order[i] = order[i]-order[k]
              
// [order[i] ,order[k]  ] = [order[k] ,order[i] ]


// Final Verdict
// ❌ First Approach: Inefficient (O(n²)) and does not return the correct answer.
// ✅ Second Approach: Efficient (O(n)) and correctly finds the second largest number.