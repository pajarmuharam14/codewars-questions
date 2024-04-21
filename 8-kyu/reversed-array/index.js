/*
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

example
35231 => [1,3,2,5,3]
0 => [0]

*/

function digitize(n) {
  const digits = Array.from(String(n), Number).reverse();
  return digits;
}
