//Problem: how do you know the number of parameters.
function calculateCartPrice(...num1){
    return num1;
}
// above function will return an array of 200,400,500 as there is a REST Operator in the parameters.
console.log(calculateCartPrice(200,400,500));//[ 200, 400, 500 ]

function calculateCartPrice2(val1,val2,...num1){
    return num1;
}
console.log(calculateCartPrice2(200,400,500,20000));//[ 500, 20000 ] --> val1 takes 200, val2 takes 400 and num1 takes remaining as an array.


//Passing an object as an argument..
const user={
    username:"hitesh",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is  ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user);

handleObject({
    username:"Pankaj",
    price:300
})

// Passing an array as an argument.
const myNewArray=[200,400,100,600];
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([222,333,444]));