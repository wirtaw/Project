'use strict';

function inc(a) {
  return ++a;
}

const sum = function(a, b) {
  return a + b;
};

const max = (a, b) => (a > b ? a : b);
const min = (a, b) => (a < b ? a : b);
const equal = (a, b) => (a === b);

console.log('inc(5) = ' + inc(5));
console.log('sum(1, 3) = ' + sum(1, 3));
console.log('max(8, 6) = ' + max(8, 6));
console.log('min(8, 6) = ' + min(8, 6));
console.log('equal(8, 6) = ' + equal(8, 6));
console.log('equal(8, 8) = ' + equal(8, 8));
