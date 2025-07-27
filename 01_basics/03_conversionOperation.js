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