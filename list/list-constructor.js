'use strict';

function List() {
  this.length = 0;
  this.data = {};
}
/**
 * Add item to the end of the list
 * @param item
 */
List.prototype.push = function(item) {
  this.data[this.length] = item;
  this.length++;
};

/**
 * // Remove an item from the end of the list and return it's value
 * @returns {*}
 */
List.prototype.pop = function() {
  let returnValue = this.data[this.length];
  delete this.data[this.length];
  this.length--;
  return returnValue;
};

/**
 * // Removes the first element from an array and returns that removed element
 * @//
 */
List.prototype.shift = function() {
  let returnValue = this.data;
  // delete this.data[0];
  
  
  return returnValue;

}

/**
 * //
 * @//
 */
List.prototype.unshift = function() {
  
}

/**
 * //
 * @//
 */
List.prototype.forEach = function() {
  
}

/**
 * //
 * @//
 */
List.prototype.map = function() {
  
}

/**
 * //
 * @//
 */
List.prototype.filter = function() {
  
}

/**
 * //
 * @//
 */
List.prototype.reduce = function() {
  
}

module.exports = List;
