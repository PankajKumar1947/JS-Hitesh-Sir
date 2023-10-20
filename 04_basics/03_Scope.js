
// scope-->{} --> if it comes with array, if elese , loop  not object then it is called scope.
var c=3;
let a=5;
if(true){
    let a=10;
    const b=20;
    //var c=40;  
    console.log("inner:" ,a); // 10 --> it's value will be updated for the block of a code.
    console.log("Inner var : ",c);//3 --> it's value will be updated for whole code.
}

//console.log(a);// can't be accessed.
//console.log(b);// can't be accessed.
//console.log(c);// can be accessed. So we should not use var for varibale declarations.


console.log("Outer : ",a);//5
console.log("Outer var: ",c);//3