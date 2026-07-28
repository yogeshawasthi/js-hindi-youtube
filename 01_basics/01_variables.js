const accountId = 1343
let accountEmail = "yogeshawasthi54321@gmail.com"
var accountPassword = "12345"
accountCity = "kathmandu"
let accountState;

// accountId=2 // not allowed 

console.log(accountId);

accountEmail="hacsdl@gmail.com"
accountPassword="3214"
accountCity="pokhara"


/*
prefer not to use var
beacuse of issue in block scope and functional scope

*/



//instead of console.log(variable ) for each one toprint we can use console.table([var1,var2])

console.table([accountEmail,accountPassword,accountCity,accountState])

