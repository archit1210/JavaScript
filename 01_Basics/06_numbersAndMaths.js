const score = 400

const balance = new Number(100)
console.log(balance.toString().length)
console.log(balance.toFixed(1))

const num1 = 23.569

console.log(num1.toPrecision(3));

const num2 = 1000000000
console.log(num2.toLocaleString('en-IN'));


/***************MATHS******************/
console.log(Math);
console.log(Math.abs(-3))
console.log(Math.round(23.65))
console.log(Math.ceil(23.65))
console.log(Math.floor(23.65))
console.log(Math.min(5,6,9,7,4))
console.log(Math.max(5,6,9,7,4))

// Math.random
console.log(Math.random());
console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)