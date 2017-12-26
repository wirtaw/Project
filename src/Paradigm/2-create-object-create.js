'use strict';

const a = { a: 1 };
// a ---> Object.prototype ---> null
console.log('object a');
console.dir(a);
console.log(a.hasOwnProperty('a'));

const b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log('object b');
console.dir(b);
console.log(b.a);
console.log(b.hasOwnProperty('a'));

const c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null
console.log('object c');
console.dir(c);
console.log(c.hasOwnProperty('a'));

const d = Object.create(null);
// d ---> null
console.log('object d');
console.dir(d);
console.log(d.hasOwnProperty);
// undefined, т.к. 'd' не наследуется от Object.prototype
