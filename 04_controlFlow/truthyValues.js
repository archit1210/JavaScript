// const username = "Archit"

// if(username){
//     console.log("got the username");
// }
// else{
//     console.log("user name is missig");
// }


//truthy values = "0","false"," ",[],{},function(){} -- empty function
// falsy values = false,0,-0,BigInt,0n,null,undefined,NaN

// const user = []
// if(user.length === 0){
//     console.log("Array is empty");
// }

// const newObject = {}
// if(Object.keys(newObject).length === 0){
//     console.log("Array is empty");
// }

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = undefined ?? 15 ?? 10
console.log(val1);

// Ternary operator

// const iceTeaPrice = 150
// iceTeaPrice >= 100 ? console.log("price is above 100") : console.log("Price is less than 100");
