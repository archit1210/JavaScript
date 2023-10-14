// for loop

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("5 is encountered");
//     }
//     console.log(element);
// }

// for(let i = 1; i <= 10; i++){
//     console.log(`Outer loop : ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(i + '*' + j + ' = ' + i * j);
//         //console.log(`Inner loop : ${i} and Inner loop : ${j}`);
//     }
    
// }

// const mayArray = ["archit","harshal","Nirya","vishal"]

// for (let i = 0; i < mayArray.length; i++) {
//     const element = mayArray[i];
//     console.log(element);
// }

// break and continue

for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console.log("5 detected");
        break
    }
    console.log(`Values of i is ${i}`);
}

for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console.log("5 detected");
        continue
    }
    console.log(`Values of i is ${i}`);
}