function myFunction(s, arr) {
  let result = 0;
  let sum = 0, subLength = 0, lengths = [];

  if (Math.max(...arr)>=s) { return 1 } else {
    for(let i=0; i<arr.length; i++) {
      subLength++
      sum += arr[i]
      if(sum >= s) {
        lengths.push(subLength)
        subLength--
        sum-=arr[i-subLength]
      }
      if(sum >= s) {
        lengths.push(subLength)
        subLength--
        sum-=arr[i-subLength]
      }
    }
    return Math.min(...lengths);
  }

}


myFunction (8,[3,4,1,1,6])