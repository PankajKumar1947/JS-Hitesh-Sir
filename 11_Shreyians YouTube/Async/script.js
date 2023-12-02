// console.log("Hello from line - 1");
// //Execute first.
// setTimeout(function(){
//     console.log("Hello from line - 2");
//     //execute last.
// },2000);
// console.log("Hello from line - 3");
// //Execute second



// var ans=fetch(`https://www.facebook.com`)
// console.log(ans);


//Promises:
var ans=new Promise((res,rej)=>{
    if(true)
        return res();
    else
        return rej();
})

ans
    .then(function(){
        console.log("resolve ho gaya tha");// it will be ouput if the conditon was true in if statement.
    })
    .catch(function(){
        console.log("reject hua tha !");
    })


//User will ask the number between 0 se 9 if the number is below 5 then resolve otherwise reject.
var userAns=new Promise((res,rej)=>{
    var n=Math.floor(Math.random()*10);
    if(n<5)
        return res();
    else
        return rej();
})
userAns.then(function(){
    console.log("Below 5");
}).catch(function(){
    console.log("Above 4");
})


var promise1=new Promise(function(res,rej){
    return res("Sabse pahle ghar par aao");
})
var promise2=promise1
    .then(function(data){
        console.log(data);
        return new Promise(function(res,rej){
            return res("gate kholo aur gate lago");
        })
    })
var promise3=promise2.then(function(data){
    console.log(data);
    return new Promise(function(res,rej){
        return res("khanan pakao khana khao");
    })
})
var promise4=promise3.then(function(data){
    console.log(data);
    return new Promise(function(res,rej){
        return res("tv dekho");
    })
})
var promise5=promise4.then(function(data){
    console.log(data);
    return new Promise(function(res,rej){
        return res("sojao kyuki tum thak gaye ho");
    })
})


//Api Call: async await
function abcd(){
    fetch('https://randomuser.me/api/')
        .then(function(raw){
            return raw.json();
        })
        .then(function(data){
            console.log(data);
        })
}


async function abcd(){
    let raw= await fetch('https://randomuser.me/api/')
    let ans=await raw.json();//if you not use await here then data will be in pending state.
    // It's means raw me data aayi bhi nahi aur ans wali line chal gayi. 
    // jab raw wali data aayegi tabhi ans waali line chalegi. isliye await yaha bhi use karna padega.
    console.log(ans);  
}
abcd();