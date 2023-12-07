# CONTENT
- higher order funcs
- constructor funcs
- first class funcs
- new keyword
- iife
- prototype
- prototype inheritance
- this call apply bind
- pure & impure funcs
- closures

# Higher Order Function
- Higher Order Functions Are the funcitons which accept a function in a parameter or return a function or both.
- eg:
```javascript
    function abcd(val){
        //code here
    }
    abcd(function(){})
```
```javascript
    function abcd1(){
        return function(){};
    }
    abcd1();
    // it is used in closure.
```
- For eg: <b>ForEach</b> method always takes another function inside it, so ForEach is a higher order function.
```javascript
    var arr=[1,2,3,4,5];
    arr.forEach(function(el){
        console.log(el);//Output: 1,2,3,4,5
    })
```

# Constructor Function
- A Function which whenever invoked with "New" keyword returns an Object, If we use "This" keyword inside that function, It returns an Object with all of the properties and methods mentioned inside that function with this keyword, such function is constructor function.
- Normal function jismein <b>this</b> keyword ka istemal ho and aap function ko call karte waqt new keyword ke use karein.
 eg
 ```javascript
    function saachaOfBiscuit(){
        this.width=12;
        this.height=22;
        this.color="brown";
        this.taste="sugary";
    }
    const bis1=new saachaOfBiscuit();
    const bis2=new saachaOfBiscuit();
    console.log(bis1)
 ```
- Why are you making constructor function ?
 Jab aapke pass aisa koi bhi mauka ho ke  apapko ek jaisi properties waale bhut saare elements bananae hai us waqt hai aap constructor function use kar sakte ho.
- eg:
```javascript
    function circularBtn(color){
        this.radius=2;
        this.color=color;
        this.icon=false;
        this.pressible=true;
    }
    const btnRed=new circularBtn("Red");
    const btnGreen=new circularBtn("Green");
    console.log(btnRed);//circularBtn { radius: 2, color: 'Red', icon: false, pressible: true }
    console.log(btnGreen);//circularBtn { radius: 2, color: 'Green', icon: false, pressible: true }
```

# First Class Function
- A language is said to have first class function when the functions in that language are treated as values or more like variables, you can save them, you can pass them as arguments to another functions.
- In Javascript, functions are treated as first class function.
```javascript
    var abcd=function(){
        //code
    }
```

# new Keyword
- <b>new</b> Keyword always creates a blank object for the constructor function which is getting called just after new keyword.
- new=> jab bhi new lagta hai humesha ek blank object apne man me bana lo.

## iife => Immediately invoked function expression
- iife hai function ko turant chalane ki kala, is tareeke seki hum log koi private variable bana paaye.
```javascript
    (function(){
        var a=12;
        //this a can't be accessed from any where except this block.
    })()
```
- Is there any method to accessed above varibale ?
 Yes: you have to defined iifee in this way.
```javascript
    var ans=(function(){
        var privateVal=12;

        return {
            getter:function(){
                //this function provides a method to accessed the value of privateVal variable.
                console.log(privateVal);
            },
            setter:function(val){
                //this function provides a method to set the value of privateVal variable.
                privateVal=val;
            }
        }
    })()
    //Accessed by: ans.getter() => 12
    //set by : ans.setter(44);
    //now accessed it: ans.getter() => 44
```

# Prototype
- Go to browser console and create an object
```var obj={name:"Pankaj";} ```
 and now Type Object name follwed with a <b>dot . </b> operator: ```obj.```
 we will see a name with lot's of extra things like ```_definegetter , _definesetter, constructor, etc``` 
- So , if we didn't created these properties where do they come from, that's where the concept of prototype comes in, every created object gets a property called <b>prototype</b>, which means whenever you create an object it gets prototype property automatically

- <i> Q. Where it came from ?</i>
 Ans: Javascript by default adds a property called ```[[prototype]]``` to every object, so if you ever see any object, you can blindly say that object contains prototype, so now, what does it contains ?
- <i>What does it contains ?</i>
 Ans: ```[[prototype]]``` contains many helper properties and methods which we can use to complete our taks, let's say we create an array and we want to know length of it, what to do, we use ```.length``` on that array, did we created ```.length``` on that array, No! but it still contains ```.length```, the questions is how ?
 <u>The answer is:</u>
 many properties and methods are already available to use built by javascript creators inside prototype of every object.
 
