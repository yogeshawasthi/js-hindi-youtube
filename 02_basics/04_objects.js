// const tinderUser = new Object() object definiton

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser) // { id: '123abc', name: 'sammy', isLoggedIn: false }

const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userfullname : {
            fristname : "yogesh",
            lastname : "awasthi"
        }
    }
}

// console.log(regularUser.fullname.userfullname.fristname);

const obj1 = {1 :"a",2:"b"}
const obj2 = {3 :"a",4:"b"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id : 1,
        email : "h@gmail.com"
    },{
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    }    

]

// console.log(users[1].email)
// console.log(tinderUser)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



// de-structure adnd JSON API 

const course = {
    coursename : "js-in hindi",
    price: "999",
    courseInstructor : "hitesh"
}

// console.log(course.courseInstructor);

const {courseInstructor:instructor} = course // destructure

// console.log(courseInstructor);
console.log(instructor);


// ++++++++++++ API +++++++++++++
// {
//     "name" : "yogesh",
//     "coursename":"js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {},
    {}
]

