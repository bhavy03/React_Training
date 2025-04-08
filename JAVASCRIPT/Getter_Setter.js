class animal {
    constructor(name) {
        this._name = name;
    }
    fly() {
        console.log("me udd raha hu")
    }
    get name() {
        return this._name
    }
    set name(newName) {
        this._name = newName
    }
}
let a = new animal("hari");
a.fly()
console.log(a.name)
a.name = "Jack"
console.log(a.name)

console.log(a instanceof animal)
// it also returns true if object belongs to class inheriting this class
// A getter must have exactly zero parameters.

// const language = {
    // set current(name) {
    //   this.log.push(name);
    // },
    // log: []
//   };
//
//   language.current = 'EN';
//   language.current = 'FA';
//
//   console.log(language.log);
//   Expected output: Array ["EN", "FA"]
