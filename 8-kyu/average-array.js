/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

function findAverage(array) {
  const sum = array.reduce((acc, curr) => acc + curr, 0);
  return array.length == 0 ? 0 : sum / array.length;
}

console.log(findAverage([]));
