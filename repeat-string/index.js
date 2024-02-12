/*?
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

example
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
/*/

function repeatStr(n, s) {
  let repeatedString = "";
  for (let i = 0; i < n; i++) {
    repeatedString += s;
  }
  return repeatedString;
}

console.log(repeatStr(5, "jkl"));
