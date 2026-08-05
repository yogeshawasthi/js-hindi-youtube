// array

const myArr = [0, 1, 2, 3, 4, 5 ]
const myHeros = ["shakti", "nagu"]

const  myArr2 = new Array(1,2,3,4,5)

// console.log(myArr[0]); //
// console.log(myArr2.length);

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()



// myArr.unshift(9) // add to oth element
// myArr.shift()  // deletes form front

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join() // array to string type
 
console.log(myArr);
console.log( newArr);  

// slice , splice

console.log("A", myArr)

const myn1 = myArr.slice(1,3) // include 1 , 2 and not 3rd
console.log(myn1);

console.log("B",myArr);

const myn2 = myArr.splice(1,3) // includes 1 ,2 ,3 and array gets changed all three get erased 
console.log(myn2)
console.log("C",myArr);



