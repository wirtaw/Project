'use strict';

const o = {
  a: 2,
  m() {
    return this.a + 1;
  }
};

console.log('object o');
console.dir(o);
console.log(o.hasOwnProperty('a'));
console.log(o.hasOwnProperty('m'));
console.log(o.m()); // 3
// в этом случае при вызове 'o.m' this указывает на 'o'

const p = Object.create(o);
// 'p' - наследник 'o'

p.a = 12; // создаст собственное свойство 'a' объекта 'p'
console.log('object p');
console.dir(p);
console.log(p.hasOwnProperty('a'));
console.log(p.hasOwnProperty('m'));
console.log(p.m()); // 13
// при вызове 'p.m' this указывает на 'p'.
// т.е. когда 'p' наследует функцию 'm' объекта 'o',
// this.a означает 'p.a', собственное свойство 'a' объекта 'p'
