// as javascript was created by netscape browser
// but all the browers are using it so it submitted it to ECMA international
// so it can be standarized and everyone can use this version of javascript
// ECMAscript is the standard javascript
// now babel is used to convert new syntax to old syntax
// template strings
const name = "bhavya";
const age = 5;
const pet = "horse"
const greeting = "hello "+name + " you seem to be " + age + " What a lovely " + pet;
// instead this we do this
const greetings = `hello ${name} you seem to be ${age}. What a lovely ${pet}`

// default parameters
function greet(name="",age = "30",pet = "dog"){
    return `hello ${name} you seem to be ${age}. What a lovely ${pet}`
}
greet();
// now if we don't provide any parameters the default will get used

// type coercion
1 == "1"
// type coercion means when there are two operands and there is a 
// eqvivalent sign and both are different types one will be converted to 
// eqvivalent type by javascript engine so it does
1 == 1
// type coercion means a language converting a certain type to 
// another type
// all languages have type coercion
// in js this generally occurs with == sign 
// as it compares and convert one type to another
// but with === it says do not coerce and do explicitly what tell
1==='1'
if (1){
    console.log(5)
}
// now what it does is consider 1 as true so this is type coercion
-0 === +0
NaN===NaN
Object.is(NaN,NaN)