// const user = {
//     username : "archit",
//     loginCount : 8,
//     signedIn : true,

//     getinfo:function(){
//         console.log(`Username is : ${this.username}`);
//     }
// }

// console.log(user.username);
// console.log(user.getinfo);

function user(username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this;
}

const user1 = new user("Archit",12,true)
const user2 = new user("Harshal",14,false)

console.log(user1)
console.log(user2);