// let score = 33; // 33=>33
// let score = "33"; // "33"=>33
// let score = "33abc"; // "33abc"=>NaN
// let score = null; // null=>0
// let score = undefined; // undefined=>NaN
let score = true; // true=>1, false=>0

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber);

// let isLoggedIn = 1; //true
// let isLoggedIn = ""; // false
let isLoggedIn = "Pravesh"; //true
let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);