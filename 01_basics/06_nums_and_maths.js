const score = 100;
console.log(score); // It will print 100

const score2 = new Number(100);
console.log(score2); // It will print [Number: 100]

const balance = new Number(100);
console.log(balance); // It will print [Number: 100] because balance is an object created using the Number constructor, not a primitive number.

console.log(balance.toString()); // It will print "100" because toString() converts the Number object to a string representation of its value.
console.log(balance.toString().length); // It will print 3 because the string "100" has 3 characters.
console.log(balance.toFixed(2)); // It will print "100.00" because toFixed(2) formats the number with 2 decimal places, returning a string representation of the number with the specified number of decimal places.

const otherNumber = 123.456789;

console.log(otherNumber.toPrecision(3)); // It will print "123" because toPrecision(3) formats the number to a specified length, in this case 3 significant digits. The result is a string representation of the number with the specified precision.
console.log(otherNumber.toPrecision(5)); // It will print "123.46" because toPrecision(5) formats the number to 5 significant digits, rounding it to "123.46". The result is a string representation of the number with the specified precision.

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // It will print "1,000,000" because toLocaleString() formats the number according to the locale settings of the environment. In this case, it adds commas as thousand separators for better readability.
console.log(hundreds.toLocaleString("en-IN")); // It will print "10,00,000" because toLocaleString("en-IN") formats the number according to the Indian numbering system, which uses lakhs and crores. In this case, it adds commas as thousand separators in the Indian style, resulting in "10,00,000". 

// ===========================MATHS===========================

console.log(Math); // It will print the Math object, which contains properties and methods for mathematical constants and functions. The Math object provides various mathematical operations and constants that can be used in JavaScript.
console.log(Math.PI); // It will print 3.141592653589793 because Math.PI is a property of the Math object that represents the ratio of the circumference of a circle to its diameter, which is approximately 3.14159.
console.log(Math.abs(-5)); // It will print 5 because Math.abs() is a method of the Math object that returns the absolute value of a number. In this case, it converts -5 to its positive equivalent, which is 5.
console.log(Math.round(4.7)); // It will print 5 because Math.round() is a method of the Math object that rounds a number to the nearest integer. In this case, it rounds 4.7 up to 5.
console.log(Math.ceil(4.2)); // It will print 5 because Math.ceil() is a method of the Math object that rounds a number up to the nearest integer. In this case, it rounds 4.2 up to 5.
console.log(Math.floor(4.8)); // It will print 4 because Math.floor() is a method of the Math object that rounds a number down to the nearest integer. In this case, it rounds 4.8 down to 4.
console.log(Math.max(1, 5, 3)); // It will print 5 because Math.max() is a method of the Math object that returns the largest of zero or more numbers. In this case, it compares the numbers 1, 5, and 3, and returns the largest value, which is 5.
console.log(Math.min(1, 5, 3)); // It will print 1 because Math.min() is a method of the Math object that returns the smallest of zero or more numbers. In this case, it compares the numbers 1, 5, and 3, and returns the smallest value, which is 1.

console.log(Math.random()); // It will print a random number between 0 (inclusive) and 1 (exclusive) because Math.random() is a method of the Math object that generates a random floating-point number in the range from 0 (inclusive) to 1 (exclusive). Each time you call Math.random(), it will return a different random number within that range.
console.log(Math.random() * 10); // It will print a random number between 0 (inclusive) and 10 (exclusive) because multiplying the result of Math.random() by 10 scales the random number to the desired range. The output will be a random floating-point number between 0 and 10, where 0 is inclusive and 10 is exclusive.
console.log((Math.random() * 10) + 1); // It will print a random number between 1 (inclusive) and 11 (exclusive) because adding 1 to the result of Math.random() * 10 shifts the range of possible values. The output will be a random floating-point number between 1 and 11, where 1 is inclusive and 11 is exclusive.
console.log(Math.floor((Math.random() * 10) + 1)); // It will print a random integer between 1 (inclusive) and 10 (inclusive) because Math.floor() rounds the result down to the nearest integer. By multiplying Math.random() by 10 and adding 1, we shift the range to be between 1 and 11 (exclusive). Then, using Math.floor() ensures that we get an integer value, resulting in a random integer between 1 and 10, inclusive.

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // It will print a random integer between 10 (inclusive) and 20 (inclusive) because the formula Math.floor(Math.random() * (max - min + 1)) + min generates a random integer within the specified range. The expression (max - min + 1) calculates the total number of possible values in the range, and adding min shifts the range to start from the minimum value. Finally, Math.floor() rounds down the result to ensure we get an integer, resulting in a random integer between 10 and 20, inclusive.