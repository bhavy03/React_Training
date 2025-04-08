class Animal {
    constructor(name) {
        this.name = Animal.capitalize(name)
    }
    walk() {
        alert("Animal " + /*Animal.capitalize*/this.name + " is walking")
    }
    static capitalize(name) {
        return name.charAt(0).toUpperCase() + name.substr(1, name.length)
    }
}

j = new Animal(/*Animal.capitalize*/"jack")
j.walk()
// console.log(j.capitalize("thisa")) // --- > this doesnt work

let p = 9
function ax() {
    let a = 8;
    console.log(p)
    console.log(a)
}

ax()
console.log(p)
console.log(a)