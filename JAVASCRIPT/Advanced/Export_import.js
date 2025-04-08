// export an array
export let months = ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// export a constant
export const MODULES_BECAME_STANDARD_YEAR = 2015;
// export a class
export class User {
    constructor(name) {
        this.name = name;
    }
}
export function sayHi(user) {
    alert(`Hello, ${user}!`);
}  // no ; at the end


function sayHi(user) {
    alert(`Hello, ${user}!`);
}
function sayBye(user) {
    alert(`Bye, ${user}!`);
}
export { sayHi, sayBye };
// a list of exported variables


import { sayHi, sayBye } from './say.js';
sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!
// we can import everything as an object using import * as <obj>, for instance:
import * as say from './say.js';
say.sayHi('John');
say.sayBye('John');


import { sayHi as hi, sayBye as bye } from './say.js';
hi('John'); // Hello, John!
bye('John'); // Bye, John!


export { sayHi as hi, sayBye as bye };
import * as say from './say.js';
say.hi('John'); // Hello, John!
say.bye('John'); // Bye, John!


export default class User { // just add "default"
    constructor(name) {
        this.name = name;
    }
}
import User from './user.js'; // not {User}, just User
new User('John');
// Modules provide export default syntax to make the 
// “one thing per module” way look better.
// approach is preferred, so that every “thing” resides in its own module.
// we can export anonymously by default but can't with simply export

// const k = 12;
// export default k;
// import m from "./test"; 
// note that we have the freedom to use import m instead of import k, 
// because k was default export
// console.log(m); // 12

// <!doctype html>
// {/* <script type="module"> */ }
//   import {sayHi} from './say.js';
//   document.body.innerHTML = sayHi('John');
// </script>