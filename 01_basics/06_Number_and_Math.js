const score = 400
// console.log(score);


const balance = new Number(100)// explicity giving data type 
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // precison value 100.00

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3)); // round off

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); //10,00,000 indian way 

//***********Maths********************

console.log(Math);
console.log(Math.abs(-4)); // change - to +
console.log(Math.ceil(4.2)); // celing upper value to be choosen 
console.log(Math.floor(3.9));
console.log(Math.min(4,3,2,4,533,3));
console.log(Math.max(4,3,2,4,5,3));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min) // will
// will print form 10 to 20 and round up to smaller as floor is set
 


