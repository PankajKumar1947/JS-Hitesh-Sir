const myNumbers=[1,2,3,4,5,6,7,8,9,10];

//map()  --> automatically returned the value
//map() also takes a callback function.
const newNums=myNumbers.map((num)=> num+10);// add 10 to each value and return in the variable.
// console.log(newNums);

// chaining
const newNums1=myNumbers
    .map((num)=>num*10)
    .map((num)=>num+1);//here num will take the value after updating in the first chain.
console.log(newNums1);//[11, 21, 31, 41,  51,61, 71, 81, 91, 101]

//note that we can do any number of chaining.
const newNums2=myNumbers
    .map((num)=>num*10)
    .map((num)=>num+1)
    .filter((num)=> num>70);
console.log(newNums2);//[ 71, 81, 91, 101 ]