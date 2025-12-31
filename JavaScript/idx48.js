// Built in classes in JavaScript

// Math class
console.log(Math.PI);
console.log(Math.sqrt(16));
console.log(Math.pow(2, 3));
console.log(Math.random());
console.log(Math.floor(4.7));
console.log(Math.ceil(4.3));
console.log(Math.round(4.5));
console.log(Math.max(1, 5, 3, 9, 2));
console.log(Math.min(1, 5, 3, 9, 2));
console.log(Math.abs(-10));
console.log(Math.sin(Math.PI / 2));
console.log(Math.cos(0));
console.log(Math.tan(Math.PI / 4));
console.log(Math.log(1));
console.log(Math.exp(1));
console.log(Math.sign(-5));
console.log(Math.trunc(4.9));
console.log(Math.cbrt(27));
console.log(Math.hypot(3, 4));
console.log(Math.clz32(1));
console.log(Math.imul(2, 4));
console.log(Math.fround(1.5));
console.log(Math.log10(100));
console.log(Math.log2(8));
console.log(Math.sinh(0));
console.log(Math.cosh(0));
console.log(Math.tanh(0));
console.log(Math.expm1(1));
console.log(Math.log1p(1));


// Date class
let now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

console.log(now.getMilliseconds());
console.log(now.getTime());
console.log(now.toISOString());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());


let past = new Date(2000, 0, 1, 7);
console.log(past);
console.log(past.getFullYear()); 
console.log(past.getMonth());
console.log(past.getDate());


let future = new Date("July 4, 2025 12:00:00");
