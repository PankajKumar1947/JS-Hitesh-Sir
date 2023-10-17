const name="hitesh";
const repoCount=50;

console.log(name+repoCount+" Chaudhary");//string concatenation: old ways

//modern ways is use backticks ` `
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//it is called string string intopolation.


//- Another way to declare string.
const gameName=new String('hitesh-hc');
console.log(gameName)
console.log(gameName[0]);//h
console.log(gameName[1]);//i

console.log(gameName.__proto__);//it will give prototype ->{}

console.log(gameName.length);//give the length.
console.log(gameName.toUpperCase());//convert the all letters of gameName to uppercase.;
// also note that this will not change the original value.
//console.log(gameName)//still giving orignial value.


//charAt()--> find char at index
console.log(gameName.charAt(3))

//indexOf()--> find index of char
console.log(gameName.indexOf('t'));


//slice
const newString=gameName.substring(0,gameName.indexOf('-'));
console.log(newString);

const anotherString=gameName.slice(0,4);//slice from 0 to 4
console.log(anotherString)
const sliceString=gameName.slice(-8,4);
console.log(sliceString)

//trim--> remove the extra space present in the string.
const newString1="   hitesh     "
console.log(newString1);
console.log(newString1.trim());

//replace--> 
const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));

//include
console.log(url.includes('hitesh'));
console.log(url.includes('kkumar'));

console.log(gameName.split('-'));//it will split the hitesh-hc into hitesh and hc.

//oopen console.log() and find which function what do?