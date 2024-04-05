/** @format */

// an object is a collection of properties

// object: returns the function that created the Object prototype
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
let text = person;
console.log(text);

// Object.keys(): returns an Array Iterator object with the keys of an object
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = Object.keys(fruits);
console.log(keys);

// toString(): returns an object as a string
const nums = [1, 2, 3, 4, 5];
let tex = nums.toString();
console.log(tex);
