//Object can be declared in two ways.
//Note that jo object constructor se bangega =>singelton

//--> object can be created through constructor method.
// --> Object.create()  -->isi ke andar singleton object

//using symbol in object
const mySym=Symbol("key1");

//1. object literals.
//Object decaration and defination
const JsUser={
    name:"Pankaj",// note that bydefault, name, age,location, etc... is taken as string.
    age:20,
    location:"asansol",
    "full name":"Hitesh Choudhary",// this value can't be accessed by dot. so second ways is more effiecient.
    email:"xyz@gamil.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"],
    //mySym:"mykey1"//not a good way to declare symobl as this. if you declare it's type will be string.
    [mySym]:"mykey1" // it's a good way.
}

//Accessing the object.--> Two ways to access.
//a)--> by dot method
console.log(JsUser.email);
//console.log(JsUser.full name); --> it is throwing an error so go for second ways.

//b)--> by square bracket method.
console.log(JsUser["name"]);
console.log(JsUser["full name"]);
//console.log(JsUser["mySym"]);//mykey1 --> it's not a symbol.
//console.log(typeof JsUser["mySym"]);// it's type is string. -->> access symobl by without ""
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);


// Changing the value of object
JsUser.email="hitesh@cd.com"

//Freezing the value of object --> it's means you can't change the value of an object.
//Object.freeze(JsUser);
JsUser.email="hitesh@microsof.com";// it will not be propagated in object as it has been frezeed.
console.log(JsUser);


//declaring the function in the object
JsUser.greeting=function(){
    console.log("hello js user");
}
console.log(JsUser.greeting());
//Note that greeting() -> function execute.
// greeting --> function reference.

JsUser.greetingTwo=function(){
    console.log(`Hello Js User, ${this["full name"]}`)//this--> refers to current object.
    console.log(`Your age is, ${this.age}`);
}
console.log(JsUser.greetingTwo());


//Final note: Generally dot method is used but [] method is used in case where dot  method failed.