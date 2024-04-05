/**
 * JSON stands for JavaScript Object Notation
 *
 * JSON is a lightweight format for storing and transporting data
 *
 * JSON is often used when data is sent from a server to a web page
 *
 * JSON is "self-describing" and easy to understand
 *
 * @format
 */

// parse() method parses a string and returns a JavaScript object
var obj = JSON.parse('{"firstName":"John", "lastName":"Doe"}');
console.log(obj.firstName);

// stringify() method converts JavaScript objects into strings
var obj = { name: "John", age: 30, city: "New York" };
var myJSON = JSON.stringify(obj);
console.log(myJSON);
