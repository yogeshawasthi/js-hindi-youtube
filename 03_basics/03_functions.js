
// // function declearation
// function sayMyName(){
//     console.log("Yogesh");
//     console.log("Yogesh");
//     console.log("Yogesh");
//     console.log("Yogesh");
//     console.log("Yogesh");
//     console.log("Yogesh");
//     console.log("Yogesh");
//     console.log("Yogesh");

// }

// sayMyName () // funcation call 

// function addTwoNumber(number1,number2){
//     console.log("the sum is ",number1 + number2 );
//     // two ways to add text as well as the handling arguments

//     console.log(` Entered Number are ${number1, number2} and  sum is ${number1 + number2}`)


// }

function addTwoNumber(number1, number2) {

    // let result = number1 + number2
    // console.log("YOgessh");
    // return result

    return number1 + number2

}


addTwoNumber

const result = addTwoNumber(12, 5)

console.log("Result: ", result);

// adavanced functons paramertes and the arguments

function loginUserMessage(username = "user") { // user as default in case undefined
    if (!username) {
        console.log("Please enter a username");
        return

    }
    return `${username} just logged in`
}

//  const message =loginUserMessage("Yogesh Awasthi")
//  console.log(message);
// or 
// console.log(loginUserMessage("Yogibaba"))
// console.log(loginUserMessage("Yogesh"))

function calculateCartPrice(val1, val2, ...num1) {

    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 1323 ,121112))

//object
const user = {
    username: "yogesh",
    price: 199
}

function handleObject(anyobject) {// object being passed to the function

    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}

// handleObject(user)
handleObject({

    username:"arjun", 
    price:399

})

const myNewArray = [200, 300, 400, 100]

function returnSecondValue(getArray){

    return getArray[1]

}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,321,2323,5434,1212]));
