'use strict';

function List() {
  this.length = 0;
  this.data = {};
}

//Add item to the end of the list
List.prototype.push = function(item) {
  this.data[this.length] = item;
  this.length++;
};

// Remove an item from the end of the list and return it's value
List.prototype.pop = function() {
  let returnValue = this.data;
  this.length--;
  delete this.data[this.length];
  return returnValue;
};


// Removes the first element from an array and returns that removed element
List.prototype.shift = function() {
  let returnValue = this.data[this.length];
  
  this.length--;
  return returnValue;
};

//adds items to beggining of array
List.prototype.unshift = function(item) {
  let returnValue = this.data;
  this.data[this.length+1] = item;
  this.length++;
  
  
  return returnValue;
};


List.prototype.forEach = function() {
  let returnValue = this.data;
  
  
  
  return returnValue;
};


List.prototype.map = function() {
  let returnValue = this.data;
  
  
  
  return returnValue;
};


List.prototype.filter = function() {
  let returnValue = this.data;
  
  
  
  return returnValue;
};


List.prototype.reduce = function() {
  let returnValue = this.data;
  
  
  
  return returnValue;
};

module.exports = List;
