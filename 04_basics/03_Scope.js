
// scope-->{} --> if it comes with array, if elese , loop  not object then it is called scope.
var c=3;
let a=5;
if(true){
    let a=10;
    const b=20;
    //var c=40;  
    //console.log("inner:" ,a); // 10 --> it's value will be updated for the block of a code.
    //console.log("Inner var : ",c);//3 --> it's value will be updated for whole code.
}

//console.log(a);// can't be accessed.
//console.log(b);// can't be accessed.
//console.log(c);// can be accessed. So we should not use var for varibale declarations.


//console.log("Outer : ",a);//5
//console.log("Outer var: ",c);//3


// Note that: variable inside a function can accessed global variable but 
// variable outside the block can't accessed the variable of block.


// ++++++++++++++++++++++++ Nested Scope +++++++++++++++++++++++++//
function one(){
    const username="hitesh"
    
    function two(){
        const website="youtube"
        console.log(username);// can access the username as username is global for it.
    }
    //console.log(website);--> can't accessed website of varibale defined under two block.

    two(); // if you not call it then the function two() will not be executed.
}
one();

if(true){
    const username="hitesh";
    if(username==="hitesh"){
        const website="  youtube";
        console.log(username+website);// --> will be printed as it can accessed both username as well as website .
    }
   // console.log(username+website); //--> throw an error. -> as it can't accessed website but it can access username.
}


//+++ interesting question:
//Note that: you can call a function before it's declaration.
// But you can't call a funtion expression before it's declaration.

console.log(addone(5));// --> not throw an error. a
// it's a functon
function addone(num){
    return num+1;
}


console.log(addTwo(5));//--> throw an error . as it is declared before the function defination.
// it's also a function but sometimes it is called expression.
const addTwo=function(num){
    return num+2;
}
addTwo(5);