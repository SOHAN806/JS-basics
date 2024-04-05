/** @format */

// produce a single value some time in the future

// Promise.all() method returns a single Promise from a list of promises, when all promises fulfill
// const myPromise1 = Promise.resolve("Bohemian Rhapsody");
// const myPromise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "Queen");
// });
// Promise.all([myPromise1, myPromise2]).then((x) => {
//   myDisplay(x);
// });
// function myDisplay(some) {
//   console.log(some);
// }

// Promise.allSettled() method returns a single Promise from a list of promises, when all promises sette
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "Queen");
// });
// Promise.allSettled([myPromise]).then((results) =>
//   results.forEach((x) => myDisplay(x.status))
// );
// function myDisplay(some1) {
//   console.log(some1);
// }

// Promise.any() method returns a single Promise from a list of promises, when any promise fulfill
// const myPromise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 200, "King");
// });
// const myPromise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "Queen");
// });
// Promise.any([myPromise1, myPromise2]).then((x) => {
//   myDisplay(x);
// });
// function myDisplay(some2) {
//   console.log(some2);
// }

// catch() method provides a callback
// let myPromise = new Promise(function (myResolve, myReject) {
//   throw "Error 444";
// });
// myPromise.catch((x) => myDisplay(x));
// function myDisplay(some3) {
//   console.log(some3);
// }

// finally() method provides a callback
// let myPromise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("Operation completed successfully");
//   }, 1000);
// });
// myPromise.finally(() => {
//   console.log("Finally block executed, regardless of the promise outcome");
// });
// myPromise
//   .then(function (result) {
//     console.log("Promise resolved:", result);
//   })
//   .catch(function (error) {
//     console.log("Promise rejected:", error);
//   });

// Promise.race() method returns a Promise from a list of promises, when the faster promise settles
// const myPromise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 200, "King");
// });
// const myPromise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "Queen");
// });
// Promise.race([myPromise1, myPromise2]).then((x) => {
//   myDisplay(x);
// });
// function myDisplay(some4) {
//   console.log(some4);
// }

// Promise.reject() method returns a Promise object rejected with a value
// let myPromise = Promise.reject("Not Allowed");
// myPromise.then(
//   (x) => myDisplay(x),
//   (x) => myDisplay(x)
// );
// function myDisplay(some5) {
//   console.log(some5);
// }

// Promise.resolve() method returns a Promise object resolved with a value
// let myPromise = Promise.resolve("All Well");
// myPromise.then(
//   (x) => myDisplay(x),
//   (x) => myDisplay(x)
// );
// function myDisplay(some6) {
//   console.log(some6);
// }

// then() method provides two callbacks
let myPromise = new Promise(function (myResolve, myReject) {
  let result = false;
  if (result == true) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});
myPromise.then(
  (x) => myDisplay(x),
  (x) => myDisplay(x)
);
function myDisplay(some7) {
  console.log(some7);
}
