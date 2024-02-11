function paperWork(n, m) {
  let calculate = n * m;
  if (n < 0 || m < 0) {
    calculate = 0;
  }
  return calculate;
}

console.log(paperWork(5, 0));
