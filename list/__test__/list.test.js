'use strict';

// These 2 should be interchangeable!
// const List = require('../list.js');
const List = require('../list-constructor.js');

describe('List Data Structure', () => {

  it('starts with a length of -1 and an empty data set', () => {
    let stuff = new List();
    expect(stuff.length).toEqual(0);
    expect(stuff.data).toEqual({});
  });

  it('pushes items to the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('b');
  });

  it('test shiftMethod works as expected', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    
    
    console.log('this.data =', stuff.shift());
    expect(stuff.shift()).toEqual({'1': 'b', '2': 'c' });
    
    
  });

});
