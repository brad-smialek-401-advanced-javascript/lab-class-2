'use strict';

const ListCon = require('./list-constructor.js');
const List = require('./list.js');

let stuff = new List();
stuff.push('a');
stuff.push('b');
stuff.push('c');
stuff.push('abc');
stuff.push('a');
stuff.push('b');
stuff.push('f');
stuff.push('a');
stuff.push('b');
stuff.push('c');
stuff.push('d');
stuff.push('e');
stuff.push('f');
console.log(stuff);
stuff.pop();
console.log('popped',stuff);
stuff.shift();
console.log('shifted',stuff);
stuff.unshift('people');
console.log('unshifted',stuff);
stuff.forEach();
console.log('forEached',stuff);
stuff.map();
console.log('mapped',stuff);
stuff.filter();
console.log('filtered',stuff);
console.log(stuff.reduce());
// console.log('reduced',stuff);
