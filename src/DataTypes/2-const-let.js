'use strict';

console.log({ a });

var a = 5;
let b = 6;
const c = 7;

console.log({ a, b, c });

a = 8;
b = 9;
//c = 85; Error with assigment to const

console.log({ a, b, c });
