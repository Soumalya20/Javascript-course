let score = 50 // This is a number type variable
let score2 = "50abc" // This is a string type variable

console.log(typeof score); // prints "number"
console.log(typeof score2); // prints "string"

let valueInNumber = Number(score2); // Converts string to number
console.log(typeof valueInNumber); // prints "number"
console.log(valueInNumber); // prints NaN (Not a Number) because "50abc" cannot be converted to a number

// when we convert "50" it will be converted to 50
let valueInNumber2 = Number("50"); // Converts string "50" to number

//when we convert "50abc" it will be converted to NaN

// true will be converted to 1,  // false will be converted to 0
let valueInNumber3 = Number(true); // Converts boolean true to number 1

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn); // Converts number 1 to boolean true
let isLoggedIn2 = 0
let booleanIsLoggedIn2 = Boolean(isLoggedIn2); // Converts number 0 to boolean false
let isLoggedIn3 = ""
let booleanIsLoggedIn3 = Boolean(isLoggedIn3); // Converts empty string to boolean false
let isLoggedIn4 = "Name"
let booleanIsLoggedIn4 = Boolean(isLoggedIn4); // Converts non-empty string to boolean true

// 1=> true; 0 => false; 
// "" => false; 
// "Name" => true

let someNumber = 33

let stringNumber = String(someNumber); // Converts number 33 to string "33"
console.log(typeof stringNumber); // prints "string"


// ********************** Operations ********************** //

let value =3;
let negValue = -value;
console.log(negValue); // prints -3


//console.log(2+2); // prints 4
//console.log(2-2); // prints 0
//console.log(2*2); // prints 4
//console.log(2/2); // prints 1
//console.log(2%2); // prints 0 (remainder of 2 divided by 2)
//console.log(2**3); // prints 8 (2 raised to the power of 3)
//console.log(2+2*2); // prints 6 (multiplication before addition)
//console.log((2+2)*2); // prints 8 (addition inside parentheses evaluated first


let str1 = "Hello";
let str2 = "Soumalya"
let str3 = str1 + str2; // Concatenates two strings
console.log(str3); // prints "HelloSoumalya"

// console.log("1" + 2); // prints "12" (string concatenation)
// console.log(1 + "2"); // prints "12" (string concatenation)
// console.log("1" + "2"); // prints "12" (string concatenation)
// console.log(1 + 2 + "3"); // prints "33" (number addition followed by string concatenation)
// console.log("1" + 2 + 3); // prints "123" (string concatenation)
// console.log(1 + 2 + "3" + 4); // prints "334" (number addition followed by string concatenation)
// console.log(1 + 2); // prints 3 (number addition)


let gameCounter = 100;
++gameCounter; // Increments gameCounter by 1 // prefix increment will increment the value before using it 
console.log(gameCounter); // prints 101

gameCounter++; // Increments gameCounter by 1 // postfix increment will increment the value after using it
console.log(gameCounter); // prints 101

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion