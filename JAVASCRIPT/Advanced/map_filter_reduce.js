const arr = [1, 2, 3, 4, 5];
const double = [];
const newarr = arr.forEach((num) => {
    // debugger;
    double.push(num * 2)
});
console.log(double)
// non significance of newarr here as it neither stores anything as well as no use

// Array map method
// in forEach loop what it does is 
// it loops on something and do what the function says
// now in map method loop on each element and 
// return the elements into arr
// here we have to return something
let arr1 = [45, 23, 21]
let a = arr1.map((value, index, array) => {
    console.log(value, index, array)
    return value + index
})
console.log(a)
console.log(arr1)
// map is used when we had to create a new array
// when we return something
// and use for each when we had to perform,
// some operation on the elements of existing array


// Array filter method
// it filters the array
// has a condition
let arr2 = [45, 23, 21, 0, 3, 5]
let a2 = arr2.filter((a) => {
    return a < 10
})
// console.log(a2, arr2) 


// Array reduce method 
let arr3 = [1, 2, 3, 5, 2, 1]
let newarr3 = arr3.reduce((accumulator, num) => {
    return accumulator + num;
}, 0);
console.log("reduce", newarr3)
// accumulator is something where we store the 
// information occured in the body of the function
// now what happens here is at first accumulator is 0 as mentioned
// or we can change the value
// so first is 0+1 = 1
// stored in accumulator
// now 1+2 = 3
// stored in accumulator and go on

// or

// let arr3 = [1, 2, 3, 5, 2, 1]
// const reduce_func = (h1,h2) => {
//     return h1 + h2
// }
// let newarr3 = arr3.reduce(reduce_func)
// console.log(newarr3)

const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    (accumulator, array) => {
        console.log('array',array)
        console.log('accumulator',accumulator)
        debugger;
        return accumulator.concat(array)
    }, [])
    console.log(flattened)
