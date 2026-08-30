const userEmail = []

if (userEmail) {
    console.log("Got use email");
    
}else{
    console.log("Don`t have user email");
    
}

// falsy values 

// false, 0 , -0 , BigInt 0n, "", null, undefined, Nan,

// Truethy values

// "0" , 'false' , " ", [], {} , function(){}


// if (userEmail.length ===0) {
//     console.log("Array is empty");
    
// }


const emptyObj= {}

if (Object.keys(emptyObj).length===0) {
    console.log("Object is empty");
    
}

//Nullish Coalescing Operator (??): null undefined

let val1;

// val1 = 5 ?? 10 // 5 is assigned
// val1 = null ?? 10 // 10 assigned
// val1 = undefined ?? 23 //23 asigned
val1 = null ?? 10 ?? 30 // 20 assigned

console.log(val1);

// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80");

