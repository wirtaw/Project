'use strict';

const person = {
  name: 'Marcus',
  city: 'Roma',
  born: 121
};

const s = JSON.stringify(person);
console.log(s);

const obj = JSON.parse(s);
console.dir(obj);

const letters = ['A', 'B', 'C', 'D'];
console.log(letters + '');
console.log(JSON.stringify(letters));

const numbers = [1, 2, 3, 4];
console.log(numbers + '');
console.log(JSON.stringify(numbers));

const person2 = {
  name: 'Mikolaj',
  city: 'Torun',
  born: '1473'
};
const person3 = {
  name: 'Leonardo',
  city: 'Anchiano',
  born: '1452'
};
const person4 = {
  name: 'Cristoforo ',
  city: 'Genova',
  born: '1451'
};
const collection = [person, person2, person3, person4];
console.log(collection + '');
console.log(JSON.stringify(collection));


