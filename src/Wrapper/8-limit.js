'use strict';

// Wrapper will prevent calls > n

const limit = (count, fn) => {
  let counter = 0;
  return (...args) => {
    if (counter === count) return;
    const res = fn(...args);
    counter++;
    return res;
  };
};

// Usage

const fn = (par) => {
  console.log('Function called, par: ' + par);
};

const fn2 = limit(5, fn);

fn2('first');
fn2('second');
fn2('third');
fn2('four');
