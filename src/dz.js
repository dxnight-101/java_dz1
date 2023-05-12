'use strict';
function chisla(number) {
  if (number < 2) {
    return false;
  }
  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
function printPrimes(start, end) {
  for (var i = start; i <= end; i++) {
    if (chisla(i)) {
      console.log(i);
    }
  }
}
printPrimes(1, 100);
