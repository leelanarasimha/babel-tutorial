"use strict";

var _arithmetic = require("./arithmetic");

var greeting = 'Hello world';
console.log("--- ".concat(greeting, " from main file"));
console.log(_arithmetic.calculator.add(1, 2));
console.log(_arithmetic.calculator.subtract(10, 2));