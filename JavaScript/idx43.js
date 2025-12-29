// function Declaration
function whatIsUrName() {
    console.log("Ankit Prabhavak");
}

// function calling
whatIsUrName();

// funciton to print love coding multiple times
function loveCoding(num) {

   for (let i = 0; i < num; i++) {
    console.log("I \"love Coding very much!\"");
   }
}

loveCoding(5);

// function to get average of two numbers
function getAvg(num1, num2) {
    return (num1 + num2)/2;
}

// function call and storing the return value into a variable 
let avg = getAvg(5, 6);
console.log(`Average of the 5 and 6 is: ${avg} `);
console.log("Average of the 5 and 6 is: " + avg);

// special way to create function
const getSquare = function(num) {
    return num**2;
}

let sq = getSquare(5);
console.log("Square of 5 is " + sq);

// Most special function that you need to make use of often
const multiply = (a, b) =>  {
    return a * b;
}

let ans = multiply(2, 4);
console.log("Mulitplication of the numbers is " + ans);