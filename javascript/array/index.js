/** @format */

// the array is used to store multiple values in a single variable   //example: const cars = ["saab", "volvo", "bmw"];

// at() method is used to return the given value from list
const fruits = ["banana", "orange", "apple", "mango"];
let fruit = fruits.at(0);
console.log(fruit);

// concat() method is used to connect one list with another
const arr1 = ["tiger", "lion"];
const arr2 = ["email", "password", "linux"];
const arr3 = ["windows", "mac"];
const conso = arr1.concat(arr2, arr3);
console.log(conso);

// constructor method it returns the name of a function
const fru = ["banana", "orange", "apple", "mango"];
let text = fru.constructor;
console.log(text);

// copywithin() method it copyes the value and pest in the another value
const fr = ["banana", "orange", "apple", "mango"];
fr.copyWithin(1, 0);
console.log(fr);

// fill() method it fills the array with the given value
const fui = ["var", "sort", "shift", "array"];
fui.fill("tan", 0, 1);
console.log(fui);

// indexof() method with this we can find the position of value
const frit = ["var", "sort", "shift", "array"];
let index = frit.indexOf("shift");
console.log(index);

// length method it returns the number of elements in array
const fiit = ["var", "sort", "shift", "array"];
let length = fiit.length;
console.log(length);

// pop() method it takes out the last element from arrray
const fitti = ["var", "sort", "shift", "array"];
fitti.pop();
console.log(fitti);

// push() method it adds the element in the last position of an array
const fruiit = ["var", "sort", "shift", "array"];
fruiit.push("tin");
console.log(fruiit);

// reverse() method it reverse the elements of an array
const frrit = ["var", "sort", "shift", "array"];
frrit.reverse();
console.log(frrit);

// shift() method it reamoves the element in the first position of an array
const fft = ["var", "sort", "shift", "array"];
fft.shift();
console.log(fft);

// slice() method it reamoves the selected position of an element from array
const fiti = ["var", "sort", "shift", "array"];
const cir = fiti.slice(1);
console.log(cir);

// sort() method it arrange the element of an array order wise (a, b, c, d)
const fiiit = ["var", "sort", "shift", "array"];
fiiit.sort();
console.log(fiiit);

// splice() method with this we can add or reamove element from array
const fruiiit = ["var", "sort", "shift", "array"];
fruiiit.splice(2, 2);
// fruiiit.splice(2, 0, "kali", "linux");
console.log(fruiiit);

// unshift() method it adds the given value to the first position of an array
const fititi = ["var", "sort", "shift", "array"];
fititi.unshift("ft", "let");
console.log(fititi);
