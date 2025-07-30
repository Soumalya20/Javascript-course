console.log(2>1); // true (> greater than)
console.log(2<1); // false (< less than)
console.log(2>=1); // true (>= greater than or equal to)
console.log(2<=1); // false (<= less than or equal to)
console.log(2==1); // false (== equal to)
console.log(2!=1); // true (!= not equal to)
console.log(2!==1); // true (!== not equal to strict)
console.log(2===1); // false (=== strict equal to)


console.log("2" > 1); // true (string "2" is converted to number 2, and 2 > 1 is true)
console.log("02" > 1); // true (string "02" is converted to number 2, and 2 > 1 is true)



console.log(null > 0); // false (null is converted to 0, and 0 > 0 is false)
console.log(null < 0); // false (null is converted to 0, and 0 < 0 is false)
console.log(null >= 0); // true (null is converted to 0, and 0 >= 0 is true)
console.log(null <= 0); // true (null is converted to 0, and 0 <= 0 is true)
console.log(null == 0); // false (null is not equal to 0)


console.log(undefined > 0); // false (undefined is not a number, so comparison is false)
console.log(undefined < 0); // false (undefined is not a number, so comparison is false)
console.log(undefined >= 0); // false (undefined is not a number, so comparison is false)
console.log(undefined <= 0); // false (undefined is not a number, so comparison is false)
console.log(undefined == 0); // false (undefined is not equal to 0) 


// === (strict equality) checks both value and type
console.log(2 === 2); // true (both value and type are the same)
console.log(2 === '2'); // false (value is the same, but type is different)