// Dates

let myDate = new Date()
console.log(myDate.toISOString());  // //2026-08-05T03:21:35.950Z
console.log(myDate.toDateString()); // Wed Aug 05 2026
console.log(myDate.toLocaleDateString()); // 8/5/2026
console.log(myDate.toLocaleString());     // 8/5/2026, 3:21:35 AM
console.log(myDate.toLocaleTimeString()); // 3:21:35 AM
console.log(myDate.toString());   // Wed Aug 05 2026 03:21:35 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toUTCString());  // Wed, 05 Aug 2026 03:21:35 GMT
console.log(myDate.toLocaleString());  // 8/5/2026, 3:21:35 AM


// console.log(typeof myDate); // Date is object interview prep

// let myCreatedDate = new Date(2023,0,23,5,3)

// let myCreatedDate = new Date("2025-01-14")
let myCreatedDate = new Date("01-14-2025")

// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() +1); // start with 0=january 1 is added for betterr user experice 
console.log(newDate.getDay() ); // 0,1,2,3 = wednesday

// `${newDate.getDay()} and the month is ${newDate.getMonth()} ` 


newDate.toLocaleString('default',{
    weekday: "long",

})



