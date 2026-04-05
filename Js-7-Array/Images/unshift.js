
Javascriptarray.unshift(element1, element2, ... elementN)






let fruits = ["Banana", "Mango"];

// Add one element at the start
let newLength = fruits.unshift("Apple");

console.log(fruits);     // ["Apple", "Banana", "Mango"]
console.log(newLength);  // 3

// Add multiple elements at the start
fruits.unshift("Orange", "Grapes");
console.log(fruits);     // ["Orange", "Grapes", "Apple", "Banana", "Mango"]





let arr = [2, 3];
let newArr = [1, ...arr];
console.log(newArr); // [1, 2, 3]


