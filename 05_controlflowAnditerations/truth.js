const userEmail="hitesh@ch.ai"

if(userEmail){
    //here it assuemd that userEmail is true as it contains some  value . this is called truthy values.
    console.log("Got user email");
} else{
    console.log("Don't have user email")
}

//falsy values
//false,0,-0,BigInt 0n,"",null,undefined,Nan

//truthy values
//reamaning alll are truthy values
// "0" ,'false'," ",[],{}, function(){}

const userEm=[];
if(userEm.length===0){
    console.log("Array is empty");
}

const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??):null undefined
let val1;
//val1=5 ?? 10
//val1=null ?? 10 // if there is a null then assign default.

val1=null ?? 10 ?? 20;// first will be assigned
console.log(val1);

// Ternary Opearator.
// syntax: condition ? true : false
//eg;
const iceTeaPrice=100;
iceTeaPrice>=80 ? console.log("More than 80") : console.log("Less than 80");