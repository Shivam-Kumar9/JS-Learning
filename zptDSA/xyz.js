           //Q2a
// const squareArr =(arr)=>{
//     let  sq = [];
//     for(let num  of arr){
//       sq.push(num*num)
//     }
//    return sq
//  }
//  console.log(squareArr([2, 3, 4]))

          //Q2b
//  const objfun = (obj)=>{
//      let  inObj= {}
//      for(let key in obj){
//          inObj[key] = obj[key]+1
//      }
//      return inObj
//  }
//  console.log(objfun({ John: 25, Alice: 30, Bob: 22 }))



  //Q3 arr
//   (function uni(arr){
//     let un = []
//      let obj = {}
//     for(let i = 0; i<arr.length; i++){
//         obj[arr[i]] = (obj[arr[i]] || 0) + 1
//     }
//     for(let key in obj) obj[key] ? un.push(Number(key)) : null
//      console.log(un)
//  })([1, 2, 2, 3, 4, 4, 5])

    //Q3  obj 
    // (function dis(obj){
    //     let sell = {};
    //     for(let key in obj) {
    //         sell[key] = obj[key]- (obj[key]*(10/100))
    //     }
    //      console.log(sell)
    //  })({ apple: 100, banana: 50, orange: 80 })

 //Q4 arr   
  (function twoPro(arr){
    let obj ={ even : [] , odd :[]}
    for(let num of arr){
        num%2 == 0 ? obj.even.push(num) : obj.odd.push(num)
    }
    console.log(obj)
  })([1, 2, 3, 4, 5, 6])
/////                               /////////////
(function twoPro(arr){
    let obj ={odd : [] , even : []}
    for(let num of arr){
        num%2 == 0 ? obj.even =[...obj.even, num]
        :
       obj.odd=[...obj.odd,  num]
    }
    console.log(obj)
  })([1, 2, 3, 4, 5, 6])

  //Q4 obj
  (function swap(obj){
    let brObj = Object.entries(obj)
    let revObj = []
    for(let i=0; i<brObj.length; i++){
      let bag = []
    for(let j=brObj[i].length-1 ; j>=0; j--){  
         bag.push(brObj[i][j])
     }
      revObj.push(bag)
    }
     let  final = Object.fromEntries(revObj)
   console.log(final)
 })({ a: "apple", b: "banana", c: "cherry" }  )

 ///////////////////////////////
 // Q5 array 
 (function secLarge(arr){
    let order = [...arr]
    for(let i=0; i<order.length; i++){
        for (let k = i; k < order.length; k++) {
        if(order[i]>order[k]){
          let temp = order[i]
          order[i] = order[k] 
          order[k] = temp
        }
        }
    }
    return order[order.length-2]
 })([10, 5, 20, 8, 15])

 (function secLarge(arr) {
  let first = -Infinity, second = -Infinity;
  for (let num of arr) {
      if (num > first) {
          second = first;
          first = num;
      } else if (num > second && num !== first) {
          second = num;
      }
  }
  console.log(second);
})([10, 5, 20, 8, 15]);



 //                  //Q5 obj 
 (function uni(str){
       
       let obj = {}
      for(let i = 0; i<str.length; i++){
          obj[str[i]] = (obj[str[i]] || 0) + 1
      }
      return obj
   })('hello')

//////////////////////////////////////////
