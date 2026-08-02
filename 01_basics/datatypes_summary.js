//  Primitive 
// Call by Value

// 7 Types : String , Number  , Boolen , null , undefined , Symbol , BigInt

const score = 100;
const scoreValue = 100.3;


const isLoggedIn = false
const outsideTemp = null // type of object 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
console.log(id);
console.log(anotherId);

const bigNumber = 234356565432456754n // BigInt



// Refrence (Non-Primitive)

// Array , Objects , Functions 


const heros = ["shaktiman","naagraj","doga"] // array

{
    name:"yogesh";     // object
    age : 22;

}

const myFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof outsideTemp)