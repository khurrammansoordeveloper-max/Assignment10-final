// function greet() {
//   console.log("Hello");
// }
// greet();
// greet();
// greet();


// function orderPizza(flavor) {
//   console.log("Your " + flavor + " pizza is ready!");
// }

// orderPizza("Pepperoni");
// orderPizza("Fajita");




// function greet(name) {
//   console.log("Hello " + name);
// }

// greet("Ali");
// greet("Ayesha");

let marks = [85, 72, 90, 68, 95, 50];


function calculateAverage(arr) {
  let total = 0;
  for (let mark of arr) {
    total += mark;
  }
  return total / arr.length;
}


