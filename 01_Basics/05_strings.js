const name = "Archit"
const repoCount = 50

console.log(name + " " +  repoCount + " value");

//string interpolation
// highly used syntax
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


// another way of declaring a string now string is stored as a object
const gameName = new String('archit-lokhande')

console.log(gameName);
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const string1 = new String('archit-lokhande')
const newString = string1.substring(0,4)
const another = string1.slice(-1,4)
console.log(newString)
console.log(another)

const string2 = "   archit   "
console.log(string2);
console.log(string2.trim());

const url = "www.archit%201210.com"
console.log(url.replace('%20','-'))
console.log(url.includes('archit'))
console.log(url.includes('lokhande'))

const string3 = "My name is archit . I reside in Mumbai"
console.log(string3.split(' '))