function myFunction(s, arr) {
  let sum = 0, length = Infinity, start =0;

  for (let i=0; i < arr.length; i++) {
    sum += arr[i];

    while (sum >=s) {
      length = Math.min(length, i-start+1);
      sum -= arr[start];
      start += 1;
    }
  }
  if (length === Infinity) {
    console.log(0);
  }
  console.log(length);
}


myFunction (7, [2, 1, 5, 2, 8])