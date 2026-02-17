// Primitive 

const { useInsertionEffect } = require("react");


// 7 types : String , NUmber , Boolean ,null , undefined ,Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol ('123')

console.log(id === anotherId);

const bigNumber = 545464646415646554n


//Reference ( Non primitive)


// Array , Objects ,Functions

const heros = ["shaktimaan","naagraj","doga"];
let myObj ={
    name:"hitesh",
    age : 22,

} 
const myFunction = function(){
    console.log("hello World");
    
}
console.log(typeof heros);

// datatype                      value

/*undefined               =>          undefined
Null                    =>          Object
Boolean                =>           Boolean
Number                  =>          Number
String                  =>          string
object                  =>          object

*/



// +++++++++++++++++++++++++++++++++++++++++++++++++++


// stack(primitive),Heap(Non-primitive)

/*let myYoutubename = "hitesh "

let anothername = myYoutubename
anothername = "hello"

console.log(anothername);
console.log(myYoutubename);
*/
let userOne = {
    email: "krishna@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "krishna@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);





