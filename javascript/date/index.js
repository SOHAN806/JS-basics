/** @format */

// returns a date object with the current date and time

// getDate() method returns the day of the month (1 to 31) of a date
const d = new Date();
let day = d.getDate();
console.log(day);

// getDay() method returns the day of the week (0 to 6) of a date
const e = new Date();
let da = e.getDay();
console.log(da);

// getFullYear() method returns the full year of a date
const f = new Date();
let year = f.getFullYear();
console.log(year);

// getHours() method returns the hour (0 to 23) of a date
const l = new Date();
let hour = l.getHours();
console.log(l);

// getMinutes() method returns the minutes (0 to 59) of a date
const p = new Date();
let minutes = p.getMinutes();
console.log(minutes);

// getMonth() method returns the month (0 to 11) of a date
const a = new Date();
let month = a.getMonth();
console.log(month);

// getSeconds() method returns the seconds (0 to 59) of a date.
const x = new Date();
let seconds = x.getSeconds();
console.log(x);

// getTime() method returns the number of milliseconds since January 1, 1970 00:00:00
const q = new Date();
let time = q.getTime();
console.log(time);

// getTimezoneOffset() method returns the difference between UTC time and local time
const c = new Date();
let diff = c.getTimezoneOffset();
console.log(diff);

// toLocaleDateString() method returns the date portion of a date object as a string
const n = new Date();
let text = n.toLocaleDateString();
console.log(text);

// toLocaleTimeString() method returns the time portion of a date object as a string
const s = new Date();
let txt = s.toLocaleTimeString();
console.log(txt);
