// const tinder = new Object() // singleton objects
const tinderUser = {} // non singlton objects

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.age = 23
tinderUser.isLoggedIn = false

// console.log(tinderUser);


// nested objects is js
// const user = {
//     email : "something@gmail.com",
//     fullname : {
//         userfullname :{
//             firstname : "Archit",
//             lastname  : "Lokhande"
//         }
//     }
// }

// console.log(user.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = Object.assign({},obj1,obj2) // {} is optional
// console.log(obj3);

const obj3 = {...obj1,...obj2} // spread operator
console.log(obj3)


/// array of objects in js
// const users = [
//     {
//         id : 1,
//         age : 18,
//         email : "abc@gmail.com"
//     },
//     {
//         id : 2,
//         age : 12,
//         email : "xyz@gmail.com"
//     },
//     {
//         id : 3,
//         age : 15,
//         email : "pqr@gmail.com"
//     }
// ]

// console.log(users[1]);

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

const {courseInstructor : Instructor} = course // destructuring of objects in js

console.log(Instructor);