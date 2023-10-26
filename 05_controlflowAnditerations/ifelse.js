// if control flow
//conditional operator: <,>,<=,>=,==,!=,===,!==

const temprature=41;
if(temprature<50)
    console.log("temp less than 50");
else
    console.log("temp greater than equal to 50");


const score=200;
if(score>100){
    const power="fly";
    console.log(`User power : ${power}`);
}

//Shorthand notations
const balance=1000;
if(balance>500) console.log("test");

//nesting
if(balance<500){
    console.log("less than 500");
} else if(balance<750){
    console.log("less than 750")
}else{
    console.log("less than 1200");
}

//real life use.
const userLoggedIn=true;
const debitCard=true;
const loggedInFromGoogle=false;
const loggedInFromEmail=true;

if(userLoggedIn && debitCard){
    console.log("Allowed to by courese");
}

if(loggedInFromEmail || loggedInFromGoogle)
    console.log("User is logged in");