// Chained mehtod: fetch('http://somethig.com').then().catch().finally() : these are we going to read

//first promises
//creating first promises
const promiseOne=new Promise(function(resolve,reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is complete");
        resolve();//here resolve() is used to connect these two .
    },1000)
})
//using first promises by .then()
promiseOne.then(function(){
    console.log("Promise consumed")
})

//shorter code for first promises(above): second promise
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})


//third promise: passing the value after resolving from function written inside the prmise to function written inside then()
const promisThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Chai",email:"chai@chaicode.com"})//resolve connects the promise() creation and promise use.
    },1000)
})
promisThree.then(function(user){
    //here argument passed in the function take the data from resolve
    console.log(user);
})

//fourth promise: Humko accha laga aur achha bhi hai, samajh me bhi aa raha hai
const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){

        let error=true;
        if(!error){
            //if there is a error then it will not run
            resolve({username:"hitesh",password:"123"})
        }else{
            //if there is a error then it will run
            reject('ERROR: Something went wront')
        }
    },1000)
})
//.then and .catch ka chaining.
promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    //.then() ka chaining
    console.log(username);
}).catch(function(error){
    //.catch()  is used to handle the error
    console.log("error");
}).finally(()=>{
    //it will run in all cases i.e, whether the promise is resolved or rejected . it is bydefault.
    console.log("The Promise is either resolved or rejected.")
})



//promise5: Interesting
const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){

        let error=true;
        if(!error){
            //if there is a error then it will not run
            resolve({username:"JavaScript",password:"123"})
        }else{
            //if there is a error then it will run
            reject('ERROR: JS went wront')
        }
    },1000)
})

// async function consumedPromiseFive(){
//     const response=await promiseFive;
//     console.log(response);
// }
// //Note that by async await we cannot directly handled the error 
// consumedPromiseFive();

//handling the error in async await.
async function consumePromiseFive(){
    try{
        const response= await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();


//JSON Response
// async function getAllUsers(){
//     try{
//         //Now fetch is object. previous it was a libraray. generally url is passed as argument in the fetch().
//         const response=await fetch("https://jsonplaceholder.typicode.com/users");//return data as string.
//         // console.log(response);//print the rsponse in string form
//         const data=await response.json()//converting response type from string to json.(response.json takes time to convert from string to json so we should use await response.json())
//         console.log(data);
//     }
//     catch(error){
//         console.log("E: ",error);
//     }
    
// }
// getAllUsers();


// JSON Response using .then, .catch, .finally
fetch("https://api.github.com/users/PankajKumar1947")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})



