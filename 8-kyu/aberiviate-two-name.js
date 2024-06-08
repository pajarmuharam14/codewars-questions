/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

function abbrevName(name) {
  let words = name.split(" ");
  let getFirstLetter = words
    .map((word) => word.charAt())
    .join(".")
    .toUpperCase();
  return getFirstLetter;
}

console.log(abbrevName("pajar muharam"));
