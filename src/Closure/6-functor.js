'use strict';

const add = x => {
  const f = y => {
    const z = x + y;
    console.log(x + '+' + y + '=' + z);
    return add(z);
  };
  f.map = fn => fn(x);
  return f;
};

const a1 = add(5);
const a2 = a1(2);
const a3 = a2(3);
const a4 = a1(1);
const a5 = a2(10);

console.dir({ a3 });
a3.map(console.dir);
console.dir({ a4 });
a4.map(console.dir);
console.dir({ a5 });
a5.map(console.dir);
a5.map(console.log);
