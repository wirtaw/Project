'use strict';

function inc(a) {
  return ++a;
}

const sum = function(a, b) {
  return a + b;
};

const max = (a, b) => (a > b ? a : b);

const quote = function(id, callback) {
  const q = `quote number ${id}`;
  callback(q);
};

console.log('Names: ');
console.dir({
  inc: inc.name,
  sum: sum.name,
  max: max.name,
  quote: quote.name
});

console.log('Anonymous function: ' + function(x) { return x; }.name);
console.log('Anonymous lambda: ' + (x => x).name);

console.log('Arguments: ');
console.dir({
  inc: inc.length,
  sum: sum.length,
  max: max.length,
  quote: quote.length
});

console.log('toString: ');
console.dir({
  inc: inc.toString(),
  sum: sum.toString(),
  max: max.toString(),
  quote: quote.toString()
});
