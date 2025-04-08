var b = 9; 
function greets() {
    console.log("Good")
}
console.log(b);
greets();
console.log(greets)
// now here what happens is javascript provides memory to b with undefined
// and greets with whole function even before execution of line 1


console.log(a)
console.log(greet)
greet()
function greet() {
    console.log("Good morning")
}
var a = 9; // Declaration hoisted to the top but initialization is not
console.log(a)
// now here also happens the same a also declared as undefined 
// and greet will be stored as a function
// but if donot write var a = 9 the it will show error as not defined
// function expression and class expression are not hoisted
// let and arrow function aren't hoisted

getname();
var getname = () =>{
    console.log("hello")
}
// now here getname also behaves as a variable rather than
// as a function so it gets stored as undefined and then it 
// throws error as getname is not a function



// now a doubt if getname declared as variable and we also 
// declared it afterwards so why throw error
