'use strict';

const power = Math.pow;
const square = x => power(x, 2);
const cube = x => power(x, 3);
const f = (x, y) => Math.sqrt(square(x) + square(y));

console.log(power(10, 2));
console.log(square(10));

console.log(power(10, 3));
console.log(cube(10));
console.log('sqtr(3^2 + 4^2)', f(3, 4));
