'use strict';

class Vehicle {

  // when creating a new Car , store its name
  constructor(name, wheels) {
    this.name = name;
    this.wheels = wheels;
  }

  // All cars can drive and stop.  This will be a prototype method
  drive() {
    return 'Moving Forward';
  }

  stop() {
    return 'Stopping';
  }

}

class Car extends Vehicle {

  constructor (name) {
    super(name, 4);
  }
}

class Motorcycle extends Vehicle {

  constructor (name) {
    super(name, 2);
  }

  wheelie() {
    return 'Whee!';
  }
}



module.exports = {Vehicle, Car, Motorcycle};