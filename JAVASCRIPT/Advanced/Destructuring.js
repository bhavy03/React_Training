let arr = [2, 3, 6, 8, 9, 45, 55]
// no need to do this
// let a = arr[0]
// let b = arr[1]
// let [a,b,c,d,...rest] = arr
// console.log(a,b,c,d,rest) 
// let[a,b, ,...rest] = arr
// console.log(a,b,rest)
let { a, b } = { a: 1, b: 5 }
// console.log(a,b)

// spread operator
// converting array into object
let arr1 = [3, 5, 8]
let obj1 = { ...arr1 }
console.log(obj1)

function sum(v1, v2, v3) {
    return v1 + v2 + v3
}
console.log(sum(...arr1))
// here it is spreading the value

// object spread operator
let obj2 = {
    name: "harry",
    company: "xyz",
    address: "xxx"
}
// now to access the properties we do like this
// const name = obj2.name;
// const company = obj2.company;
// let address = obj2.address;

// but with the help of destructuring we can access these as
// const {name,company} = obj2;
// console.log(name);
const { name, ...rest } = obj2;
// console.log(name,rest);
let { address } = obj2;

// console.log({...obj2, name: "john"})
// console.log({...obj2, name: "john",company:"abc"})
// console.log({name: "john",company:"abc",...obj2 })   
// this will print the obj2 without changing any value

// now there's a new way of declaring property
const naam = "harry";
const obj3 = {
    [naam]: "bhavya",
    [1 + 3]: "hihi"
}

const f = 2;
const g = true;
const h = {}
const obj4 = {
    //if we encounter this type of case where key and value 
    // both are same then we do this
    // f:f, 
    // g:g,
    // h:h
    f,
    g,
    h
}
