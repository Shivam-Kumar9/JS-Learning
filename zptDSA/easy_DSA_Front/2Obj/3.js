

(function countCharFrequency(str){
    let obj = {}
    for(let num of str){
        if(str[num] !== " "){
            obj[num] = (obj[num] || 0) +1
        }
    }
    return obj
})("hello")

(function countCharFrequency(str){
    let obj = {}
    for(let num of str.trim()){
      
            obj[num] = (obj[num] || 0) +1
        
    }
    return obj
})("hello")