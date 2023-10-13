// let a = 300

// // var declaration doesn't follows scopes in js 
// if(true){
//     let a = 10
//     console.log("Inner : ", a)
//     const b = 30
//     var c = 20
// }

// console.log("Outer :  ",a);
// // console.log(b);
// console.log(c);

function one(){
    const username = "archit"
    function two(){
        const website = "google"
        console.log(username);
    }
    // console.log(website);
    two()
}

// one()

// if(true){
//     const username = "archit"
//     if(username === "archit"){
//         const website = "youtube"
//         console.log(username + website);
//     }
//     // console.log(website);
// }

