'use strict';

const scalar = 5;
const object1 = { scalar };
const object2 = object1;
const object3 = { scalar };

object1.scalar = 6;
object2.scalar = scalar;
object3.scalar = 0;

console.log({ object1 });
console.log({ object2 });
console.log({ object3 });
console.dir({ scalar });

const scalarStr = 'Kiev';
const objectStr1 = { scalarStr };
const objectStr2 = objectStr1;
const objectStr3 = { scalarStr };

objectStr1.scalarStr = 'Odessa';
objectStr2.scalarStr = scalarStr;
objectStr3.scalarStr = 'Lviv';

console.log({ objectStr1 });
console.log({ objectStr2 });
console.log({ objectStr3 });
console.dir({ scalarStr });
