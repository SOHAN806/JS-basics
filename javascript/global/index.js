/** @format */

// a variable that can be accessed from anywhere in your JavaScript code

// String() method converts a value to a string
let g = String(new Date());
console.log(g);

// parseInt() method parses a value as a string and returns the first integer
let a = parseInt("10");
console.log(a);

// parseFloat() method parses a value as a string and returns the first number
let b = parseFloat("10.33");
console.log(b);

// Number() method converts a value to a number
let c = Number(true);
let d = Number(false);
console.log(d);

// isNaN() method returns true if a value is NaN
let e = isNaN(123);
console.log(e);

// isFinite() method returns true if a value is a finite number
let result = isFinite(123);
console.log(result);

// decodeURI() method decodes a URI
let uri = "my test.asp?name=ståle&car=saab";
let encoded = encodeURI(uri);
let decoded = decodeURI(encoded);
console.log(decoded);

// encodeURI() method encodes a URI
let uril = "my test.asp?name=ståle&car=saab";
let encode = encodeURI(uril);
console.log(encode);
