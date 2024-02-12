// You get an array of numbers, return the sum of all of the positives ones.

// example [1,-4,7,12] => 1 + 7 + 12 = 20

function positiveSum(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      result;
    } else {
      result += arr[i];
    }
  }
  return result;
}

console.log(positiveSum([1, 2, 3, 4, 5]));
