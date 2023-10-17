const score=400;
console.log(score);

const balance=new Number(100);//object--> Number
console.log(balance);

//some methods of a number.
console.log(balance.toString());//number conveted to string.
//now number becomes string so we can now apply method of string.

console.log(balance.toString().length);// return the lenght of the string conveted from the number.

console.log(balance.toFixed(2));//it will fixed the two number after the decimal points.
// It is generally used in ecommerce application.


const otherNumber=23.8966;
console.log(otherNumber.toPrecision(3));//return string of n(number passed in argument) digit.
console.log(otherNumber.toPrecision(4));//Priority according to first digit.


const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN'));//10,00,000  --> 'en-IN' represents the Indian standards.


//+++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++//

console.log(Math);//Math is an Object. Check it on console and read all the properties.

//absolute value
console.log(Math.abs(-1));//1

//round()
console.log(Math.round(4.6));//5
console.log(Math.ceil(4.2));//5  --> Math.ceil() always take integerpart +1 value.
console.log(Math.floor(4.2));//4  --> Math.floor() always take the integerpart value.

//min() and max()  --> array is passed as an argument.
console.log(Math.min(8,2,3,5,7));
console.log(Math.min(1,2,10,3,5,7));

//Math.random()
console.log(Math.random());//give random value from 0 to 1
console.log(Math.random()*10);//give random alue form 0 to 10.
console.log((Math.random()*10)+1);//give random value from 1 to 10;
console.log((Math.floor(Math.random()*10))+1);//give random integer from 1 to 10;

const min=10;
const max=20;
const num=(Math.random()*(max-min+1)+min)//give the random number value between min and max.
console.log(num);
console.log(Math.floor(num));// give the random number between 10 and 20.


