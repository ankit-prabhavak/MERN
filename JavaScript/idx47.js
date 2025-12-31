// classes in javascript



class Human {

    // Properties
    age; // public
    #wt = 80;
    ht = 170;

    // Constructor
    constructor(newAge, newHt, newWt) {
        this.age = newAge;
        this.ht = newHt;
        this.#wt = newWt;
    }

    // Methods
    speak() {
        console.log("Hello");
    }

    #walk() {
        console.log("Walking");
    }
    
    // Getter and Setter for private property
    set setWt(wt) {
        this.#wt = wt;
    }

    get getWt() {
        return this.#wt;
    }

};

// Creating object of class
let obj = new Human(25, 180);

// Accessing properties and methods
console.log(obj.age);
console.log(obj.wt); // Error: Private field '#wt' must be declared in an enclosing class
console.log(obj.ht);

obj.speak();
obj.walk();


obj.setWt(75);
console.log(obj.getWt());


// Default Parameters in functions

function add(a = 0, b = 0) {
    return a + b;
}


console.log(add(5, 10)); // 15
console.log(add(5)); // 5
console.log(add()); // 0

// Rest Parameters in functions
function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}
console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum()); // 0

// functions with dependent parameters
function multiply(a, b = a) {
    return a * b;
}

console.log(multiply(5, 10)); // 50
console.log(multiply(5)); // 25
console.log(multiply()); // NaN


// function as default parameter
function greet(name = getDefaultName()) {
    return `Hello, ${name}`;
}

function getDefaultName() {
    return "Guest";
}

console.log(greet("Alice")); // Hello, Alice
console.log(greet()); // Hello, Guest





