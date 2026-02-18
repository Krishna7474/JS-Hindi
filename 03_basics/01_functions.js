
// function sayMyName(){
//     console.log("K");
//     console.log("r");
//     console.log("i");
//     console.log("s");
//     console.log("H");
//     console.log("n");
//     console.log("a");

// }

// sayMyName()

// function addTwoNUmbers(number1,number2){
//    let result = number1 + number2
//    console.log("Krishna");
// //    return result
// return number1 + number2
   

// }
// const result = addTwoNUmbers(3, 5)

// console.log("Result:", result);
// function loginUserMessage(username){
//     if(!username){
//         console.log("Please enter a username");
//         return

//     }
//     return `${username} just logged in`
// }
// //console.log(loginUserMessage("krishna"))
// console.log(loginUserMessage("krishna"))


function calculatorCartPrice(val1, val2,...num1){
    return num1
}
console.log(calculatorCartPrice(200, 400, 500, 2000))

const user = {
    username: "krishna",
    prices: 199

}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username: "sam",
    price:399
})
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 600]));