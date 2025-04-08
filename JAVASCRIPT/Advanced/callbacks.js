// function a(b) {
// console.log("A function is called")
// }
// function b() {
// console.log("B function is called")
// }
// a(b())
//it will print B function is called first then A function is called

// a(b)	Pass function b as a reference
// a(b())	Call b() first, pass its result

// function a(b) {
// console.log("A function is called")
// b()
// }
// a(function b() {
// console.log("B function is called")
//
// })
// it will print A function is called first then B function is called


// function a() {
// console.log("hello")
// b()
// }
// function b() {
// console.log("world")
// }
// a()
// we can call a function inside another function


// function myDisplayer(some) {
// console.log(some);
// console.log("hello");
// }
//
// function myCalculator(num1, num2) {
// let sum = num1 + num2;
// console.log("world")
// return sum;
// }
// myDisplayer(myCalculator(5, 5));


// function myDisplayer(some) {
    // console.log(some);
    // console.log("hello");
// }
//
// function myCalculator(num1, num2) {
    // let sum = num1 + num2;
    // console.log("world")
    // myDisplayer(sum);
// }
// myCalculator(5, 5);


// function myDisplayer(something) {
    // console.log(something);
    // console.log("hello");
// }
//
// function myCalculator(num1, num2, myCallback) {
    // let sum = num1 + num2;
    // console.log("world")
    // myCallback(sum);
// }
// myCalculator(5, 5, myDisplayer);