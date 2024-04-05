/** @format */

// the symbols between values that allow different operations like addition, subtraction, multiplication, and more

// Arithmetic Operators:
// (addition) +
let y = 5;
let x = y + 2;
console.log(x);

// (subtraction) -
let a = 5;
let c = a - 2;
console.log(c);

// (multiplication) *
let b = 5;
let d = b * 2;
console.log(d);

// (division) /
let e = 5;
let f = e / 2;
console.log(f);

// (exponentiation) **
let g = 5;
let h = g ** 2;
console.log(h);

// (remainder) %
let i = 5;
let j = i % 2;
console.log(j);

// (pre-increment) ++
let k = 5;
let l = ++k;
console.log(l);

// (pre-decrement) --
let m = 5;
let n = --m;
console.log(n);

// Assignment Operators:
// =
let xx = 10;
let yy = 5;
xx = yy;
console.log(xx);

// +=
let xxx = 10;
let yyy = 5;
xxx += yyy;
console.log(xxx);

// -=
let xxxx = 10;
let yyyy = 5;
xxxx -= yyyy;
console.log(xxxx);

// *=
let xxxxx = 10;
let yyyyy = 5;
xxxxx *= yyyyy;
console.log(xxxxx);

// /=
let xxxxxx = 10;
let yyyyyy = 5;
xxxxxx /= yyyyyy;
console.log(xxxxxx);

// %=
let xxxxxxx = 10;
let yyyyyyy = 5;
xxxxxxx %= yyyyyyy;
console.log(xxxxxxx);

// :
const size = { x: 5, y: 10, z: 1 };
console.log(size.y);

// String Operators:
// +
let text1 = "Good ";
let text2 = "Morning";
let text3 = text1 + text2;
console.log(text3);

// +=
let text4 = "Good ";
let text5 = "Morning";
text4 += text5;
console.log(text4);

// Comparison Operators:
// (equal to) ==
let aa = 5;
let aaa = aa == 8;
console.log(aaa);

// (equal value and type) ===
let a1 = 5;
let a2 = a1 === 5;
console.log(a2);

// (not equal) !=
let x1 = 5;
let x2 = x1 != 6;
console.log(x2);

// (not equal value or type) !==
let c1 = 5;
let c2 = c1 !== 6;
console.log(c2);

// (greater than) >
let m1 = 5;
let m2 = m1 > 8;
console.log(m2);

// (less than) <
let n1 = 5;
let n2 = n1 < 8;
console.log(n2);

// (greater or equal to) >=
let p1 = 5;
let p2 = p1 >= 5;
console.log(p2);

// (less or equal to) <=
let e1 = 5;
let e2 = e1 <= 8;
console.log(e2);

// Logical Operators:
// && AND
let x4 = 6;
let y5 = 3;
let l1 = x4 < 10 && y5 > 1;
console.log(l1);

// || OR
let x8 = 6;
let y9 = 3;
let ll = x8 === 5 || y9 === 5;
console.log(ll);

// ! NOT
let x11 = 6;
let y12 = 3;
let kk = !(5 == 8);
console.log(kk);

// The Nullish Coalescing Operator (??):
// ??
let name = null;
let text = "missing";
let result = name ?? text;
console.log(result);

// The Optional Chaining Operator (?.):
// ?.
const car = { type: "Fiat", model: "500", color: "white" };
console.log(car?.model);

// JavaScript Bitwise Operators:
// & AND
a11 = 5 & 1;
console.log(a11);

// | OR
a111 = 5 | 1;
console.log(a111);

// ~ NOT
a1111 = ~5;
console.log(a1111);

// ^ XOR
a11111 = 5 ^ 1;
console.log(a11111);

// << Left shift
a11111 = 5 << 1;
console.log(a11111);

// >> Right shift
a111111 = -5 >> 1;
console.log(a111111);

// >>> Unsigned right
a111111 = 5 >>> 1;
console.log(a111111);

// The typeof Operator:
lpo = typeof "John";
lop = typeof 3.14;
console.log(lpo);

// The delete Operator:
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
delete person.age;
console.log(person);

// The Spread (...) Operator:
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];
const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);

const numbers = [23, 55, 21, 87, 56];
let maxValue = Math.max(...numbers);
console.log(maxValue);

// The in Operator: The in operator returns true if a property is in an object, otherwise false
const persn = { firstName: "John", lastName: "Doe", age: 50 };
"firstName" in persn;
"age" in persn;
console.log(persn);

const cars = ["Saab", "Volvo", "BMW"];
"Saab" in cars;
console.log(cars);
