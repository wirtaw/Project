'use strict';

const cities = ['Athens', 'Roma', 'London', 'Beijing', 'Kiev', 'Riga'];
const f = s => s.length;

function f1() {
  const cities = ['Vilnius', 'Minsk'];
  const f = s => s.toUpperCase();
  console.dir({ cities });
  console.dir(cities.map(f));

  {
    const f = s => s.toLowerCase();
    console.dir({ cities });
    console.dir(cities.map(f));
  }

  {
    const cities = ['Tallin', 'Helsinki', 'Warsaw'];
    console.dir({ cities });
    console.dir(cities.map(f));
  }

}

f1();

console.dir({ cities });
console.dir(cities.map(f));
