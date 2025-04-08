// to display objects
const  person = {
    name: "John",
    age: 30,
    city: "New York",
    language: "EN",
    today: new Date(),
    age: function () { return 30; },    //JSON.stringify will not stringify functions:
    // function inside an object is a method here age is method of person
    spells:["hello","hiii","byee"]
};

// we can create an object that is empty
person.food = "rice";
person.name = "han";

console.log(person.age());
console.log(person.name);

// an array is not a dataype rather data structure while object is a datatype 
// cause array allows us to structure our data in a nice way
// while object can be used to contain the information about something

// converted to an array
const myArray = Object.values(person);
document.getElementById("demo").innerHTML = myArray;
// or

// stringified (converted to a string)
let myString = JSON.stringify(person);
document.getElementById("demo").innerHTML = myString;

// Change a property
Object.defineProperty(person, "language", { value: "NO" });

// objects properties
let x = "";
const myObj = {
    name: "John",
    age: 30,
    cars: [
        { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "BMW", models: ["320", "X3", "X5"] },
        { name: "Fiat", models: ["500", "Panda"] }
    ]
}

// myObj.cars[0].models[0]
// or
// myObj.cars[0]['models[0]']
// 'Fiesta'

for (let i in myObj.cars) {
    x += "<h2>" + myObj.cars[i].name + "</h2>";
    for (let j in myObj.cars[i].models) {
        x += myObj.cars[i].models[j] + "<br>";
    }
}

let will_pokemon = {
    pikachu:{
        species:"mouse pokemon",
        height: 4,
        weight:7
    }
}

let andrie_pokemon = {
    riachu:{
        species:"mouse pokemon",
        height: 4.9,
        weight:9,
        power:''
    }
}

let weight = will_pokemon.pikachu.weight;
console.log('weight',weight)

// let weight2 = andrie_pokemon.pikachu.weight;
// console.log('weight',weight)
// it gives error

// now what happens in large codebases is we have to check 
// if andre has pikachu or not and pikachu's weight or not
if (andrie_pokemon && andrie_pokemon.pikachu && andrie_pokemon.pikachu.weight){
    let weight3 = andrie_pokemon.pikachu.weight;
    console.log(weight3);
}else{
    let weight3 = undefined;
    console.log(weight3)
}

// now better way is
// optional chaining operator?.
let weight4 = andrie_pokemon?.pikachu?.weight;
console.log(weight4)
// it checks if andrie_pokemon has pikachu or not

// now if we have to check whether power if present or not we do 
let power = andrie_pokemon?.pikachu?.power || 'no power'
console.log(power)
// but the problem with this is if power is empty or false or 0
// it still gives us no power
// so we use knowledge coalesing operator
let power2 = andrie_pokemon?.pikachu?.power ?? 'no power'
console.log(power2)
// it doesn't check for falsey it checks for null or undefined