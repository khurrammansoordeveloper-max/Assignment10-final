let age = prompt("Enter your age:");
console.log(typeof age); // string

age = Number(age); // convert to number
console.log(typeof age); // number


Javascript// Using String() function
let num = 123;
let str1 = String(num); // "123"

// Using toString() method

let boolaVal = true;
let str2 = boolVal.toString(); // "true"
console.log(typeof str1, str1); // string "123"
console.log(typeof str2, str2); // string "true"


// 2. Converting to Number
// You can convert strings or booleans to numbers.

Javascript// Using Number() function
let strNum = "456";
let num1 = Number(strNum); // 456

// Using parseInt() and parseFloat()

let intVal = parseInt("42px");   // 42
let floatVal = parseFloat("3.14"); // 3.14

// Boolean to number

let num2 = Number(true);  // 1
let num3 = Number(false); // 0

console.log(typeof num1, num1); // number 456
console.log(intVal, floatVal, num2, num3);


// 3. Converting to Boolean
// You can convert values to true or false.

Javascript// Using Boolean() function
let bool1 = Boolean(1);       // true
let bool2 = Boolean(0);       // false
let bool3 = Boolean("Hello"); // true
let bool4 = Boolean("");      // false

console.log(bool1, bool2, bool3, bool4);


// 4. Example: All Conversions Together Javascript

let value = "100";

// String to Number

let numVal = Number(value); // 100

// Number to String

let strVal = String(numVal); // "100"

// String to Boolean

let boolVal = Boolean(strVal); // true
console.log(numVal, typeof numVal);
console.log(strVal, typeof strVal);
console.log(boolVal, typeof boolVal);

// To Number

console.log(Number("3.14")); // 3.14
console.log(parseInt("42px")); // 42
console.log(parseFloat("4.5"));// 4.5

// To String

console.log(String(123)); // "123"
console.log((true).toString());// "true"

// To Boolean

console.log(Boolean(0)); // false
console.log(Boolean("hi")); // true

// JavaScript supports type conversion in two main forms — implicit (type coercion) and explicit (manual conversion). Understanding these rules helps prevent unexpected behavior in your code.

// Implicit Conversion (Coercion) happens automatically when JavaScript needs to operate on values of different types. Examples:
Rules:

// + with a string → converts the other operand to string.

// *Arithmetic operators (-, [/, /)/] → convert operands to numbers.

// Falsy values (0, "", null, undefined, NaN, false) → convert to false in boolean context; all others → true.

// Special Cases:

// Number("") → 0

// Number("text") → NaN

// Boolean("") → false, Boolean("0") → true

// Arrays: Number([20]) → 20, Number([]) → 0, Number([1,2]) → NaN

// Objects: String({}) → "[object Object]"

// Best Practices:

// Use explicit conversion (Number(), String(), Boolean()) for clarity.

// Avoid relying on coercion in complex expressions.

// Be cautious with == as it triggers type coercion; prefer === for strict comparison.

// These rules ensure predictable behavior when handling mixed data types in JavaScript.

