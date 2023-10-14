// if
const isUserLoggedIn = true
const tempreture = 41

// if(tempreture ==  50){
//     console.log("less than 50");
// }
// else{
//     console.log("tempreture is greater than 50");
// }

// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`User Power : ${power}`);
// }

//console.log(`User Power : ${power}`); // out of scope

// == is for value checking 
// === check datatype also

const balance = 1000

// if(balance > 500) console.log("test") // implicit scope

// if(balance < 500){
//     console.log("less than");
// }
// else if(balance < 750){
//     console.log("less than 750");
// }
// else if(balance < 900){
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");
// }

const userLoggesIn = true
const debitcard = true
const loggesInFromGoogle = false
const loggesInFromEmail = true

if(userLoggesIn && debitcard){
    console.log("Allowed to buy courses")
}

if(loggesInFromEmail || loggesInFromGoogle){
    console.log("User logged in");
}





