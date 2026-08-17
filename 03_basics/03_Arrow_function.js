const user = {
    userrname : "yogesh",
    price : 999,

    welcomeMessage : function (){
        console.log(`${this.userrname}  , welcome to website`);
        console.log(this);
        
    }
    
}

// user.welcomeMessage()
// user.userrname = "sam"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let userrname = "yogesh"
//     console.log(this.userrname); // this is working only under the object not function shows undefined
    
// }
// chai()

// const chai = function (){
//     let username = "yogesh"
//     console.log(this.username);
    
// }
// chai()  dont work



// const chai = ()=>{ // arrow function 
//     let username = "yogesh"
//     console.log(this);
    
// }
// chai()

//chai()

// const addTwo = (num1,num2) => num1 +num2 //same line

// const addTwo = (num1,num2) => (num1 +num2)
 //same line

const addTwo = (num1,num2) => ({username: "hitesh"})

console.log(addTwo(5,4))


const myArray = [3,4,5,6,7]
