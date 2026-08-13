// var c = 300

//{ scope }
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER", a); // Block Scope

}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];

// }



// console.log(a);
// console.log(b);


// nested scope

function one() {
    const username = "yogesh"

    function two() {
        const website = "youtube"
        console.log(username);


    }
    // console.log(website);

    two()
}

// one()


if (true) {
    const username = "yogesh"

    if (username === "yogesh") {
        const website = " yout   ube"
        // console.log(username + website);


    }
    // console.log(website); // out of scope
    
} 

// console.log(username); scope is out of the username
 
console.log(addone(5))
console.log(addTwo(5));

// +++++++++++++++++ intersting +++++++++++++++

function addone(num){
    return num+1

}



const addTwo = function (num){
    return num + 2
}

