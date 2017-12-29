'use strict';

function Graph() {
  this.vertexes = [];
  this.edges = [];
}

Graph.prototype = {
  addVertex(v) {
    this.vertexes.push(v);
  }
};

const g = new Graph();
console.log('object g');
console.dir(g);
console.log({ g }, typeof(g));
g.addVertex({ x: 10, y: -2, z: 5 });
console.dir(g);
// объект 'g' имеет собственные свойства 'vertexes' и 'edges'.
// g.[[Prototype]] принимает значение Graph.prototype
// при выполнении new Graph().
