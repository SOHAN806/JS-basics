/** @format */

// instructions that are executed by the browser or Node. js

// break
let text = "";
for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  text += i + "\n";
}
console.log(text);

// class
class Car {
  constructor(brand) {
    this.carname = brand;
  }
}
myCar = new Car("Ford");
console.log(myCar);

// const
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Toyota";
cars.push("Audi");
console.log(cars);

// continue
let text1 = "";
for (let i = 0; i < 5; i++) {
  if (i === 3) continue;
  text1 += i + "\n";
}
console.log(text1);

// do...while Loop
let tex2 = "";
let i = 0;
do {
  tex2 += i + "\n";
  i++;
} while (i < 5);
console.log(tex2);

// for Loop
// for (let i = 0; i < 5; i++) {
//   txt3 += i + "<br>";
// }
// console.log(txt3);

// for...in Loop: statements combo iterates (loops) over the properties of an object
const person = { fname: "John", lname: "Doe", age: 25 };
let ext = "";
for (let x in person) {
  ext += person[x] + " ";
}
console.log(ext);

// for...of Loop: statements combo iterates (loops) over the values of any iterable
// let tet = "";
// const cars = ["BMW", "Volvo", "Mini"];
// for (let x of cars) {
//   tet += x + " ";
// }
// console.log(tet);

// function: statement declares a function
// function myFunction() {
//   document.getElementById("demo").innerHTML = "Hello World!";
// }
// myFunction();
// console.log(myFunction());

// if...else
// let hour = new Date().getHours();
// if (hour < 20) {
//   document.getElementById("demo").innerHTML = "Good day";
// }
// console.log(hour);

// let
let carName = "Volvo";
console.log(carName);

// return
function myFunction() {
  return Math.PI;
}
console.log(myFunction());

// switch
// var txt;
// switch (fruits) {
//   case "Banana":
//     txt = "Banana is good!";
//     break;
//   case "Orange":
//     txt = "I am not a fan of orange.";
//     break;
//   case "Apple":
//     txt = "How you like them apples?";
//     break;
//   default:
//     txt = "I have never heard of that fruit...";
// }
// console.log(txt);
