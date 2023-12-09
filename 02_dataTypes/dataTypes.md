# Strings
- string can be represented both double quote or single quote.
```javascript
  const name="hitesh";
  const repoCount=50;
  console.log(name+repoCount+" Chaudhary" )//-->hitesh50 Chaudhary
``` 
- Above method is old way. 
- Modern way is to use backtics ``
- eg:
```javascript
  console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
  //This modern way is called string intopolation.
``` 
- <b>String interpolation: </b> In JavaScript, interpolation is the process of inserting strings or values into an existing string for various purposes

### declare string as an Object
```javascript
  const gameName=new String('hitesh');//Object form
  //Here string is an object. So, elements can be accessed by index.
```
- `console.log(gameName.__proto__); // it will give prototype ->{}`
- Let's understand code
```javascript
  const gameName=new String('hitesh-hc');
  console.log(gameName)
  console.log(gameName[0]);//h
  console.log(gameName[1]);//i

  console.log(gameName.__proto__);//it will give prototype ->{}

  console.log(gameName.length);//give the length.
  console.log(gameName.toUpperCase());
  //convert the all letters of gameName to uppercase.;
  // also note that this will not change the original value.
  //console.log(gameName)//still giving orignial value.

  //1. charAt()--> find char at index
  console.log(gameName.charAt(3))

  //2. indexOf()--> find index of char
  console.log(gameName.indexOf('t'));

  //3. slice
  const newString=gameName.substring(0,gameName.indexOf('-'));
  console.log(newString);

  const anotherString=gameName.slice(0,4);//slice from 0 to 4
  console.log(anotherString)
  const sliceString=gameName.slice(-8,4);
  console.log(sliceString)

  //4. trim--> remove the extra space present in the string.
  const newString1="   hitesh     "
  console.log(newString1);
  console.log(newString1.trim());

  //5. replace--> 
  const url="https://hitesh.com/hitesh%20choudhary"
  console.log(url.replace('%20','-'));

  //6. include
  console.log(url.includes('hitesh'));
  console.log(url.includes('kkumar'));

  console.log(gameName.split('-'));
  //it will split the hitesh-hc into hitesh and hc.
```
- Open console.log() and find which function what do?

# Numbers
- The `Number()` method converts a value to a number.
- If the value cannot be converted, NaN is returned.
- Note:
    - For booleans, Number() returns 0 or 1.
    - For dates, Number() returns milliseconds since January 1, 1970 00:00:00.
    - For strings, Number() returns a number or NaN.
```javascript
  const balance=new Number(100);//object--> Number
  console.log(balance);//100
```
#### Some methods of Number
- Methods are accessed using dot operator
1. `toString()` : Convert the number to the string.
```javascript
  console.log(balance.toString());//number conveted to string.
  //now number becomes string so we can now apply method of string.
```
- Q. Find the number of a digit in a number.
```javascript
    let number=new Number(12345);
    let numberInString = number.toString();
    console.log(numberInString.length);// 5
```
2. `toFixed(length)` : It will fixed the number of digits after decimal point.
```javascript
  console.log(balance.toFixed(2));
  //it will fixed the two number after the decimal points.
  // It is generally used in ecommerce application.
```
- Some other methods
```javascript
  const otherNumber=23.8966;
  console.log(otherNumber.toPrecision(3));
  //return string of n(number passed in argument) digit.
  console.log(otherNumber.toPrecision(4));
  //Priority according to first digit.

  const hundreds=1000000
  console.log(hundreds.toLocaleString('en-IN'));
  //10,00,000  --> 'en-IN' represents the Indian standards.
```

# Maths
```javascript
  console.log(Math);
  //Math is an Object. Check it on console and read all the properties.

  //absolute value
  console.log(Math.abs(-1));//1

  //round() -> round of the number
  console.log(Math.round(4.6));//5

  //Math.ceil() --> always take integer part +1 value.
  console.log(Math.ceil(4.2));//5 
  
  //Math.floor() --> always take the integer part value.
  console.log(Math.floor(4.2));//4 

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
  const num=(Math.random()*(max-min+1)+min)
  //give the random number value between min and max.
  console.log(num);
  console.log(Math.floor(num));// give the random number between 10 and 20.

```