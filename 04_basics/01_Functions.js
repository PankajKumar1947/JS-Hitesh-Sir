// Functions:
function sayMyName(){
    console.log("Hitesh");
}

//sayMyName //--> it is a reference. it will not be executed.
//sayMyName()  //--> it is a function execution.

function addTwoNumbers(number1,number2)// here number1, number2 are parameters.
{
    console.log(number1+number2);
}
const result=addTwoNumbers(3,4);// arguments.
console.log("Results : ",result);//undefined as above function is not returning any thing.

function addTwoNumbersReturnType(number1,number2){
    // let result=number1+number2;
    // return result;
    return number1+number2;
}

const newResult=addTwoNumbersReturnType(4,5);
console.log(newResult);// 9

// Another method of making function.
function loginUserMessage(username){
    // return `${username} just logged in `;
    if(username===undefined){
        console.log("Please Enter a username");
        return ;
    }
    return `${username} just logged in `

}
console.log(loginUserMessage("Pankaj"));
//note that if you not pass anything as argument then this will give undefined so, handle in function using if and else statment..
console.log(loginUserMessage());

//Note that you can give some deafault values to the parameters
function printCelName(username="Hritik"){
    return `${username} is a famous celebritites.`;
}
console.log(printCelName("Raushan"));