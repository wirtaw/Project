'use strict';

function A(a) {
  this.varA = a;
}

// What is the purpose of including varA in the prototype when
// A.prototype.varA will always be shadowed by
// this.varA, given the definition of function A above?
A.prototype = {
  varA: null,  // Shouldn't we strike varA from the prototype as doing nothing?
  // perhaps intended as an optimization to allocate space in hidden classes?
  // https://developers.google.com/speed/articles/optimizing-javascript#Initializing instance variables
  // would be valid if varA wasn't being initialized uniquely for each instance
  doSomething(...args) {
    console.log('doSomething A');
    console.dir(args);
  }
};

function B(a, b) {
  A.call(this, a);
  this.varB = b;
}
B.prototype = Object.create(A.prototype, {
  varB: {
    value: null,
    enumerable: true,
    configurable: true,
    writable: true
  },
  doSomething: {
    value() { // override
      console.log('arguments');
      console.dir(arguments);
      A.prototype.doSomething.apply(this, arguments); // call super
      console.log('doSomething B');
    },
    enumerable: true,
    configurable: true,
    writable: true
  }
});
B.prototype.constructor = B;

const b = new B();
console.log('object b');
console.dir(b);
console.log(b.hasOwnProperty('varB'));
console.log(b.hasOwnProperty('varA'));
console.log(b.hasOwnProperty('doSomething'));
b.doSomething();
