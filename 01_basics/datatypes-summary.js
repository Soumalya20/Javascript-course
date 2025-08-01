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




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

// Stack memory (Primitive types), Heap memory (Reference types)


// Primitive types are stored in stack memory, while reference types are stored in heap memory.

// Stack memory is faster and has a fixed size, while heap memory is slower and can grow dynamically.
// When you create a primitive type, it is stored directly in the stack.
// When you create a reference type, a reference (or pointer) to the object is stored in the stack, while the actual object is stored in the heap.

let myYoutubeName ="X4mmy";
let anotherName = myYoutubeName; // Copying value (Primitive type)
anotherName = "Soumalya"; // Changing anotherName does not affect myYoutubeName

// In contrast, if we had used a reference type, changing the new variable would affect the original variable.

console.log(myYoutubeName); // "X4mmy"
console.log(anotherName); // "Soumalya"

let userOne = {
    email: "user@google.com",
    upi: "user@upi",
}

let userTwo = userOne; // Copying reference (Reference type)
userTwo.email = "soumalya@google.com"; // Changing userTwo affects userOne

console.log(userOne.email); // 
console.log(userTwo.email); // Both will show "soumalya@google.com"