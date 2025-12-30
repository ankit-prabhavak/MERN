// Object in js is just a key value pair.

let object = {Name:"Ankit Kumar"};

let model = {"Full Name":"Ankit Kumar Prabhavak"}; // Use "" for large keys

let person = {
    name: "Ankit",
    age: 25,
    greet: function(){
        console.log("Love is Life");
    }
};

console.log(person);
person.greet();


let per = person;  // shallow copy: same nothing new get created

// Arrays
let arr = [1, 2, 3, "Love"]; // withour constructor 
console.log(arr);

// using array constructor
let brr = new Array("Morning", 1 , 2);
console.log(brr);


// methods
arr.push("Kumar");
arr.pop();

arr.shift(); // remove from left
arr.unshift("Hello"); //add from left
arr.push(20);
arr.push(30);
arr.push(80);
arr.push(90);

console.log(arr.slice(1, 3));

arr.splice(1, 2, "Kunal"); // insert remove 
arr.splice(1, 0, "Kunal"); // insert only

// map and filter

let db = [10, 20, 30, 40, 50];

let ans =  db.map((numer)=> {
    return numer**2;
});

console.log(ans);

arr.map((value) => {
    console.log(value);
});


// filter

let num = [1,2,3,4,5,6,7,8,9];

let even = num.filter((n) => {
    return n%2 == 0;
});

console.log(even);
// console.log(arr);
let local  = arr.filter((v) => {
    if(typeof(v) == 'string') {
        return true;
    }else {
        return false;
    }
})

console.log(local);


// reduce method
let sum = even.reduce((acc, curr) => {
    return acc+curr;
}, 0);

console.log(sum);


// sort 
console.log(even.sort());
console.log(arr.indexOf("Hello")); //indexOf

// for each
arr.forEach((value, index) => {
    console.log("Value: " + value, "key: " + index);
});

// for in loop for enumerable objects
for(let key in object) {
    console.log(key, " ", object[key]);
}

// for of loop for iterable objects
for(let val of arr) {
    console.log(val);
}

// Arrays with function

function getSum(kya) {

    let sum = 0;
    kya.forEach((val) => {
        sum  = sum + val;
    });

    return sum;
}

let real = getSum(even);
console.log("Sum of the even numbers: " + real);











