// ====================================
// 1. Function Hoisting
// ====================================
sayHello("Ankit Kumar"); // works due to hoisting

function sayHello(name) {
    console.log("Hello, " + name);
}



// ====================================
// 2. Variable Hoisting (var vs let vs const)
// ====================================
// var → only declaration hoisted
// let, const → in "Temporal Dead Zone" (cannot access before declaration)

console.log(age); // undefined
var age = 25;

// console.log(score); // ReferenceError: Cannot access 'score' before initialization
let score = 50;



// ====================================
// 3. Classes and Hoisting
// ====================================
// Class declarations are not hoisted.

class Human {
    constructor(name) {
        this.name = name;
    }
}
const bob = new Human("Bob");
console.log("Class Example:", bob.name); // Bob



// ====================================
// 4. Function Call Stack
// ====================================
function first() {
    console.log("First function");
    second();
}
function second() {
    console.log("Second function");
    third();
}
function third() {
    console.log("Third function");
}
console.log("\nCall Stack Example:");
first();



// ====================================
// 5. Functions as First-Class Citizens
// ====================================

let greet = function() {
    console.log("Hello");
};
greet();

function greetMe(greet, name) {
    console.log("Name:", name);
    greet();
}
greetMe(greet, "Ankit");



// ====================================
// 6. Returning Functions from Functions
// ====================================
function outer() {
    return function inner() {
        console.log("I am inner function");
    };
}
const myFunc = outer();
myFunc();



// ====================================
// 7. Functions in Arrays
// ====================================
const arr = [
    function(a, b) { return a + b; },
    function(c, d) { return c * d; }
];
console.log("Array Fn Add:", arr[0](5, 3));
console.log("Array Fn Multiply:", arr[1](5, 3));



// ====================================
// 8. Functions in Objects
// ====================================
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    }
};
console.log("Calculator Add:", calculator.add(10, 5));
console.log("Calculator Subtract:", calculator.subtract(10, 5));



// ====================================
// 9. Function Expressions vs Declarations
// ====================================

// Declaration → Hoisted
function declared() {
    console.log("I am a function declaration");
}
declared();

// Expression → NOT hoisted
// expressed(); // Error: Cannot access before initialization
const expressed = function() {
    console.log("I am a function expression");
};
expressed();



// ====================================
// 10. Arrow Functions
// ====================================
// Shorter syntax, no own 'this', no arguments object

const arrowFn = (x, y) => x + y;
console.log("Arrow Fn Sum:", arrowFn(4, 6));



// ====================================
// 11. IIFE (Immediately Invoked Function Expression)
// ====================================

(function() {
    console.log("IIFE runs immediately!");
})();



// ====================================
// 12. Scope (Global, Function, Block)
// ====================================

var globalVar = "I am global";

function scopeTest() {
    var funcVar = "I am function scoped";
    if (true) {
        let blockVar = "I am block scoped";
        console.log(blockVar); // Works
    }
    // console.log(blockVar); // Error
    console.log(funcVar);
}
scopeTest();
console.log(globalVar);



// ====================================
// 13. Closures
// ====================================
// A closure is a function that remembers variables from its outer scope.

function counter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const myCounter = counter();
console.log("Closure Counter:", myCounter()); // 1
console.log("Closure Counter:", myCounter()); // 2
console.log("Closure Counter:", myCounter()); // 3



// ====================================
// 14. Higher-Order Functions
// ====================================
// Functions that take other functions as arguments or return functions.

function operate(a, b, fn) {
    return fn(a, b);
}
const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log("HOF Add:", operate(5, 3, add));
console.log("HOF Multiply:", operate(5, 3, multiply));



// ====================================
// 15. Callback Functions
// ====================================

function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        console.log("Data fetched!");
        callback();
    }, 1000);
}

fetchData(() => console.log("Callback executed after data"));



// ====================================
// 16. Recursion
// ====================================

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log("Factorial of 5:", factorial(5));



// ====================================
// 17. setTimeout & setInterval
// ====================================

setTimeout(() => console.log("This runs after 2 seconds"), 2000);

let counterVal = 0;
const intervalId = setInterval(() => {
    counterVal++;
    console.log("Interval count:", counterVal);
    if (counterVal === 3) clearInterval(intervalId);
}, 1000);



// ====================================
// 18. Default Parameters
// ====================================

function greetUser(name = "Guest") {
    console.log("Hello,", name);
}
greetUser();
greetUser("Ankit");



// ====================================
// 19. Rest Parameters
// ====================================

function sumAll(...nums) {
    return nums.reduce((acc, n) => acc + n, 0);
}
console.log("Sum using Rest:", sumAll(1, 2, 3, 4, 5));



// ====================================
// 20. Spread Operator with Functions
// ====================================

function maxNum(a, b, c) {
    return Math.max(a, b, c);
}
const nums = [4, 7, 1];
console.log("Max using Spread:", maxNum(...nums));
