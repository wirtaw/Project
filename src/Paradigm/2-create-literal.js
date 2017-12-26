'use strict';

const o = { a: 1 };

console.log('object o');
console.dir(o);
console.log('object o prototype');
console.dir(o.__proto);

// Созданный объект 'o' имеет Object.prototype в качестве своего [[Prototype]]
// у 'o' нет собственного свойства 'hasOwnProperty'
// hasOwnProperty — это собственное свойство Object.prototype.
// Таким образом 'o' наследует hasOwnProperty от Object.prototype
// Object.prototype в качестве прототипа имеет null.
// o ---> Object.prototype ---> null

const a = ['yo', 'whadup', '?'];
console.log('array a');
console.dir(a);
console.log('array a prototype');
console.dir(a.__proto);
// console.log('Array prototype');
// console.dir(a.prototype.prototype);

// Массивы наследуются от Array.prototype
// (у которого есть такие методы, как indexOf, forEach и т.п.).
// Цепочка прототипов при этом выглядит так:
// a ---> Array.prototype ---> Object.prototype ---> null

function f() {
  return 2;
}
console.log('function f');
console.dir(f);
console.log('function f prototype');
console.dir(f.__proto);
// console.log('Function prototype');
// console.dir(f.prototype.prototype);

// Функции наследуются от Function.prototype
// (у которого есть такие методы, как call, bind и т.п.):
// f ---> Function.prototype ---> Object.prototype ---> null
