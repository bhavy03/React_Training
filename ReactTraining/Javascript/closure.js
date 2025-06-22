function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  return y /* y()*/;
}

var z = x();
console.log(z);
// 1000 lines of code
z();
// 7
// it remembers the value of a
// closure simply is a function that remembers its lexical scope
// even if the function is executed outside its lexical scope


function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  return inner;
}
const fn = outer();
fn();
fn();
fn();

// function init() {
// var name = 'Mozilla'; // name is a local variable created by init
// function displayName() {
// displayName() is the inner function, a closure
// console.log(name); // use variable declared in the parent function
// }
// name = "Harry"
// return displayName;
// }
// let c = init();
// c()

// function returnFunc() {
//   const x = () => {
//     let a = 1;
//     console.log(a);
//     const y = () => {
//       let a = 2;
//       console.log(a);
//       const z = () => {
//         let a = 3;
//         console.log(a);
//       };
//       z();
//     };
//     a = 999;
//     y();
//   };
//   return x;
// }

let a = returnFunc()
a()
console.log("helllo  woeldf")

// Closure
// In JavaScript, when we return a function from another function, we are effectively returning a
// combination of the function definition along with the function's scope. This would let the
// function definition have an associated persistent memory which could hold on to live data
// between executions. That combination of the function and its scope chain is what is called a
// closure in JavaScript.
// simply function along with its lexical scope is closure

// use functions as there own world
// don't use them to impact outer world
// and make the functions pure means they should always
// return something and everytime it is the same

// [] === []
// false

// [1] === [1]
// false

var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };
object1 === object2; //true
object1 === object3; //false
object1.value = 15;
object2.value;
object3.value;
