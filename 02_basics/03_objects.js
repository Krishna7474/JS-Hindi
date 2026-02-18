// singleton

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Krishna",
    "full name": "Krishna Gaikwad",
    mySym: "mykey1",
    age: 18,
    location:"Ahilyanagar",
    email:"krishna@yjamilcom",
    isLoggedIn: false,
    lastLoginDays:["Monday","saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser.mySym);



JsUser.email = "krishnagaikwad@gmail.com"
Object.freeze(JsUser)
JsUser.email = "krishnagaikd@gmail.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Helo Js user");
    
}
JsUser.greetingTwo = function(){
    console.log(`Helo Js user,${this.name}`);
}
console.log(JsUser.greeting);
console.log(JsUser.greetingTwo);



