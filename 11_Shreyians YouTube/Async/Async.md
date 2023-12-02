# CONTENT
- sync and async kya hota hai?
- async js hai kya ?
- pata kaisa chalega ki ham sync code ya async code likh rahe hai ?
- js is not asynchronous
- async ki poori kahaani
- single threading and multi threading
- callbacks
- promises
- then and catch
- try and catch
- async await
- 5 use cases ekdum real world waale
- concurrency and parallelism
- throttling


# sync and async kya hota hai ?
- sync ka matlab ek ke baad dusra hoga, jab tak ek command complete na ho, dura shuru nahi hoga.
- eg: task a-4s => first it will be completed.
      task b-2s => after task-a completion it will be completed.
      task c-15s -> after task-b it will be completed.
      task d-1s -> after task-c it will be completed.
- Overall it will took more time as next task has to wait for the completion of previous task.

- aync ka matlab saare kam ek saath suru kar do jiska answer pahle aa jaye uska  jawab pahle de dena.
- In above eg:
    all task completion will start at the same time but it may that few of them might be completed first or at the same time.

## pata kaisa chalega ki ham sync code ya async code likh rahe hai ?
```javascript
setTimeout(callback,timeinms);
//setTimeout()-> takes two argument first is callback and
//second in time in ms.
//Callback is basically a function
setInterval
promises
fetch
axios
// axios ekk package hai jo API call ke liye use hota hai.
XMLHttpRequest
```

- If you are using one of above, then you are using syncronous otherwise you are using ansynchrounous.

# async js hai kya ?
- kai baar aapka final code depended hota hai kisi aur ke server par, is case mein humein nahin pata hota ki anwer uske server se kab laut kar aayega, to hum kya nahi kar sakte is writing sync code, isse niptane ke liye hum log async code likh dete hai taaki blocking na ho and jab bhi answer aaye humara anwer ke respect mein chalne wala code chal jaaye.

- async code ka main motive hota hai ki  un cases mein jismein hame pata nahi code ka answer kitni der mein aayega to jab bhi anwer aa jaaye uske answer ke respect me koi particular code chala dena.

- eg: facebook se ek photo laye jab photo aajayee to show kar dena.

- eg: 
```javascript
    console.log("Hello from line - 1");
    //Execute first.
    setTimeout(function(){
        console.log("Hello from line - 2");
        //execute last.i.e, will execute ager 2s.
    },2000);
    console.log("Hello from line - 3");
    //Execute second    
```
<b> why funtion passed in the argument of setTimeout() is callback() function ?</b>
Ans: 
- This function is Callback because it has been put on hold for some time and callback after some time.
- Callback function humesha aync code mein answer aane par chalta hai.

# JavaScript is not asynchronous
- async ka matlab hota hai do kaam ek saath hona and Javascipt do kaam ek sath nahi karti. It is called single threaded language.
- Jo bhi code main stack par hota hai wo ouput karta hai and jo bhi stack par hota hai wo behind the scenes processing kar sakta hai aur jab uski processing complete ho use main stack mein lakar chalayaa ja sakta.
- Main stack => Execution
  Jab main stack khali hoga tab check hoga ki side stack mein answer aa chuka hai ki nahi. Agar answer aa chuka hai to us completed task ko side stack se main stack mein laya jaayega Execute hone ke liye. 
- <b> Event Loop: </b> <i> event loop main stack me side stack se chijein laata hai . Once the main stack becomes empty then This <b>Event loop</b> will check where the task is completed in tha side stack or not. if completed then will bring from side stack and send it to the main stack for Execution.</i>

- Pridict it output for better understanding of Event loop and above.
```javascript
    console.log("Hello from line - 1");
    setTimeout(function(){
        console.log("Hello from line - 2");
        //will execute when all the task from main stack is executed .
        //No matter what the time is passed in the argument.
    },0);//time=0ms
    console.log("Hello from line - 3");
    //Output:
    //Hello from line - 1
    //Hello from line - 3 
    //Hello from line - 2
```

# Callbacks
- A callback function is a function that is passed as an argument to another function. The callback function is then called after the first function has finished executing. 
- This allows you to write asynchronous code, where the order of execution of functions is not important
- if you are using any of following Iska matlab hai ki you are writing asyncronous code.
    fetch
    axios
    promises
    setTimeout
    setInterval
    <i>by the help of any one of above we have sent the request.</i>
    then catch
    callbacks
    async await
    <i>by the help of any one of above , answer complete hone ke baad phir kaise code ko chalana hai</i>
    
- Callback ek function hota hai, ye sirf tab chalta hai jab async code ka completion hota hai.
```javascript
    var ans=fetch(`https://www.facebook.com`)
    console.log(ans);
    //Output:
    //Promise { <pending> }
    //Reason: Before fetching the data from url console.log(ans) was executed.
```


# Promises
- Let's understand an example
```javascript
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
```
- <b>Q. User will ask the number between 0 se 9 if the number is below 5 then resolve otherwise reject.</b>
```javascript
    var userAns=new Promise((res,rej)=>{
        var n=Math.floor(Math.random()*10);
        if(n<5)
            return res();
        //if means that if the number is less than 5 then
        // promises will be resolved.
        else
            return rej();
        //other wise promises will be rejected.
    })
    userAns.then(function(){
        console.log("Below 5");
    }).catch(function(){
        console.log("Above 4");
    })
    //Output will vary based on the random number generated.
```

- <b>Q.Sabse pahle ghar par aao
        gate holo aur gate lago
        khanan pakao khana khao
        tv dekho
        sojao kyuki tum thak gaye ho

    Make a promises of above lines if above line executed then next line should be executed.
    </b>
```javascript
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
```

# Async await
- Koi bhi aisa function jisme aap async code likhenge, kyoki async code hai to aap promises ka istemal kar sakte hai, jab uska answer aayega appko then then ka use karna parega., us .then ko lagaane se bachne ke liye , aap async await ka use kar sakte hai.

- If async code use used then before that code use <b>async</b> keywords and in that async code use <b>await</b>.
- Eg:
```javascript
    async function abcd(){
        await fetch(``)//here fetch is async code so await keyword used here
        // and async keyword is used in parent funciton.
    }
```
- Let's understand when async and await keywords use not used then how much code we have to write.
```javascript
    //API call using fetch()   and .then
    function abcd(){
        fetch('https://randomuser.me/api/')
            .then(function(raw){
                return raw.json();
            })
            .then(function(data){
                console.log(data);
            })
    }
    abcd();
```
- changing above code into async await
```javascript
    async function abcd(){
        let raw= await fetch('https://randomuser.me/api/')
        let ans=await raw.json();//if you not use await here then data will be in pending state.
        // It's means raw me data aayi bhi nahi aur ans wali line chal gayi. 
        // jab raw wali data aayegi tabhi ans waali line chalegi. isliye await yaha bhi use karna padega.
        console.log(ans);  
    }
    abcd();
```
- Jab bhi koi code async hai to aapko uske liye wait karna padta hai kyoki humein nahi pata uska answer kab aayega.


# 5 Use cases ekdum real world waale
- node me database se kam karne samay
- fetch
- setTimeout
- setInterval
- API call, Third party se dat late wakt.


# Concurrency and Parallelism
- <b>Concurrency:</b> js mein sync code and async code ek saath process ho raha tha ye hai concurrency.
- <b>Parallelism:</b> Focus jaada karta hai different processors and unke cores par kaam ka challane par
- <b>Throttling:</b> kisi code ke control karna number of executions.
    eg: Mouse scroll event. we can decrease the number of calls using throttling.