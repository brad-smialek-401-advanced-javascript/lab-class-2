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

  it('remove items at the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    stuff.pop();
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('b');
  });

  it('test shiftMethod works as expected', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    console.log(stuff.shift());
    console.log(stuff.shift().keys);
    expect(stuff.shift()).toEqual({'0': 'b', '1': 'c' });
  });

  it('test unshiftMethod works as expected', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    
    console.log(stuff.shift());
    console.log(stuff.shift().keys);
    expect(stuff.shift()).toEqual({ '0': 'person', '1': 'a', '2': 'b', '3': 'c' });
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

  it('test filter works as expected', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    console.log(stuff.shift());
    console.log(stuff.shift().keys);
    expect(stuff.shift()).toEqual({'0': 'b', '1': 'c' });
  });

  it('test reduce method works as expected', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    
    console.log(stuff.shift());
    console.log(stuff.shift().keys);
    expect(stuff.shift()).toEqual({ '0': 'person', '1': 'a', '2': 'b', '3': 'c' });
  });

});
