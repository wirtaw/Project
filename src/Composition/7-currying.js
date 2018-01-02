'use strict';

function sum(x, y, z) {
  const oldX = x;
  const oldY = y;
  const oldZ = z;

  if (oldY === undefined) {
    return function(newY) {
      if (oldZ === undefined) {
        return function(newZ) {
          return oldX + newY + newZ;
        };
      }
      return oldX + newY;
    };
  }
  return x + y + z;
}
console.log(sum(5), typeof (sum(5)));
console.log(sum(5)(6), typeof (sum(5)(6)));
console.log(sum(5)(6)(3), typeof (sum(5)(6)(3)));

const sum2 = a => b => c => a + b + c;

console.log(sum2(10)(5)(3));

const greeting = () => () => () => () => console.log('Hey!');
greeting()()()();
