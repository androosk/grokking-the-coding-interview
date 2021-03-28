function myFunction(fruits) {
  let start = 0;
  let length = 0;
  let basketsObj = {};

  for (let i=0; i<fruits.length; i++) {
    let right = fruits[i]
    if (!(right in basketsObj)) {
      basketsObj[right] = 0
      console.log('Added ', right)
    }
    basketsObj[right] += 1
    while (Object.keys(basketsObj).length > 2) {
      let left = fruits[start]
      basketsObj[left] -=1
      if (basketsObj[left] === 0){
        console.log('removing ', left)
        delete basketsObj[left]
      }
      start +=1
    }
    length = Math.max(length, i- start +1)
  }
  console.log('Max fruits in both baskets ', length)
}


myFunction(['A','B','C','B','B','C'])