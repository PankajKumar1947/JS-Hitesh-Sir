console.log(2>1);//true
console.log(2>=1);//true
console.log(2<1);//false
console.log(2==1);//false
console.log(2!=1);//true

console.log("2">1);//true
console.log("02">1);//true


//we should not use below these code.

console.log(null>0);//false
console.log(null==0);//false
console.log(null>=0);//true
//reason: The reason is that an equality check == and comparisons > < >= <= work differently.
//Comparisons convert null to a number, treating it as 0.
//That's why line-12: null>=0 true and line-10: null>0 is false.

console.log(undefined==0);//false
console.log(undefined>0);//false
console.log(undefined<0);//false


//strict check:  ===  : datatype and value both should same.
console.log("2"==2);//true
console.log("2"===2)//false