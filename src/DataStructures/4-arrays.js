'use strict';

const letters = [];
letters.push('B');
console.dir({ letters });
letters.unshift('A');
console.dir({ letters });
letters.push('C');
console.dir({ letters });

const numbers = [1, 2, 3, 4];
console.dir({ numbers });
numbers.push(-1);
console.dir({ numbers });

const languages = ['C++', 'JavaScript', 'Python', 'Haskell'];
console.dir({
  length: languages.length,
  'languages[0]': languages[0],
  'languages[languages.length-1]': languages[languages.length - 1]
});
languages.push('C');
console.dir({
  length: languages.length,
  'languages[0]': languages[0],
  'languages[languages.length-1]': languages[languages.length - 1]
});
languages.push('Java');
languages.push('PHP');
languages.push('Swift');
console.dir({
  length: languages.length,
  'languages[0]': languages[0],
  'languages[languages.length-1]': languages[languages.length - 1]
});
