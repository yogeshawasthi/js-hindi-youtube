// singleton


//object literals
// Object.create

const mySyn = Symbol("key1")

const jsUser = {
    name: "yogesh",
    "full name": "yogesh awasthi",
    [mySyn] : "mykey1",
    age : 18,
    location : "kathmandu",
    email : "yogesh@gmail.com",
    isLoggedIn : false,
    lastLoginDays:["Monday","Saturday"]

}

// console.log(jsUser.email)
// console.log(jsUser["full name"])
// console.log(jsUser["email"]); // email is condidered as a string
// console.log(jsUser[mySyn]);

jsUser.email = "yogesh@chatgpt.com"
console.log(jsUser.email);

// Object.freeze(jsUser)// freeze the object so that no changes occurs to it 
jsUser.email = "yogibaba@claude.com"

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Js user");
    
}
jsUser.greetingTwo = function(){
    console.log(`Hellow Js user, ${this.name}`);
    
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

