function triangularSum(arr){
  for(let i = arr.length - 1;i>0;i--){
    for(let j = 0;j<i;j++){
      arr[j] = (arr[j] + arr[j+1]) % 10;
    }
    console.log(arr)
  }
  return arr[0];
}

console.log(triangularSum([1,2,3,4,5,6]))
//not submitted
