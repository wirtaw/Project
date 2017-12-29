'use strict';

// undefined

let u;
console.log({ u }, typeof(u));

// null

const o = null;
console.log({ o }, typeof(o));

//  NaN

let n = NaN;
console.log({ n }, typeof(n));

n = undefined + 1;
console.log({ n }, typeof(n));

const n2 = parseInt('a12');
console.log({ n2 }, typeof(n2));
console.log('n == n2 ', (n == n2));
console.log('n === n2 with type ', (n === n2));
console.log('isNaN ', isNaN(n2));
