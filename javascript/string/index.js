/** @format */

// a string is a data type that represents a sequence of characters

// at() method it returns the given position from string
const text = "school";
let char = text.at(1);
console.log(char);

// codePointAt() method returns the unicode value of the given position of an string
const tx = "world";
let unicode = tx.codePointAt(0);
console.log(unicode);

// concat() method is connects one string to another
const text1 = "sep, ";
const text2 = "sip";
let res = text1.concat(text2);
console.log(res);

// String.fromCharCode() method it converts the given unicode value to character
let lr = String.fromCharCode(65);
console.log(lr);

// indexOf() method says the position of given value in string
const txx = "hello world, welcome to the earth";
let rest = txx.indexOf("world");
console.log(rest);

// toLowerCase() method converts a string to lowercase letters
const tet = "PROGRAMMING";
let eult = tet.toLowerCase();
console.log(eult);

// toUpperCase() methods converts a string to uppercase letters
const et = "programming";
let elt = et.toUpperCase();
console.log(elt);

// trim() method it trims the space from string
const te = "   programming   ";
let lte = te.trim();
console.log(lte);
