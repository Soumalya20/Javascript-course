"use strict"; // treat all JS code as newer version

// alert(3 + 3); // we are using node.js, so alert won't work. It will work on browser

console.log(3 + 3); // prints 6 in console

console.log(3 
    + 
    3); // prints 6 in console, even with line breaks

    // most important thing is code readability should be good, not just working code
    
console.log("Soumalya");

let name = "Soumalya"; // Its a string type variable
let age = 25; // Its a number type variable
let isStudent = true; // Its a boolean type variable

// JavaScript Data Types

// JavaScript has 7 primitive data types //

//number => 2 to the power of 53 is the maximum safe integer in JavaScript
let number = 9007199254740991; // This is a number type variable

//bigint = It can store integers of arbitrary length (Mostly used for large integers. Stockmarket, trading etc.)
let bigNumber = 1234567890123456789012345678901234567890; // This is a bigint type variable

//string = It can store text data
let text = "Hello, World!"; // This is a string type variable

//boolean = It can store true or false values
let isAvailable = false; // This is a boolean type variable

//undefined = It is a variable that has been declared but not assigned a value
let notAssigned; // This is an undefined type variable

//null = It is a variable that has been explicitly assigned no value
let emptyValue = null; // This is a null type variable

//symbol = It is a unique and immutable primitive value, often used as object property keys
let uniqueSymbol = Symbol("unique"); // This is a symbol type variable


// JavaScript also has non-primitive data types // 

//object = It is a collection of key-value pairs, where keys are strings and values can be any data type
let person = {
    name: "Soumalya",
    age: 25,
    isStudent: true
}; // This is an object type variable

console.log(typeof undefined); // prints "undefined"
console.log(typeof null); // prints "object" (this is a known bug in JavaScript 
