// arrays

const arr1 = [0,1,2,3,4,5]
const arr2 = new Array(1,2,3,4)
const myHeros = ["archit","harshal"]

console.log(arr1[0]);

// arr1.push(6)
// arr1.push(7)
// arr1.pop()
// arr1.unshift(9) // insert the number the index 0
// arr1.shift()
// console.log(arr1);

// console.log(arr1.includes(2));
// console.log(arr1.indexOf(9));

const newArray = arr1.join()
console.log(newArray);

// slice and splice

console.log("A ", arr1);

const myn1 = arr1.slice(1, 3)

console.log(myn1);
console.log("B ", arr1);


const myn2 = arr1.splice(1, 3)
console.log("C ", arr1);
console.log(myn2);

// slice - give the number between the range excluding the last index
// splice - breaks down the array 
