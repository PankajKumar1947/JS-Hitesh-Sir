let score = "33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof(valueInNumber));

let score1= "33abc"
let valueInNumber1 = Number(score1)
console.log(typeof(valueInNumber1));
console.log(valueInNumber1)  //NaN -> Not a number. NaN is a special type

let score2= null
let valueInNumber2 = Number(score2)
console.log(typeof(valueInNumber2));
console.log(valueInNumber2) // 0

let score3= undefined
let valueInNumber3 = Number(score3)
console.log(typeof(valueInNumber3));
console.log(valueInNumber3)  // NaN

//notes
// "33" => 33
// "33abc" => NaN
//true => 1; false => 0

let isLoggedIn=1
let booleanIsLoggedIn =Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//1 => true; 0 => false
//"" => false
//"hitesh" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)