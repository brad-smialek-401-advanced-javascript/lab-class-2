'use strict';

// These 2 should be interchangeable!
// const List = require('../list.js');
const List = require('../list.js');

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

  it('remove items at the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    stuff.pop();
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('b');
  });

  it('removes items from the front of data set shift', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    
    expect(stuff.shift()).toEqual('a');
  });

  it('adds items to the front of data set unshift', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    expect(stuff.unshift('person')).toEqual({ '0': 'person', '1': 'a', '2': 'b', '3': 'c' });
  });

  it('it does something(adds letter b) to forEach element in data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    expect(stuff.forEach(stuff)).toEqual({'0': 'ab', '1': 'bb', '2': 'cb'});
  });
  

  it('iterates over data sat and returns mutated data set.  Does something to each element in data set map', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    
    expect(stuff.length).toEqual(3);
    expect(stuff.map()).toEqual( { '0': 'A','1': 'B','2': 'C' });
  });

  it('filter creates a new array with all elements that pass the test', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('abc');
    
    expect(stuff.filter(2)).toEqual({'0': 'abc' });
  });
  /*The reduce() method executes the callback once for each assigned value present in the array, taking four arguments:

accumulator
currentValue
currentIndex
array
The first time the callback is called, accumulator and currentValue can be one of two values. If initialValue is provided in the call to reduce(), then accumulator will be equal to initialValue, and currentValue will be equal to the first value in the array. If no initialValue is provided, then accumulator will be equal to the first value in the array, and currentValue will be equal to the second.*/
  it('test reduce method works as expected', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('abc');
    stuff.push('a');
    stuff.push('b');
    
    
    expect(stuff.reduce()).toEqual({ a: 2, b: 2, abc: 1 });
  });

});
