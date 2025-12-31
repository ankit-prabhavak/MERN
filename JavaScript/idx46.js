// ===============================
// Scopes in JavaScript
// ===============================

// Global Scope
// Variables declared outside of any function or block
// are in the global scope and can be accessed anywhere.
var globalVar = "I am global";

function showGlobal() {
    console.log(globalVar); // accessible here
}
showGlobal();

// -------------------------------
// Function Scope (var)
// -------------------------------
// 'var' is function-scoped, meaning it’s only visible inside
// the function where it's declared.
function functionScopeExample() {
    var funcVar = "I am function scoped (var)";
    console.log(funcVar);
}
functionScopeExample();
// console.log(funcVar); // ❌ ReferenceError: funcVar is not defined

// -------------------------------
// Block Scope (let, const)
// -------------------------------
// 'let' and 'const' are block-scoped, meaning they are only
// visible inside the block { } where they are declared.
{
    let blockLet = "I am block scoped (let)";
    const blockConst = "I am block scoped (const)";
    console.log(blockLet);   // ✅
    console.log(blockConst); // ✅
}
// console.log(blockLet);   // ❌ ReferenceError
// console.log(blockConst); // ❌ ReferenceError

// -------------------------------
// var vs let/const in blocks
// -------------------------------
if (true) {
    var varInsideBlock = "var is not block scoped";
    let letInsideBlock = "let is block scoped";
}
console.log(varInsideBlock); // ✅ works
// console.log(letInsideBlock); // ❌ ReferenceError

// ===============================
// Temporal Dead Zone (TDZ)
// ===============================
// TDZ is the time between entering a scope and when a variable
// declared with 'let' or 'const' is initialized.
// Accessing the variable in TDZ throws a ReferenceError.

try {
    console.log(tdzVar); // ✅ undefined (var is hoisted with default value)
    var tdzVar = "Declared with var";
} catch (err) {
    console.log(err);
}

try {
    console.log(tdzLet); // ❌ ReferenceError (TDZ)
    let tdzLet = "Declared with let";
} catch (err) {
    console.log("Error accessing tdzLet before initialization:", err.message);
}

try {
    console.log(tdzConst); // ❌ ReferenceError (TDZ)
    const tdzConst = "Declared with const";
} catch (err) {
    console.log("Error accessing tdzConst before initialization:", err.message);
}

// ===============================
// Summary
// ===============================
// var → function scoped, hoisted (initialized with undefined)
// let → block scoped, hoisted (TDZ until initialized)
// const → block scoped, hoisted (TDZ until initialized, must be initialized)
