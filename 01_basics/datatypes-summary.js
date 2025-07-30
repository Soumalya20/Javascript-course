// Primitive data types summary

// 7 basic data types in JavaScript: String,  Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100; // Number
const scoreValue = 100.5; // Number

const isLoggedIn = false // Boolean
const outsideTemp = null; // Null
let userEmail; // Undefined
let userEmail1 = undefined // Undefined

const id = Symbol('123'); // Symbol
const anotherId = Symbol('123'); // Symbol (different from id, even though description is the same)

console.log(id == anotherId); // false (Symbols are unique, even with the same description)

const bigIntValue = 1234567890154365347n; // BigInt


//  Reference or non-primitive data types: Object, Array, Function

const heros = ['Thor', 'Ironman', 'Hulk']; // Array

// objects are mainly written inside curly braces {}

let myObj = {
    name: "Soumalya",
    age: 25,
}

// functions are also objects in JavaScript
// they can be assigned to variables, passed as arguments, and returned from other functions

const myFunction = function() {
    console.log("Hello, World!");
}



console.log(typeof outsideTemp); // "object" (null is considered an object in JavaScript)
console.log(typeof userEmail); // "undefined"
console.log(typeof myFunction); // "function"
console.log(typeof bigIntValue); // "bigint"

// https://262.ecma-international.org/5.1/#sec-11.4.3 (STUDY MATERIAL)