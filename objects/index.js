'use strict';

const VehicleConstructor = require('./vehicle-constructor.js');
const Vehic = require('./vehicle-class.js');

// Implement a car and motorcycle using a Constructor
const mazda = new VehicleConstructor.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new VehicleConstructor.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());


const v = new Vehic.Vehicle('Toyota');
console.log(v.name);
