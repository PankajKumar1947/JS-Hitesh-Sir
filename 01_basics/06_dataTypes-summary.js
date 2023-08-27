// Primitive data types
// 7 types: String, Number, Boolean,null, undefined, Symbol, BigInt

//JavaScript is dynamically typed language:
const score=100;//number
const scoreValue=100.2//number

const isLoggedIn=false//boolean value
const outsideTemp=null//null
let userEmail;//undefined value

const id=Symbol('123');
const anotherId=Symbol('123')
//Note that value of id and anotherId is not same.
console.log(id===anotherId);

const bigNumber=123456789097n //bigInt: Use n in last


//Non-Primitive or Reference Type
//Array, Objects, Functions

const heros=["Shaktiman","naagraj","doga"];//arrays

//object
let myObj={
    name:"hitesh",
    age:22,
}

//function
const myFunction=function(){
    console.log("Hello World");
}

//Knowing the data types
console.log(typeof(score));//number
console.log(typeof(isLoggedIn));//boolean
console.log(typeof(outsideTemp));//object
console.log(typeof(userEmail));//undefinec
console.log(typeof(id));//symbol
console.log(typeof(myFunction));//function
console.log(typeof(heros));//object
console.log(typeof(myObj));//object