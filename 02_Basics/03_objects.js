// singleton

// object literals
const mySym = Symbol("xyz")
const user = {
    name : "Archit",
    "lastName" : "Lokhande",
    [mySym] : "xyz",
    age : 19,
    location : "Mumbai",
    email : "abc@gmail.com",
    inLoggedIn : false
}

// console.log(user.name);
// console.log(user["name"]);
// console.log(user["lastName"]);
// console.log(user[mySym]);

// before 
// console.log(user.email);

// // after 
// user.email = "xyz@gmail.com"
// console.log(user.email);

// Object.freeze(user) // It is used to freeze the object so no one can make changes in the repective freezed object
console.log(user);

user.greeting = function(){
    console.log("Hello Js user");
}
user.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

// console.log(user.greeting)
console.log(user.greeting())
console.log(user.greetingTwo())
