'use strict';

// Function throttling, executed once per interval

const throttle = (timeout, fn, ...args) => {
  let timer;
  let wait = false;
  let wrapped = null;

  const throttled = (...par) => {
    timer = undefined;
    if (wait) wrapped(...par);
  };

  wrapped = (...par) => {
    if (!timer) {
      timer = setTimeout(throttled, timeout, ...par);
      wait = false;
      return fn(...args.concat(par));
    } else {
      wait = true;
    }
  };

  return wrapped;
};

// Usage

const fn = (...args) => {
  console.log('Function called, args: ' + args);
};

const ft = throttle(70, fn, 'value1');

const timer = setInterval(() => {
  fn('value2');
  ft('value3');
  ft('value4');
}, 100);

setTimeout(() => {
  clearInterval(timer);
}, 2000);
