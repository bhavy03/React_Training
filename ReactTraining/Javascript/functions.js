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

const hello = () => {
  //we prefer this function syntax
  console.log("Hey how are you. I am toh fine yaar");
  return "hi";
};

// there are three ways of writing functions
// 1) Function declaration
// 2) Function expression
// 3) Arrow function
function onePlusAvg(x, y) {
  return 1 + (x + y) / 2; //funciton declaration
}

// typeof (onePlusAvg)
// 'function'
// typeof (onePlusAvg(5, 3))
// 'number'

var sayit = function () {
  // but here we can technically write function name after function
  console.log("hello"); // function expression
}; // here we are referencing this function by variable sayit
// and the function doesn't have it's own name so these type of functions
// are known as anonymous functions

// named function expression
// var b = function xyz(a) {
// console.log("Hello");
// }

const sum = (p, q) => {
  return p + q; // arrow function
  // return p;
  // return q;
  // the above two lines ain't going to run because
};
// typeof (sum)
// 'function'
// typeof (sum())
// 'number'

function multiply(a, b) {
  // here a and b are parameters
  if (a > 10 || b > 10) {
    return "that's to hard";
  } else {
    return a * b;
  }
  return a; // here this doesn't work as one return statement is already invoked in if statement
}
// in javascript functions act as a variable so it can be passed as argument in another functions
// we can do the same process via function expression

const fun = (a, b, c, d) => console.log(a);
fun(a, b, c, d);
// this is also a nice syntax for long parameters

alert(multiply(3, 4)); // here 3 and 4 are arguments
let a = 1;
let b = 2;
let c = 3;
let v = hello();
console.log(v);
hello();
console.log("One plus Average of a and b is ", onePlusAvg(a, b));
console.log("One plus Average of b and c is ", onePlusAvg(b, c));
console.log("One plus Average of a and c is ", onePlusAvg(a, c));
sayit();
console.log(sum(9, 7));
multiply(4, 20);
