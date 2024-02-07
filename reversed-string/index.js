// Complete the solution so that it reverses the string passed into it.

// example
/*/'world'  =>  'dlrow'
'   word'   =>  'drow'
 /*/

function solution(str) {
  let splitString = str.split("");
  let reverseString = splitString.reverse();
  let joinStringReverse = reverseString.join("");
  return joinStringReverse;
}

console.log(solution("pajar"));
