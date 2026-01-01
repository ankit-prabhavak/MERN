// Error Handling in JavaScript


// What is an Error?
// An error is an unexpected event that occurs during the execution of a program, disrupting its normal flow. 
// Errors can be caused by various factors, such as invalid input, unavailable resources, or programming mistakes.


// Types of Errors in JavaScript
// 1. compile-time errors: These errors occur during the compilation phase, before the code is executed.
// 2. runtime errors: These errors occur during the execution of the code, often due to invalid operations or unexpected conditions.

// console.log("Start of the program; // compile-time error due to missing closing quote

// console.log(x); // runtime error: ReferenceError: x is not defined

// Error Handling Mechanisms

// 1. try...catch Statement

try {
    // Code that may throw an error
    let result = 10 / 0; // This will not throw an error in JavaScript, but let's assume it does for demonstration
    console.log(result);
} catch (error) {
    // Code to handle the error
    console.error("An error occurred:", error.message);
}
finally {
    // Code that will run regardless of whether an error occurred or not
    console.log("Execution completed.");
}


// 2. throw Statement : custom error throwing

try {
    // Reference error
    console.log(x);
}
catch (error) {
    // Throwing a custom error
    throw new Error("Declare to karo");
}