### Prototypal Inheritance
- Inheritance is passing parent's features or properties to their childrens, to do the same thing in javascript with the help of prototype (one extra property always given by javascript to every object) is called prototypal inheritance.

##### How can we perform prototypal inheritance ?
 Ans: make an object called human and put properties like, canFly, canTalk, willDie
 ```javascript
    var Human={
        name: "Pankaj",
        canFly: false,
        canTalk:true,
        willDie:true
    }
 ```
  make another object called shreyians stduent, he can do all things which a human can do bu he can do few more things like, he can solve js questions and create modern websites, so we create extra two props which normal humans can't do in that object and rest properties we will inherit from human.
```javascript
    var shreyiansStudent={
        solveJsQuestion:true,
        createModernWebstie:true
    }
```
```javascript
    shreyiansStudent.__proto__=Human;
    // this line inherits in shreyians from Human.
    //see the inherited part in prototype. 
    console.log(shreyiansStudent.canFly);
    //Now we can accessed by . method

```
- whole code 
```javascript
    var Human={
        name: "Pankaj",
        canFly: false,
        canTalk:true,
        willDie:true
    }
    var shreyiansStudent={
        solveJsQuestion:true,
        createModernWebstie:true
    }
    shreyiansStudent.__proto__=Human;// this line inherits in shreyians from Human.
    //see the inherited part in prototype.
    console.log(shreyiansStudent.canFly);
    //Now we can accessed the property of Human.
```

# this call apply bind
## this
- this keyword is a special keyword in Javascript which changes it's value in different context.

#### Let's see "this" keyword in different context.
- in global scope:
 ```console.log(this);``` gives ```window```
- in function scope
```javascript
    function abcd(){
    console.log(this); gives -> window
    }
```
- in method scope: waisa function jo scope ke andar ho usse method kahte hai.
```javascript
    var obj={
        name:"Pankaj",
        someMethod: function(){
            console.log(this);// gives object obj
        }
    }
```
```NOTE: In any method, "this" keyword always refers to parent object.```
##### Event listeners
```javascript
    var buttton=document.querySelector("button");
    button.addEventListener("click",function(){
        console.log(this);
        //this keyword is equal to whatever written before addEventListener,
        // in this case this keyword will refers to button element.
        this.style.color="red";//understand it.
    })
```

## call 
- agar tumharee pass koi function hai and koi object hai and tumhe function chalana hai aur by default jo this ki value window hai use window naa rakh kar point karwana hai kisi object ki taraf.
```javascript
    function abcd(){
        console.log(this);
    }
    var obj={age:23}
    
    //bydefault: value of this=window but
    abcd.call(obj);// this line will change the value of this to obj.
    
```
## apply
```javascript
    function abcd(val1,val2,val3){
        console.log(this,val1,val2,val3);
    }
    var obj={age:23}
    abcd.call(obj,1,2,3)//first argument is object.
```
```javascript
    function abcd(val1,val2,val3){
        console.log(this,val1,val2,val3);
    }
    var obj={age:23}
    abcd.apply(obj,[1,2,3])//first argument is object.
    //remaining values are passed by the help of array.
```
## bind
```javascript
    function abcd(){
        console.log(this);
    }
    var obj={age:24};
    //abcd.bind(obj);//kuch answer nahi aayega 
    //kyuki bind kuchh chalata nahi hai.
    //ise kahi store kar lo
    var bindFunc=abcd.bind(obj);
    bindFunc();// now run it.
```

# pure and impure functions
- Pure function is any function which has therse 2 features:
 1. it should always return same ouput for same input.
 2. it will never change/update the value of a global variable.
```javascript
    function abcd(a,b){
        return a*b;
    }
    var ans1=abcd(1,2);
    var ans2=abcd(1,2);
    // same input in both call
    // same ouput in both call
```
- impure function examples
```javascript
    function abcd(val){
        return Math.random()*val;
    }
    var ans1=abcd(2);
    var ans2=abcd(2);
    //same input in both call 
    //but output is different in both cases.
```