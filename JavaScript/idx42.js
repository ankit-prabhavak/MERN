// FOR LOOP
let forOutput = "";
for (let i = 1; i <= 5; i++) {
    forOutput += "Number: " + i + "<br>";
}
document.getElementById("forLoopOutput").innerHTML = forOutput;

// WHILE LOOP
let whileOutput = "";
let i = 1;
while (i <= 5) {
    whileOutput += "Count: " + i + "<br>";
    i++;
}
document.getElementById("whileLoopOutput").innerHTML = whileOutput;

// DO-WHILE LOOP
let doWhileOutput = "";
let j = 1;
do {
    doWhileOutput += "Value: " + j + "<br>";
    j++;
} while (j <= 5);
document.getElementById("doWhileOutput").innerHTML = doWhileOutput;

// STRING OPERATIONS
let text = "JavaScript";
let stringOutput = "";
stringOutput += "Original: " + text + "<br>";
stringOutput += "Length: " + text.length + "<br>";
stringOutput += "Uppercase: " + text.toUpperCase() + "<br>";
stringOutput += "Lowercase: " + text.toLowerCase() + "<br>";
stringOutput += "Substring (0-4): " + text.substring(0, 4) + "<br>";
stringOutput += "Replace: " + text.replace("Java", "Type") + "<br>";
document.getElementById("stringOutput").innerHTML = stringOutput;
