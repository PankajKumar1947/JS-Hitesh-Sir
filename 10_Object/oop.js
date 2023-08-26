//object literal
const user={
    //properties
    username: "hitesh",
    loginCount:8,
    signed:true,

    //method
    getUserDetails:function(){
        //console.log("Got user details from database");
        //console.log(`Username:${this.username}`);//this keyword represent current object.
        console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);//empty parenthesis.

// const promiseOne=new Promise()//new works as constructor function
// const date=new Date()

function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greeting=function(){
        console.log(`Welcom: ${this.username}`)
    }
    return this;//impliclity it is defined we can return or not .
}

// const userOne= User("hitesh",13,true);
// console.log(userOne);

// const userTwo= User("ChaiaurCode",11,false);//it will override the existing data.
// console.log(userOne);
//to get rid of overriding problem use new keyword.

const userOne=new User("hitesh",13,true);
//console.log(userOne);

console.log(userOne.constructor);

const userTwo=new User("ChaiaurCode",11,false);//it will override the existing data.
//console.log(userOne);
//new keyword is used to create a new object.it helps us to get rid of overwriting data.
//a constructor function is called using new keyword.