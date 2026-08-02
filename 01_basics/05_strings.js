const name = "Yogesh "
const repoCount = 35

// console.log(name + repoCount + " Value");

// use can use `` these are called place holders
console.log(`Hellow my name is ${name}and my repo count is${repoCount} `);

// Sgtring declration technique
const gameName = new String('yogesh-dsh-ksdj')

console.log(gameName[2])
console.log(gameName.__proto__)


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt('3'));  // string Methods or functions which can be used wit string
// console.log(gameName.indexOf('e'));


// const newString = gameName.substring(0,4) // only 4 character yoge 4 not included
// console.log(newString);


const anotherString = gameName.slice(-5, 3)
console.log(anotherString);

const newStringOne = "    yogesh    "
console.log(newStringOne);
console.log(newStringOne.trim()); // removes spaces

const url = "https://yogesh.com/yogesh%20awasthi"

console.log(url.replace('%20','-')) // replace %20 with -

console.log(url.includes('yogesh')) // checks if url have yogesh


console.log(gameName.split('-')) // splitting where - is into array