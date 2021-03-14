
function myFunction(str, k) {
  let start = 0;
  let length = 0;
  let freqObj = {};

  for (let i=0; i <str.length; i++){
    let right = str[i]
    if(!(right in freqObj)) {
      freqObj[right] = 0
      console.log('Added ', right)
    }
    freqObj[right] +=1
    while (Object.keys(freqObj).length > k) {
      let left = str[start]
      freqObj[left] -=1
      if (freqObj[left] === 0) {
        console.log('removing ', left)
        delete freqObj[left]
      }
    start += 1;
  }
    length = Math.max(length, i - start +1)
  }
  console.log('Longest Substring Length: ', length)
}

myFunction("araaci", 2) // expected output: 4
myFunction("araaci", 1) // expected output: 2
myFunction("cbbebi", 3) // expected output: 5