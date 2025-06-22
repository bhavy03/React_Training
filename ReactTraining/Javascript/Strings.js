let name = "Harry";
// console.log(name.length)
console.log(name[0]);
console.log(name[1]);
let friend = "Prakash";
console.log(friend);
// let myfriend = "Shubh' // Dont do this
// console.log(myfriend)

// Template literals
let boy1 = "Pramod";
let boy2 = "Nikhil";
// Nikhil is a friend of Pramod
// let sentence = `boy2 is a friend of boy1`
let sentence = `${boy2} is a friend of ${boy1}`; //we can insert double and single quotes in backtic
console.log(sentence);
console.log(boy2 + " is a friend of " + boy1);
// we can insert variables directly in template literals.this is called string interpolation

// Escape Sequence Characters
// like to put single/double in a single/double quote
// /' is escape sequece character
// let fruit = 'Bana\'na'
// console.log(fruit)
// console.log(fruit.length)
let fruit = 'Bana"na';
console.log(fruit);

// let name = "Harry";
// console.log(name.length)

// these are string methods
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.slice(2, 4))     // 4th not included
// console.log(name.slice(2))
// console.log(name.replace("Har", "Per"))
// let friend = "Naman"
// console.log(name.concat(" is a friend of ", friend, " Ok"))
// .concat means add these strings in name string in the following order
// let friend2 = "      Meena        "
// console.log(friend2)
// console.log(friend2.trim())    //removes starting and ending spaces
let fr = "Raman" + "Shivika" + "Harry";
console.log(fr[0]);
console.log(fr[1]);
console.log(fr[2]);
console.log(fr[3]);
// fr[4]= "o" // This is not possible
// strings are immutable we always get a new string
console.log(fr);

// String length
//     String slice()
//     let y = new String("John");
//     string is converted to object
//     Comparing two JavaScript objects always returns false.

//     let text = "Apple, Banana, Kiwi";
//     let part = text.slice(7, 13);
//     let part = text.slice(7);
//     let part = text.slice(-12);
//     let part = text.slice(-12, -6);

//     String substring()
//     it will take negative to 0

//     String substr()
//     substr(start, length)

//     String replace()
//     let text = "Please visit Microsoft!";
//     let newText = text.replace("Microsoft", "W3Schools");

//     The replace() method does not change the string it is called on.
//     The replace() method returns a new string.

//     The replace() method replaces only the first match
//     If you want to replace all matches, use a regular expression with the /g flag set.
//     let newText = text.replace(/Microsoft/g, "W3Schools");

//     To replace case insensitive, use a regular expression with an /i flag (insensitive):
//     let newText = text.replace(/MICROSOFT/i, "W3Schools");

// String replaceAll()
// String toUpperCase()
// String toLowerCase()
// String concat()
// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(" ", text2);

// String trim()   removes whitespaces
// String trimStart()   removes whitespaces only from start
// String trimEnd()     removes whitespaces only from end

// String padStart()
// Pad a string with "0" until it reaches the length 4:
// let text = "5";
// let padded = text.padStart(4,"0");  => 0005
// and if value not provided it pads with empty String
// total space includes the string

// String padEnd()
// let numb = 5;
// let text = numb.toString();
// let padded = text.padEnd(4,"0");

// String charAt()
// String charCodeAt()
// The charCodeAt() method returns the unicode of the character at a specified index in a string:
// The method returns a UTF-16 code (an integer between 0 and 65535).
// String split()

// String search

// String indexOf()
// The indexOf() method returns the index (position) the first occurrence of a string in a string:
// starting position for the search:
// let text = "Please locate where 'locate' occurs!";
// let index = text.indexOf("locate", 15);

// String lastIndexOf()
// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
// Both indexOf(), and lastIndexOf() return -1 if the text is not found:

// String search()
// String match()
// Perform a global, case-insensitive search for "ain":
// let text = "The rain in SPAIN stays mainly in the plain";
// text.match(/ain/gi);

// String matchAll()
// String includes()
// The includes() method returns true if a string contains a specified value.
// Otherwise it returns false.

// String startsWith()
// The startsWith() method returns true if a string begins with a specified value.
// Otherwise it returns false

// String endsWith()

// Automatic replacing of variables with real values is called string interpolation.
// let firstName = "John";
// let lastName = "Doe";
// let text = `Welcome ${firstName}, ${lastName}!`;

// 'helooo'.includes('o');
