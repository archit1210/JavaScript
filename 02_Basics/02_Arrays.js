const marvel = ["thor","Ironman","spiderman"]
const dc = ["superman","flash","batman"]
const indianHeros = ["mightyRaju","shaktiman","Krrish","G-one"]
// marvel.push(dc)

// console.log(marvel);
// console.log(marvel[3][1]);

// const allHeros = marvel.concat(dc)
// console.log(allHeros);

const allHeros = [...marvel, ...dc,...indianHeros]; // spreading technique in Js
// console.log(allHeros);

// const arr1 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const arr2 = arr1.flat(Infinity) // It merges all elements in the single array

// console.log(arr2)

console.log(Array.isArray("Archit"));
console.log(Array.from("Archit"));

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));