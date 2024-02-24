const accountId = 125478
let accountEmail = "pravesh@test.com"
var accountPassword = "123456"
accountCity = "Bhopal"
let accountState;


// accountId = 1 // not allowed TypeError: Assignment to constant variable.
accountEmail = "test@test.com";
accountPassword = "444332"
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/