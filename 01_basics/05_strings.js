const name= "Soumalya"; // String (Primitive type)
const repoCount = 50

console.log(name + repoCount + "Value"); // "Soumalya50Value" (String concatenation) // older syntax was using + operator


console.log(`Hello my name is ${name} and I have ${repoCount} repositories.`); // Template literals (String interpolation) // newer syntax using template literals
// "Hello my name is Soumalya and I have 50 repositories." (String interpolation)

const gameName = new String('Soumalya'); // String object (Non-primitive type) // result

console.log(gameName[0]); // "S" (Strings are array-like, can be accessed using index)

console.log(gameName.__proto__); // String methods and properties // {}


console.log(gameName.length); // 8 (String length property)
console.log(gameName.toUpperCase()); // "SOUMALYA" (String method to convert to uppercase)
console.log(gameName.charAt(2)); // "u" (String method to get character at specific index)
console.log(gameName.indexOf('m')); // 4 (String method to find index of a character)

const newString = gameName.substring(0,4); // "Soum" (String method to get substring)
console.log(newString); // "Soum"

const anotherString = gamneName.slice(8, 4); // "aly" (String method to get substring using slice)
console.log(anotherString); // "aly" // slice can accept negative indices // slice is more versatile than substring


const newStringOne =  "   soumalya   ";
console.log(newStringOne);
console.log(newStringOne.trim()); // "soumalya" (String method to remove whitespace from both ends)

const url = "https://www.soumalya.com/soumalya%20mukherjee";
console.log(url.replace('%20', '-')); // "https://www.soumalya.com/soumalya-mukherjee" (String method to replace substring)
console.log(url.includes('soumalya')); // true (String method to check if substring is present)

console.log(gameName.split)(''); // ['S', 'o', 'u', 'm', 'a', 'l', 'y', 'a'] (String method to split string into array of characters)
console.log(url.split('/')); // ['https:', '', 'www.soumalya.com', 'soumalya%20mukherjee'] (String method to split string into array using delimiter)
