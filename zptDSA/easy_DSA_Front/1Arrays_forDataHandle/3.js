


(function removeDuplicates(arr){
 
    const isthere = {}
    const result = []
    for(let num of arr){
         if(!isthere[num]){
            isthere[num] =true;
            result.push(num)
         }
    }
    console.log( result)
    return  result

})([1, 2, 2, 3, 4, 4, 5])


(function removeDuplicates(arr){
 
    const numFreq = {}
    const res = []
    for(let num of arr){
        numFreq[num] = (numFreq[num] || 0)+1
    }
    for(let k in numFreq){
        res.push(+k)
    }
    console.log(res )
    return res

})([1, 2, 2, 3, 4, 4, 5])

(function removeDuplicates(arr){
 
    const numFreq = {}
    for(let num of arr){
        numFreq[num] = (numFreq[num] || 0)+1
    }
    console.log(Object.keys(numFreq))
    return Object.keys(numFreq).map(num=>+num)

})([1, 2, 2, 3, 4, 4, 5])

// issue in this this .key arranges in order the araray  || not giving the raw original order