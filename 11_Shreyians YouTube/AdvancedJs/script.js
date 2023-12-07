//############ Higher order functions

// function abcd(val){

// }
// abcd(function(){})

// function abcd1(){
//     return function(){};
// }
// abcd1();

// var arr=[1,2,3,4,5];
// arr.forEach(function(el){
//     console.log(el);//Output: 1,2,3,4,5
// })


//################# Constructor Function
// function saachaOfBiscuit(){
//     this.width=12;
//     this.height=22;
//     this.color="brown";
//     this.taste="sugary";
// }
// const bis1=new saachaOfBiscuit();
// const bis2=new saachaOfBiscuit();
// const bis3=new saachaOfBiscuit();
// console.log(bis1)

// function circularBtn(color){
//     this.radius=2;
//     this.color=color;
//     this.icon=false;
//     this.pressible=true;
// }
// const btnRed=new circularBtn("Red");
// const btnGreen=new circularBtn("Green");
// console.log(btnRed);
// console.log(btnGreen);



// iifee
// (function(){

// })()


//prototypal inheritance
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
//Now we can accessed
console.log(shreyiansStudent.canFly);
