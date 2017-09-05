'use strict';

const sum = new Function('a, b', 'return a + b');

console.dir({
  name: sum.name,
  length: sum.length,
  toString: sum.toString(),
  result: 'sum(2, 6)=' + sum(2, 6)
});
