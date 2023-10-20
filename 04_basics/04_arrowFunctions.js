const user={
    username:"hitesh",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} , welecome to website`);// this represent current context.
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username="sam";
// user.welcomeMessage();

//console.log(this); // -->> refers to an empty in node environment. but it give window in console -> check it by open browser.
// As window is a global object for browser.


// ++++++++++++++++++++ arrow function +++++++++++++//
//function chai(){
    console.log(this); // gives a lot of things.
    let username="hitesh";
    //console.log(this.username);// it will give undefined. i.e, this can't access inside a function.
//}
//chai();


//arrow function 
// const chai = function(){
//     let username="Pankaj";
//     console.log(this.username);// give undefine
// }

const chai =() =>{
    let username="Pankaj";
    console.log(this.username);// again give udnefined.
}
chai();


//something more about arrow function
//syntax: ()=>{}
const addTwo=(num1,num2)=>{
    return num1+num2;
}
console.log(addTwo(2,3));

// implicit return of above function. --> don't use parenthesis
const addTwoImp=(num1,num2) => num1+num2
const addTwoImp1=(num1,num2) => (num1+num2)// same as above
console.log(addTwoImp(22,33));
//implicit meaning: ham manlete hai ki num1+ num2 return ho raha hai.

//Note that : if you write in curly parenthesis then you have to write return keywords.
// but if you write in small parenthesis then you have not write return keywords. return will be implicitly made.


//returning an object in arrow function.
const returnObject=()=> {username:"hitesh"};//undefined. you can't return an object like this.
// for returning object you have to wrap an object in parenthesis.
const returnObjectT=()=>({username:"Pankaj"});
console.log(returnObjectT());


// use of arrow function: used in loop.