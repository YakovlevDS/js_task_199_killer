function dataReverse(data) {
  const bytes=data.length/8
  let newArr=[]
  let resultArr=[]
  for (let j=1;j<=bytes;j++){
  newArr=[]
  for (let i=0;i<8;i++){
    newArr.push(data[0])
    data.shift()
  }
  resultArr.unshift(...newArr)
}
 
  return resultArr
  }
  console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]));
  console.log(dataReverse([0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1]));

  document.writeln(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]))
 
  