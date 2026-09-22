"use strict";

// Starting JavaScript
console.log("Hello World!");


// Synchronous
console.log("Start");

for (let i = 1; i <= 10; i++) {
    console.log("Iteration:", i);
}

console.log("End");


// Asynchronous
console.log("Start");

setTimeout(() => {
    console.log("Hello World");
}, 1000);

console.log("End");


// Promise
Promise.resolve().then(() => {
    console.log("Microtask Queue");
});

setTimeout(() => {
    console.log("Timer");
}, 2000);


// CommonJS Import
const fs = require("fs");


// Functions
function calculate_area(r) {
    return 3.14 * r * r;
}

function calculate_perimeter(r) {
    return 2 * 3.14 * r;
}

console.log("Area:", calculate_area(5));
console.log("Perimeter:", calculate_perimeter(5));


// Multiple Functions Export
module.exports = {
    calculate_area,
    calculate_perimeter
};