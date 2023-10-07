// dates

let mydate = new Date();
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleDateString());
// console.log(typeof mydate);

let date1 = new Date(2023,0,8,5,3);
let date2 = new Date("01-05-2023");
console.log(date2.toString());
console.log(date2.toLocaleString());

let mytimeStamp = Date.now()
// console.log(mytimeStamp);
// console.log(date2.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

newDate.toLocaleString('default',{
    weekday : "long",
})