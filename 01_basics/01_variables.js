const accountId = 144556
let accountEmail = "test1234@gmail.com"
var accountPassword = "test1234"
accountCity = "Kolkata"
let accountState;

// accountId = 2 // not allowed, const cannot be reassigned

accountEmail = "changedEmail123@gmail.com"
accountPassword = "changedPassword123"
accountCity = "Mumbai"


console.log(accountId);

/*
  const: cannot be reassigned, but can be mutated if it's an object or array
  let: can be reassigned
  var: can be reassigned, function scoped
*/
/* 
Prefer not to use var, use let or const instead.
because of issue in block scope and function scope.
Use const for variables that won't change, let for those that will.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);