const sayHello = name /*(name) */ => {
    console.log("greeting" + " " + name)
    console.log("hi")
}
sayHello("Harry")

// now for single line we can write it without braces
const add = (a,b) => a*b
add();

const x = {
    name: "Harry",
    role: "Js Developer",
    exp: 30,
    show: function () {
        // let that = this   // by using these we now replace this.name with that.name if we don't use arrow function in setTimeout by using arrow function this is converted to lexical this
        // console.log(this)
        setTimeout(() => {
            // console.log(this)
            console.log(`The name is ${this.name}\nThe role is ${this.role}`)
        }, 2000)
    }
}
//   console.log(x.name, x.exp)
//   x.show()