const user = {
    username : "Archit",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} ,welcome to website`);
        // console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "niryaDon"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username = "Archit"
//     console.log(this.username) // this keyword only applicable for objects
// }
// chai();

// const chai = function() {
//         let username = "Archit"
//         console.log(this.username) // this keyword only applicable for objects
// }

/// arrow function is js
// const chai = () => {
//     let username = "Archit"
//     console.log(this) // this keyword only applicable for objects
// }

// chai()

// const add = (n1,n2) => {
//     return n1 + n2
// }

// const add = (n1,n2) =>  n1 + n2  // implicit return method
const add = (n1,n2) =>  (n1 + n2)  // implicit return method

console.log(add(3 , 4))
