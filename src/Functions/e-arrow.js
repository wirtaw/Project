'use strict';

const empty = () => {};
console.dir(empty);

const simple = a => { a > 15 ? 15 : a; };
console.log('simple(16) = ' + simple(16));
console.log('simple(10) = ' + simple(10));

const max = (a, b) => { a > b ? a : b; };
console.log('max(10, 25) = ' + max(10, 25));

const arr = [5, 6, 13, 0, 1, 18, 23];

const sum = arr.reduce((a, b) => a + b);
console.log('sum [5, 6, 13, 0, 1, 18, 23] = ' + sum);

const even = arr.filter(v => v % 2 === 0);
console.log('even [5, 6, 13, 0, 1, 18, 23] = ' + JSON.stringify(even));

const double = arr.map(v => v * 2);
console.log('double [5, 6, 13, 0, 1, 18, 23] = ' + JSON.stringify(double));

setTimeout(() => {
  console.log('I happen sooner');
  setTimeout(() => {
    // deeper code
    console.log('I happen later');
  }, 1);
}, 1);
