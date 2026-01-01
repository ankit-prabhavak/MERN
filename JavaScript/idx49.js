// Object cloning 

let user = {
    name: "Alice",
    age: 30
};

console.log(user);

user.address = {
    city: "Wonderland",
    zip: "12345"
};
console.log(user); // Dynamic property addition

let newUser = user; // Reference copy 

// There are three ways to clone an object in JavaScript
// shread operator, Object.assign(), JSON.parse(JSON.stringify())

// 1. Shread operator
let src = {
    a: 1,
    b: 2,
    c: {
        d: 3
    }
};


let dest = {...src}; // Shallow copy using spread operator
dest.a = 10; // Modifying primitive property
dest.c.d = 30; // Modifying nested object property
console.log(dest);


let dest2 = Object.assign({}, src); // Shallow copy using Object.assign()

dest2.b = 20; // Modifying primitive property
dest2.c.d = 40;
console.log(dest2);

// Iteration method 

let dest3 = {};

for (let key in src) {
    
    dest3[Key] = src[key];
}

console.log(dest3);

// Garbage collection in JavaScript
let obj1 = {
    name: "Object 1"
};

let obj2 = {
    name: "Object 2"
};
obj1.ref = obj2; // obj1 references obj2
obj2.ref = obj1; // obj2 references obj1

obj1 = null; // Remove reference to obj1
obj2 = null; // Remove reference to obj2

// Both objects are now unreachable and eligible for garbage collection

// Note: JavaScript uses automatic garbage collection, so we don't manually free memory.



const original = {
  name: "Ankit",
  address: {
    city: "Patna"
  }
};



// Shallow copy using spread
const copy = { ...original };

copy.name = "Rahul";           // changes only in copy
copy.address.city = "Delhi";   // changes in both!

console.log(original.address.city); // "Delhi" ❌

// Deep copy
const deepCopy = structuredClone(original); // ✅ modern way

deepCopy.address.city = "Delhi";

console.log(original.address.city); // "Patna" ✅






