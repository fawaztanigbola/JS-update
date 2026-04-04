function candies(kids){
  if (kids.length <= 1){
    return -1
  }else{
    let reArr = kids.sort((a, b) => a - b)
    let maxNum = reArr[reArr.length-1]
    let finArr = []
    for (let i=0; i< reArr.length-1; i++){
      let x = maxNum - reArr[i]
      finArr.push(x)
    }
    const finalVal = finArr.reduce((acc, cval) => acc + cval, 0)
    return finalVal;
  }
}
