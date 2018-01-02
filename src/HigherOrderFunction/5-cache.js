
'use strict';

function fn() {
  console.log('Generate cache');
  const cache = {};
  return function(a) {
    let res = cache[a];
    if (res) {
      console.log('From cache');
      return res;
    } else {
      console.log('Calculate and save to cache');
      res = 'value' + a;
      cache[a] = res;
      return res;
    }
  };
}

const f1 = fn();
const f2 = fn();
f1(1);
f1(2);
f1(1);
f1(2);
const f1N = f1.call(null, {});
console.log('f1N[1]', JSON.stringify(f1N[1]));
f2(1);
f2(2);
f2(1);
f2(2);
const f2N = f2.call(null, {});
console.log('f2N[1]', JSON.stringify(f2N[1]));
