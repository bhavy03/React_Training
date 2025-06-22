console.log("log");
// console.log(console)   to check the methods in console
console.info("info");
console.warn("warn");
console.error("err");
console.assert("err" != false);
console.assert("err" == false);
obj = { a: 1, b: 2, c: 3 };
console.table(obj);
// console.clear

console.time("forLoop");
for (let i = 0; i < 500; i++) {
  console.log(233);
}
console.timeEnd("forLoop");
// the time and timeEnd provides the time for this forloop

console.time("whileLoop");
let i = 0;
while (i < 500) {
  console.log(233);
  i++;
}
console.timeEnd("whileLoop");
