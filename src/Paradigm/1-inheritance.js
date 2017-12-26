'use strict';

// user constructor
function User(name, age) {
  this.name = name;
  this.age = age;
  this.go = function() {
    console.log(this.name + ' gone \n');
  };
  this.displayInfo = function() {
    console.log('Name: ' + this.name + '; age: ' + this.age + '\n');
  };
}
User.prototype.maxage = 110;

// employee constructor
function Employee(name, age, comp) {
  User.call(this, name, age);
  this.company = comp;
  this.displayInfo = function() {
    console.log('Name: ' + this.name + '; age: ' + this.age +
    '; company: ' + this.company + '\n');
  };
}
Employee.prototype = Object.create(User.prototype);
Employee.prototype = {
  maxage: 115
};

const tom = new User('Tom', 26);
const bill = new Employee('Bill', 32, 'XYZ');
tom.go();
bill.go();
tom.displayInfo();
bill.displayInfo();
console.log(tom.maxage);
console.log(bill.maxage);
