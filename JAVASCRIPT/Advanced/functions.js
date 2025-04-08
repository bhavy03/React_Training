// in javascript functions act as a variable so it can be passed as argument in another functions
// we can do the same process via function expression

// first class functions
// the ability of functions to be used as values and can be passed as an argument to another function
// and returns function from it this ability is first class functions
// function can be passed as an argument to another function
// function can be returned from another function
// ability to be used like values make the function first class functions

// higher order functions are those which takes function as a argument
// or return a function from it
// or the function being called is called as callback function

const radius = [1, 2, 3, 4];
const calculateArea = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};

console.log(calculateArea(radius));
// now problem of this type of function is if we want to calculate circumference and diameter also
// then the code repeats itself and the code is 90% percent same

const area = function (radius) {
  return Math.PI * radius * radius;
};
const calculate = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};
console.log(calculate(radius, area));
// now here we can form small functions with radius and pass them into as callback

console.log(radius.map(area));
// now this map and our above code are almost same but if we want to change above code into this
// type do these changes
// Array.prototype.calculate = function (logic) {
// const output = [];
// for (let i = 0; i < this.length; i++) {
// output.push(logic(this[i]))
// }
// return output;
// }
// console.log(radius.calculate(area))

// we can pass objects in functions
const getdata = (product) => {
  console.log(product);
};
getdata({ name: "ahri", jkj: 33, kadsf: "adsfa" });

// types of functions

// 1. Function Declaration (a.k.a. Named Function)
// function greet() {
//     console.log("Hello, Bhavya!");
// }
// greet();
// it is hoisted

// 2. Function expression (Can be anonymous or named)
// const greet = function () {
//   console.log("Hey there!");
// };
// greet();

// 3. Arrow function
// const greet = () => {
//   console.log("Yo!");
// };
// greet();
// Not hoisted and does not have its own this

// 4. Immediately Invoked Function Expression (IIFE)
// (function () {
//   console.log("I ran myself!");
// })();
// or(() => {
//   console.log("Auto-run!");
// })();

// 5. Function as a Method (inside objects)
// const person = {
//   name: "Bhavya",
//   greet: function () {
//     console.log("Hi, " + this.name);
//   },
// };
// person.greet(); // "Hi, Bhavya"
