(function findMostExpensive(obj){

    const got = {name : null , price : -Infinity}
    for(let k in obj){
       if( got.price <obj[k] ){
        got.price = obj[k]
        got.name = k
       }
      }

  console.log(got)
})({
    laptop: 800,
    phone: 500,
    tablet: 600,
    monitor: 300
  })