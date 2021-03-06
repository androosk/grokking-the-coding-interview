const max_sub_array_of_size_k = function(k, arr) {
  let result = [];
  let windowSum = 0, windowStart = 0;

  for(let windowEnd=0; windowEnd<arr.length; windowEnd++){

    windowSum += arr[windowEnd]
    if(windowEnd >= k-1) {
      result.push(windowSum);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }
  return Math.max(...result)
};

const sumArray = max_sub_array_of_size_k(3,[2,1,5,1,3,2])
console.log(sumArray)