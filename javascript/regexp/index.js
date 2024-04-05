/** @format */

// It searches a string for a specified pattern, and returns the found text as an object

// Groups[abc]: Brackets [abc] specifies matches for the characters inside the brackets
let text = "Is this all there is?";
let pattern = /[h]/g;
let result = text.match(pattern);
console.log(result);

// Groups[^abc]: Brackets [^abc] specifies matches for any character NOT between the brackets
let tex = "Is this all there is?";
let pattrn = /[^h]/g;
let reslt = text.match(pattrn);
console.log(reslt);

// Groups[0-9]: The [0-9] expression is used to find any character between the brackets
let te = "123456789";
let patter = /[1-4]/g;
let resul = te.match(patter);
console.log(resul);

// Groups[^0-9]: The [^0-9] expression is used to find any character that is NOT a digit
let t = "123456789";
let patte = /[^1-4]/g;
let resu = t.match(patte);
console.log(resu);
