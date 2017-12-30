'use strict';

const add = x => y => {
  const z = x + y;
  console.log(x + '+' + y + '=' + z);
  return z;
};

const addPure = x => y => x + y;

const res = add(3)(6);
const resPure = addPure(3)(6);

console.log(res);
console.log(resPure);
