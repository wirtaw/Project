'use strict';

const city = {
  name: 'Kiev',
  year: 482,
  f1: function() {
    return `${this.name} build year ${this.year}`;
  },
  f2: () => {
    return `${this.name} build year ${this.year}`;
  }
};

console.log('city.f1() = ' + city.f1());
console.log('city.f2() = ' + city.f2());
